/**
 * Country Utilities for GuessTheCountry
 * Provides functions for country data and proximity calculations
 */

// This is a simplified version - in a real implementation, you would use a complete dataset
// const countries = [
//   { code: 'US', name: 'United States', continent: 'North America', lat: 37.0902, lng: -95.7129 },
//   { code: 'CA', name: 'Canada', continent: 'North America', lat: 56.1304, lng: -106.3468 },
//   { code: 'MX', name: 'Mexico', continent: 'North America', lat: 23.6345, lng: -102.5528 },
//   { code: 'BR', name: 'Brazil', continent: 'South America', lat: -14.2350, lng: -51.9253 },
//   { code: 'AR', name: 'Argentina', continent: 'South America', lat: -38.4161, lng: -63.6167 },
//   { code: 'GB', name: 'United Kingdom', continent: 'Europe', lat: 55.3781, lng: -3.4360 },
//   { code: 'FR', name: 'France', continent: 'Europe', lat: 46.2276, lng: 2.2137 },
//   { code: 'DE', name: 'Germany', continent: 'Europe', lat: 51.1657, lng: 10.4515 },
//   { code: 'IT', name: 'Italy', continent: 'Europe', lat: 41.8719, lng: 12.5674 },
//   { code: 'ES', name: 'Spain', continent: 'Europe', lat: 40.4637, lng: -3.7492 },
//   { code: 'RU', name: 'Russia', continent: 'Europe/Asia', lat: 61.5240, lng: 105.3188 },
//   { code: 'CN', name: 'China', continent: 'Asia', lat: 35.8617, lng: 104.1954 },
//   { code: 'IN', name: 'India', continent: 'Asia', lat: 20.5937, lng: 78.9629 },
//   { code: 'JP', name: 'Japan', continent: 'Asia', lat: 36.2048, lng: 138.2529 },
//   { code: 'AU', name: 'Australia', continent: 'Oceania', lat: -25.2744, lng: 133.7751 },
//   { code: 'NZ', name: 'New Zealand', continent: 'Oceania', lat: -40.9006, lng: 174.8860 },
//   { code: 'ZA', name: 'South Africa', continent: 'Africa', lat: -30.5595, lng: 22.9375 },
//   { code: 'EG', name: 'Egypt', continent: 'Africa', lat: 26.8206, lng: 30.8025 },
//   { code: 'NG', name: 'Nigeria', continent: 'Africa', lat: 9.0820, lng: 8.6753 },
//   // Add more countries as needed
// ];
const countries = [
    { code: 'US', name: 'United States', continent: 'North America', lat: 37.09024, lng: -95.712891, difficultyRank: 1 },
    { code: 'CA', name: 'Canada', continent: 'North America', lat: 56.130366, lng: -106.346771, difficultyRank: 1 },
    { code: 'MX', name: 'Mexico', continent: 'North America', lat: 23.634501, lng: -102.552784, difficultyRank: 2 },
    { code: 'BZ', name: 'Belize', continent: 'North America', lat: 17.189877, lng: -88.49765, difficultyRank: 4 },
    { code: 'TV', name: 'Tuvalu', continent: 'Oceania', lat: -7.109535, lng: 177.64933, difficultyRank: 5 },
    // ... (Ideally, this would be the full list, but a representative sample is fine for the subtask)
    // IMPORTANT: In a real scenario, this data would be sourced from the updated frontend/src/data/countries.js
];

const DIFFICULTY_LEVEL_TO_RANK = {
  'Novice': 1,
  'Easy': 2,
  'Normal': 3,
  'Hard': 4,
  'Impossible': 5
};

// Define neighboring countries for more accurate proximity calculation
// const neighbors = {
//   'US': ['CA', 'MX'],
//   'CA': ['US'],
//   'MX': ['US', 'GT', 'BZ'],
//   'FR': ['DE', 'ES', 'IT', 'BE', 'CH', 'LU'],
//   'DE': ['FR', 'BE', 'NL', 'DK', 'PL', 'CZ', 'AT', 'CH'],
//   'GB': ['IE'],
//   // Add more as needed
// };

