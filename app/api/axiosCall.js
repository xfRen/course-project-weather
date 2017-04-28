
const axios = require('axios');
// Sensitive data should be put in configuration files that are not tracked by version control
const URL = "http://api.openweathermap.org/data/2.5/weather?appid=fea8978188f04e631a4ba8196b3be481&units=imperial";

module.exports = {
  getTemp: function(location) {
    // JS encodeURIComponent function encodes special characters.
    // In addition, it encodes the following characters: , / ? : @ & = + $ #
    var encodedLocation = encodeURIComponent(location);
    var url = `${URL}&q=${encodedLocation}`; // ES6 Template Strings
    return axios.get(url);
  }
};
