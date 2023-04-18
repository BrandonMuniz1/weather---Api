const fetch = require('node-fetch');
const { WEATHER_API_URL, WEATHER_API_KEY } = require('../../../config');



const getWeather = async ({longitude, lattitude}) => {
    try {
       const response = await fetch(`${WEATHER_API_URL}/?lat=${lattitude}&lon=${longitude}&units=imperial&appid=${WEATHER_API_KEY}`);
       const weather = await response.json();
       return weather;
    } catch (error) {
       throw new Error(error);
    }
  
  
}

module.exports = {
    getWeather
}