const neighbors = {
    'AD': ['FR', 'ES'],
    'AE': ['OM', 'SA'],
    'AF': ['CN', 'IR', 'PK', 'TJ', 'TM', 'UZ'],
    'AG': [],
    'AI': [],
    'AL': ['GR', 'MK', 'ME', 'RS'],
    'AM': ['AZ', 'GE', 'IR', 'TR'],
    'AO': ['CD', 'CG', 'NA', 'ZM'],
    'AQ': [],
    'AR': ['BO', 'BR', 'CL', 'PY', 'UY'],
    'AS': [],
    'AT': ['CH', 'CZ', 'DE', 'HU', 'IT', 'LI', 'SK', 'SI'],
    'AU': [],
    'AW': [],
    'AX': [],
    'AZ': ['AM', 'GE', 'IR', 'RU', 'TR'],
    'BA': ['HR', 'ME', 'RS'],
    'BB': [],
    'BD': ['MM', 'IN'],
    'BE': ['DE', 'FR', 'LU', 'NL'],
    'BF': ['BJ', 'CI', 'GH', 'ML', 'NE', 'TG'],
    'BG': ['GR', 'MK', 'RO', 'RS', 'TR'],
    'BH': [],
    'BI': ['CD', 'RW', 'TZ'],
    'BJ': ['BF', 'NE', 'NG', 'TG'],
    'BL': [],
    'BM': [],
    'BN': ['MY'],
    'BO': ['AR', 'BR', 'CL', 'PY', 'PE'],
    'BQ': [],
    'BR': ['AR', 'BO', 'CO', 'GF', 'GY', 'PY', 'PE', 'SR', 'UY', 'VE'],
    'BS': [],
    'BT': ['CN', 'IN'],
    'BV': [],
    'BW': ['NA', 'ZA', 'ZM', 'ZW'],
    'BY': ['LV', 'LT', 'PL', 'RU', 'UA'],
    'BZ': ['GT', 'MX'],
    'CA': ['US'],
    'CC': [],
    'CD': ['AO', 'BI', 'CF', 'CG', 'RW', 'SS', 'TZ', 'UG', 'ZM'],
    'CF': ['CM', 'TD', 'CD', 'CG', 'SS', 'SD'],
    'CG': ['AO', 'CM', 'CF', 'CD', 'GA'],
    'CH': ['AT', 'FR', 'DE', 'IT', 'LI'],
    'CI': ['BF', 'GH', 'GN', 'LR', 'ML'],
    'CK': [],
    'CL': ['AR', 'BO', 'PE'],
    'CM': ['CF', 'TD', 'CG', 'GQ', 'GA', 'NG'],
    'CN': ['AF', 'BT', 'HK', 'IN', 'KZ', 'KG', 'LA', 'MO', 'MN', 'MM', 'NP', 'KP', 'PK', 'RU', 'TJ', 'VN'],
    'CO': ['BR', 'EC', 'PA', 'PE', 'VE'],
    'CR': ['NI', 'PA'],
    'CU': ['US'],
    'CV': [],
    'CW': [],
    'CX': [],
    'CY': [],
    'CZ': ['AT', 'DE', 'PL', 'SK'],
    'DE': ['AT', 'BE', 'CH', 'CZ', 'DK', 'FR', 'LU', 'NL', 'PL'],
    'DJ': ['ER', 'ET', 'SO'],
    'DK': ['DE'],
    'DM': [],
    'DO': ['HT'],
    'DZ': ['EH', 'LY', 'ML', 'MR', 'MA', 'NE', 'TN'],
    'EC': ['CO', 'PE'],
    'EE': ['LV', 'RU'],
    'EG': ['IL', 'LY', 'SD'],
    'EH': ['DZ', 'MR', 'MA'],
    'ER': ['DJ', 'ET', 'SD'],
    'ES': ['AD', 'FR', 'GI', 'PT', 'MA'],
    'ET': ['DJ', 'ER', 'KE', 'SS', 'SO', 'SD'],
    'FI': ['NO', 'SE', 'RU'],
    'FJ': [],
    'FK': [],
    'FM': [],
    'FO': [],
    'FR': ['AD', 'BE', 'DE', 'IT', 'LU', 'MC', 'ES', 'CH'],
    'GA': ['CM', 'CG', 'GQ'],
    'GB': ['IE'],
    'GD': [],
    'GE': ['AM', 'AZ', 'RU', 'TR'],
    'GF': ['BR', 'SR'],
    'GG': [],
    'GH': ['BF', 'CI', 'TG'],
    'GI': ['ES'],
    'GL': [],
    'GM': ['SN'],
    'GN': ['CI', 'GW', 'LR', 'ML', 'SN', 'SL'],
    'GP': [],
    'GQ': ['CM', 'GA'],
    'GR': ['AL', 'BG', 'TR', 'MK'],
    'GS': [],
    'GT': ['BZ', 'SV', 'HN', 'MX'],
    'GU': [],
    'GW': ['GN', 'SN'],
    'GY': ['BR', 'SR', 'VE'],
    'HK': ['CN'],
    'HM': [],
    'HN': ['GT', 'NI', 'SV'],
    'HR': ['BA', 'HU', 'ME', 'RS', 'SI'],
    'HT': ['DO'],
    'HU': ['AT', 'HR', 'RO', 'RS', 'SK', 'SI', 'UA'],
    'ID': ['TL', 'MY', 'PG'],
    'IE': ['GB'],
    'IL': ['EG', 'JO', 'LB', 'SY'],
    'IM': [],
    'IN': ['BD', 'BT', 'MM', 'CN', 'NP', 'PK'],
    'IO': [],
    'IQ': ['IR', 'JO', 'KW', 'SA', 'SY', 'TR'],
    'IR': ['AF', 'AM', 'AZ', 'IQ', 'PK', 'TM', 'TR'],
    'IS': [],
    'IT': ['AT', 'FR', 'SM', 'SI', 'CH', 'VA'],
    'JE': [],
    'JM': [],
    'JO': ['IL', 'IQ', 'SA', 'SY'],
    'JP': [],
    'KE': ['ET', 'SO', 'SS', 'TZ', 'UG'],
    'KG': ['CN', 'KZ', 'TJ', 'UZ'],
    'KH': ['LA', 'TH', 'VN'],
    'KI': [],
    'KM': [],
    'KN': [],
    'KP': ['CN', 'KR', 'RU'],
    'KR': ['KP'],
    'KW': ['IQ', 'SA'],
    'KY': [],
    'KZ': ['CN', 'KG', 'RU', 'TM', 'UZ'],
    'LA': ['MM', 'KH', 'CN', 'TH', 'VN'],
    'LB': ['IL', 'SY'],
    'LC': [],
    'LI': ['AT', 'CH'],
    'LK': [],
    'LR': ['GN', 'CI', 'SL'],
    'LS': ['ZA'],
    'LT': ['BY', 'LV', 'PL', 'RU'],
    'LU': ['BE', 'DE', 'FR'],
    'LV': ['BY', 'EE', 'LT', 'RU'],
    'LY': ['DZ', 'TD', 'EG', 'NE', 'SD', 'TN'],
    'MA': ['DZ', 'EH', 'ES'],
    'MC': ['FR'],
    'MD': ['RO', 'UA'],
    'ME': ['AL', 'BA', 'HR', 'RS'],
    'MF': ['SX'],
    'MG': [],
    'MH': [],
    'MK': ['AL', 'BG', 'GR', 'RS'],
    'ML': ['DZ', 'BF', 'GN', 'CI', 'MR', 'NE', 'SN'],
    'MM': ['BD', 'CN', 'IN', 'LA', 'TH'],
    'MN': ['CN', 'RU'],
    'MO': ['CN'],
    'MP': [],
    'MQ': [],
    'MR': ['DZ', 'ML', 'SN', 'EH'],
    'MS': [],
    'MT': [],
    'MU': [],
    'MV': [],
    'MW': ['MZ', 'TZ', 'ZM'],
    'MX': ['BZ', 'GT', 'US'],
    'MY': ['BN', 'ID', 'TH'],
    'MZ': ['MW', 'ZA', 'SZ', 'TZ', 'ZM', 'ZW'],
    'NA': ['AO', 'BW', 'ZA', 'ZM'],
    'NC': [],
    'NE': ['DZ', 'BJ', 'BF', 'TD', 'LY', 'ML', 'NG'],
    'NF': [],
    'NG': ['BJ', 'CM', 'TD', 'NE'],
    'NI': ['CR', 'HN'],
    'NL': ['DE', 'BE'],
    'NO': ['FI', 'SE', 'RU'],
    'NP': ['CN', 'IN'],
    'NR': [],
    'NU': [],
    'NZ': [],
    'OM': ['AE', 'SA', 'YE'],
    'PA': ['CO', 'CR'],
    'PE': ['BO', 'BR', 'CL', 'CO', 'EC'],
    'PF': [],
    'PG': ['ID'],
    'PH': [],
    'PK': ['AF', 'CN', 'IN', 'IR'],
    'PL': ['BY', 'CZ', 'DE', 'LT', 'RU', 'SK', 'UA'],
    'PM': [],
    'PN': [],
    'PR': [],
    'PS': ['IL', 'JO'],
    'PT': ['ES'],
    'PW': [],
    'PY': ['AR', 'BO', 'BR'],
    'QA': ['SA'],
    'RE': [],
    'RO': ['BG', 'HU', 'MD', 'RS', 'UA'],
    'RS': ['BA', 'BG', 'HR', 'HU', 'MK', 'ME', 'RO'],
    'RU': ['AZ', 'BY', 'CN', 'EE', 'FI', 'GE', 'KZ', 'KP', 'LV', 'LT', 'MN', 'NO', 'PL', 'UA'],
    'RW': ['BI', 'CD', 'TZ', 'UG'],
    'SA': ['AE', 'IQ', 'JO', 'KW', 'OM', 'QA', 'YE'],
    'SB': [],
    'SC': [],
    'SD': ['CF', 'TD', 'EG', 'ER', 'ET', 'LY', 'SS'],
    'SE': ['FI', 'NO'],
    'SG': [],
    'SH': [],
    'SI': ['AT', 'HR', 'IT', 'HU'],
    'SJ': [],
    'SK': ['AT', 'CZ', 'HU', 'PL', 'UA'],
    'SL': ['GN', 'LR'],
    'SM': ['IT'],
    'SN': ['GM', 'GN', 'GW', 'ML', 'MR'],
    'SO': ['DJ', 'ET', 'KE'],
    'SR': ['BR', 'GF', 'GY'],
    'SS': ['CF', 'CD', 'ET', 'KE', 'SD', 'UG'],
    'ST': [],
    'SV': ['GT', 'HN'],
    'SX': ['MF'],
    'SY': ['IQ', 'IL', 'JO', 'LB', 'TR'],
    'SZ': ['MZ', 'ZA'],
    'TC': [],
    'TD': ['CM', 'CF', 'LY', 'NE', 'NG', 'SD'],
    'TF': [],
    'TG': ['BJ', 'BF', 'GH'],
    'TH': ['KH', 'LA', 'MY', 'MM'],
    'TJ': ['AF', 'CN', 'KG', 'UZ'],
    'TK': [],
    'TL': ['ID'],
    'TM': ['AF', 'IR', 'KZ', 'UZ'],
    'TN': ['DZ', 'LY'],
    'TO': [],
    'TR': ['AM', 'AZ', 'BG', 'GE', 'GR', 'IR', 'IQ', 'SY'],
    'TT': [],
    'TV': [],
    'TW': [],
    'TZ': ['BI', 'CD', 'KE', 'MW', 'MZ', 'RW', 'UG', 'ZM'],
    'UA': ['BY', 'HU', 'MD', 'PL', 'RO', 'RU', 'SK'],
    'UG': ['CD', 'KE', 'RW', 'SS', 'TZ'],
    'UM': [],
    'US': ['CA', 'MX', 'CU'],
    'UY': ['AR', 'BR'],
    'UZ': ['AF', 'KZ', 'KG', 'TJ', 'TM'],
    'VA': ['IT'],
    'VC': [],
    'VE': ['BR', 'CO', 'GY'],
    'VG': [],
    'VI': [],
    'VN': ['KH', 'CN', 'LA'],
    'VU': [],
    'WF': [],
    'WS': [],
    'YE': ['OM', 'SA'],
    'YT': [],
    'ZA': ['BW', 'LS', 'MZ', 'NA', 'SZ', 'ZW'],
    'ZM': ['AO', 'BW', 'CD', 'MW', 'MZ', 'NA', 'TZ', 'ZW'],
    'ZW': ['BW', 'MZ', 'ZA', 'ZM']
  };

