 const { getWeather } = require('../services/weather');
 const { formatWeather } = require('../../lib/helpers/weather');
const weatherController  = {};

weatherController.getWeather = async (req, res, next) => {
  try {
    const {body} = req;
       
    if(!body.hasOwnProperty('longitude')) return next({message : "Missing longitude"});
    if(!body.hasOwnProperty('lattitude')) return next({message : "Missing lattitude"});
    
    //call to weather api
    const weatherResponse = await getWeather(body);
     
    //if response isnt 200 move message on to error handler
    if(weatherResponse.cod !== 200) return next(weatherResponse);

    //have to find geo coordinate with alert
    let {weather, alerts, main} = weatherResponse;
      
      
    const condition = weather[0].main;
    const feelsLike = formatWeather(main);
    let weatherAlerts;
    
    
    if(alerts) weatherAlerts = alerts[0];
    else weatherAlerts = {message : 'No severe weather alerts in this area'};
     

    res.locals.getWeather = {
      weather_feels : feelsLike,
      weather_condition : condition,
      alerts : weatherAlerts
    }
       
    return next();
    
   } catch (error) {
        return next({error})
     }
}


module.exports = weatherController;
