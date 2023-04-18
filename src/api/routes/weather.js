const routes = require('express').Router();
const { asyncMiddleware } = require('../middleware');
const { weatherController } = require('../controllers');


/**
 * @swagger
 * 
 *  definitions:
 *    longitude:
 *      type: string
 *    lattitude:
 *      type: string 
 */


/**
 * @swagger
 * /api/weather-api/v1/weather:
 *   get:
 *     description: Get Weather Data based on GPS Coordinates
 *     requestBody: 
 *           required: true
 *           content: 
 *              application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                    longitude:
 *                      type: string
 *                      description: string representing starting longitude
 *                    lattitude:
 *                      type: string
 *                      description: string representing starting longitude
 *     responses:
 *       200:
 *         description: weather retrieved
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:
 *                weather_feels:
 *                  type: string
 *                  description: Brief Description of the weather
 *                weather_condition:
 *                  type: string
 *                  description: Weather Condition, Rain, Clouds Etc
 *                alert:
 *                  type: object
 *                  description: if there is an alert will show alert
 *       400:
 *         description: Issue with Longitude or Lattitude
 *       401:
 *         description: Issue with Weather API Key
 */

routes.get('/',  asyncMiddleware(weatherController.getWeather), (req, res, next) => {
    res.send(res.locals.getWeather);
});

  
module.exports = routes;