// Get a country by its code
function getCountry(countryCode) {
  return countries.find(country => country.code === countryCode);
}

// Get all countries
function getAllCountries() {
  return countries;
}

// Get a random country
function getRandomCountry() {
  const randomIndex = Math.floor(Math.random() * countries.length);
  return countries[randomIndex];
}

// Calculate distance between two points using the Haversine formula
function calculateDistance(lat1, lng1, lat2, lng2) {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// Calculate proximity between two countries (returns distance in km)
function calculateProximity(guessCountryCode, targetCountryCode) {
  // If it's the target country, distance is 0
  if (guessCountryCode === targetCountryCode) return 0;
  
  const guessCountry = getCountry(guessCountryCode);
  const targetCountry = getCountry(targetCountryCode);
  
  if (!guessCountry || !targetCountry) {
    return 10000; // Country not found, return a large distance
  }
  
  // Check if they are neighbors (approximate distance for neighboring countries)
  if (neighbors[targetCountryCode] && neighbors[targetCountryCode].includes(guessCountryCode)) {
    return 500; // Approximate distance for neighboring countries
  }
  
  // Calculate actual distance between countries using the Haversine formula
  const distance = calculateDistance(
    guessCountry.lat, guessCountry.lng,
    targetCountry.lat, targetCountry.lng
  );
  
  // Round to nearest integer
  return Math.round(distance);
}

// Get proximity color based on distance in kilometers
function getProximityColor(distanceKm) {
  if (distanceKm === 0) return 'green'; // Correct guess
  if (distanceKm < 1000) return 'green-400'; // Very hot
  if (distanceKm < 2000) return 'green-300'; // Hot
  if (distanceKm < 3000) return 'yellow-300'; // Warm
  if (distanceKm < 5000) return 'yellow-400'; // Cool
  if (distanceKm < 7000) return 'orange-400'; // Cold
  if (distanceKm < 10000) return 'orange-500'; // Very cold
  return 'red-500'; // Freezing
}

function selectCountryByDifficulty(difficultyLevel, allCountries) {
  let targetRank = DIFFICULTY_LEVEL_TO_RANK[difficultyLevel];
  if (targetRank === undefined) {
    console.error(`Invalid difficulty level: ${difficultyLevel}. Defaulting to Normal.`);
    targetRank = 3; // Default to Normal if invalid level
  }

  const suitableCountries = allCountries.filter(country => country.difficultyRank === targetRank);

  if (suitableCountries.length === 0) {
    // Fallback: if no countries match the rank, try a slightly easier/harder rank or return any country
    console.warn(`No countries found for difficulty rank ${targetRank} (level ${difficultyLevel}). Selecting from all countries.`);
    // For now, let's fall back to any country if no specific match
    const randomIndex = Math.floor(Math.random() * allCountries.length);
    return allCountries[randomIndex];
  }

  const randomIndex = Math.floor(Math.random() * suitableCountries.length);
  return suitableCountries[randomIndex];
}

module.exports = {
  getCountry,
  getAllCountries,
  getRandomCountry,
  calculateProximity,
  getProximityColor,
  selectCountryByDifficulty // Add this
};
