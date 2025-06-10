import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useLoader, extend } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { COUNTRIES } from '../data/countries';
import { feature } from 'topojson-client';
import { geoPath, geoOrthographic } from 'd3-geo';
import worldGeoData from '../data/geo/countries-110m.json';

// Convert lat/lng to 3D coordinates on a sphere
const latLngToVector3 = (lat, lng, radius) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  
  return new THREE.Vector3(x, y, z);
};

// Get color based on proximity
const getProximityColor = (distance) => {
  if (distance === 0) return new THREE.Color(0x22c55e); // green-500
  if (distance < 1000) return new THREE.Color(0x4ade80); // green-400
  if (distance < 2000) return new THREE.Color(0x86efac); // green-300
  if (distance < 3000) return new THREE.Color(0xfde047); // yellow-300
  if (distance < 5000) return new THREE.Color(0xfacc15); // yellow-400
  if (distance < 7000) return new THREE.Color(0xfb923c); // orange-400
  if (distance < 10000) return new THREE.Color(0xf97316); // orange-500
  return new THREE.Color(0xef4444); // red-500
};

// Earth component with country highlighting
const Earth = ({ guesses = [], isAnimating, setIsAnimating }) => {
  const earthRef = useRef();
  const markersRef = useRef([]);
  const countriesRef = useRef([]);
  const [geoData, setGeoData] = useState(null);
  const [targetRotation, setTargetRotation] = useState(null);
  const [lastGuessCount, setLastGuessCount] = useState(0);
  
  // Rotate the globe with animation control
  useFrame(() => {
    if (!earthRef.current) return;
    
    if (isAnimating && targetRotation !== null) {
      // Calculate the shortest path to the target rotation
      const currentY = earthRef.current.rotation.y % (2 * Math.PI);
      let targetY = targetRotation % (2 * Math.PI);
      
      // Ensure we're taking the shortest path around the sphere
      let diff = targetY - currentY;
      if (diff > Math.PI) diff -= 2 * Math.PI;
      if (diff < -Math.PI) diff += 2 * Math.PI;
      
      // Smoothly animate to the target rotation
      if (Math.abs(diff) > 0.01) {
        earthRef.current.rotation.y += diff * 0.05; // Adjust speed here
      } else {
        // We've reached the target, pause briefly before resuming normal rotation
        setTimeout(() => {
          setIsAnimating(false);
        }, 2000); // Pause for 2 seconds at the target country
      }
    } else {
      // Normal slow rotation when not animating to a target
      earthRef.current.rotation.y += 0.001;
    }
  });

  // Create a texture loader
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    
    // Load earth texture
    loader.load(
      'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
      (texture) => {
        if (earthRef.current) {
          earthRef.current.material.map = texture;
          // Enhance texture appearance
          texture.anisotropy = 16;
          earthRef.current.material.needsUpdate = true;
        }
      }
    );
  }, []);
  
  // Load world geo data from local file
  useEffect(() => {
    // Using locally stored GeoJSON data to avoid CORS issues
    setGeoData(worldGeoData);
  }, []);
  
  // Create country shapes and highlight guessed countries
  useEffect(() => {
    // Clear old country highlights
    countriesRef.current.forEach(country => {
      if (country.parent) country.parent.remove(country);
    });
    countriesRef.current = [];
    
    // Clear old markers
    markersRef.current.forEach(marker => {
      if (marker.parent) marker.parent.remove(marker);
    });
    markersRef.current = [];
    
    if (!geoData || !earthRef.current || !guesses.length) return;
    
    // Check if we have a new guess
    if (guesses.length > lastGuessCount) {
      setLastGuessCount(guesses.length);
      
      // Get the latest guess
      const latestGuess = guesses[guesses.length - 1];
      const country = COUNTRIES.find(c => c.code === latestGuess.country);
      
      if (country) {
        // Calculate target rotation to center the country
        const { lng } = country;
        const targetY = -(lng * Math.PI / 180) - Math.PI / 2; // Convert to radians and adjust
        
        // Set the target rotation and start animation
        setTargetRotation(targetY);
        setIsAnimating(true);
      }
    }
    
    // Create country features from topojson
    const countries = feature(geoData, geoData.objects.countries).features;
    
    // Process guesses and create markers
    guesses.forEach(guess => {
      const country = COUNTRIES.find(c => c.code === guess.country);
      if (country) {
        // Add a marker at the country center for better visibility
        const { lat, lng } = country;
        const position = latLngToVector3(lat, lng, 4.05); // Slightly above earth surface
        
        const geometry = new THREE.SphereGeometry(0.07, 16, 16);
        const material = new THREE.MeshBasicMaterial({ 
          color: getProximityColor(guess.proximity),
          transparent: true,
          opacity: 0.8
        });
        
        const marker = new THREE.Mesh(geometry, material);
        marker.position.copy(position);
        earthRef.current.add(marker);
        markersRef.current.push(marker);
        
        // Find the corresponding country in the GeoJSON data
        // This requires mapping between ISO alpha-2 codes and the numeric codes used in the GeoJSON
        const countryFeature = countries.find(c => {
          // This is a simplified approach - in a real app, you'd need a proper mapping
          // between ISO alpha-2 codes and the numeric codes used in Natural Earth data
          return c.properties.name === country.name;
        });
        
        if (countryFeature) {
          try {
            // Create a country outline
            const countryOutline = createCountryOutline(countryFeature, getProximityColor(guess.proximity));
            if (countryOutline) {
              earthRef.current.add(countryOutline);
              countriesRef.current.push(countryOutline);
            }
          } catch (error) {
            console.error('Error creating country outline:', error);
          }
        }
      }
    });
  }, [geoData, guesses]);
  
  // Function to create a country outline on the globe
  const createCountryOutline = (countryFeature, color) => {
    // This is a simplified approach for demonstration
    // A complete solution would require more complex geometry handling
    
    // Create a group to hold all the line segments for this country
    const countryGroup = new THREE.Group();
    
    // Process each polygon in the country's geometry
    if (countryFeature.geometry.type === 'Polygon') {
      processPolygon(countryFeature.geometry.coordinates[0], color, countryGroup);
    } else if (countryFeature.geometry.type === 'MultiPolygon') {
      countryFeature.geometry.coordinates.forEach(polygon => {
        processPolygon(polygon[0], color, countryGroup);
      });
    }
    
    return countryGroup;
  };
  
  // Helper function to process a polygon
  const processPolygon = (coordinates, color, group) => {
    const points = [];
    
    // Convert each coordinate to a 3D point on the globe
    coordinates.forEach(coord => {
      const [lng, lat] = coord;
      const point = latLngToVector3(lat, lng, 4.02); // Slightly above earth surface
      points.push(point);
    });
    
    // Create a line geometry from the points
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    
    // Create a line material with the proximity color
    const material = new THREE.LineBasicMaterial({
      color: color,
      linewidth: 2,
      transparent: false,
      opacity: 1
    });
    
    // Create the line and add it to the group
    const line = new THREE.Line(geometry, material);
    group.add(line);
  };

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[4, 64, 64]} />
      <meshPhongMaterial shininess={15} specular={new THREE.Color(0x333333)} />
    </mesh>
  );
};

// Main Globe component
const Globe = ({ guesses = [] }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  return (
    <div className="w-full h-full min-h-[300px]">
      <Canvas camera={{ position: [0, 0, 12], fov: 40 }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#ffffff" />
        <directionalLight position={[0, 5, 5]} intensity={0.5} />
        <Earth 
          guesses={guesses} 
          isAnimating={isAnimating} 
          setIsAnimating={setIsAnimating} 
        />
        <OrbitControls 
          enableZoom={true} 
          enablePan={false}
          minDistance={8}
          maxDistance={20}
          rotateSpeed={0.5}
          autoRotate={false}
          enableRotate={!isAnimating} // Disable user rotation during animation
        />
      </Canvas>
    </div>
  );
};

export default Globe;
