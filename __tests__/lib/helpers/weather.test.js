
const { formatWeather } = require('../../../src/lib/helpers/weather')

describe('Formats the temperature from weather api', () => {
    test('returns moderate from weather formatter' , () => {
        const weather = { feels_like : 67};
        expect(formatWeather(weather)).toEqual('Moderate');
    });

    test('returns Hot from weather formatter' , () => {
        const weather = { feels_like : 91};
        expect(formatWeather(weather)).toEqual('Hot');
    });

    test('returns Cold from weather formatter' , () => {
        const weather = { feels_like : 24};
        expect(formatWeather(weather)).toEqual('Cold');
    });

    test('returns data type string from weather formatter' , () => {
        const weather = { feels_like : 24};
        expect(typeof formatWeather(weather)).toEqual('string');
    })
})