const api = require('./api.js')

module.exports = (app) => {
    app.use("/api/weather-api/v1", api),
    app.use(() => {
      try {
        throw new Error("404 Not found");
      } catch (error) {
        error.status = 404;
        throw error;
      }
      });
}