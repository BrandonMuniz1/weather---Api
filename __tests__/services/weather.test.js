const fetch = require('node-fetch');
const { getWeather } = require('../../src/api/services/weather');
const { WEATHER_API_URL, WEATHER_API_KEY } = require('../../config')


describe('Query External Weather API by Longitude/Lattitude', () => {

    test('Test Weather API for 200 response', async () => {
        const response = await fetch(`${WEATHER_API_URL}/?lat=${55.450047}&lon=${-73.940992}&units=imperial&appid=${WEATHER_API_KEY}`);
        expect(response.ok).toEqual(true)
    });
    
})