// This file will contain the world GeoJSON data
// We'll use a simplified version of the world map for better performance

export const fetchWorldGeoData = async () => {
  try {
    // Using Natural Earth data via a CDN
    const response = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
    if (!response.ok) {
      throw new Error('Failed to fetch world geo data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching world geo data:', error);
    return null;
  }
};
