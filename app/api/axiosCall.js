// axios is a Promise based HTTP client for the browser and node.js;
// it is a HTTP request library, and it simplifies the process of making and parsing HTTP requests
// jQuery.ajax is also a HTTP library
// jQuery.ajax, superagent, Axios, and many others all aim to solve the same problem.
// They all use XMLHttpRequest behind the scenes, adding their own syntax on top of it.

/*
React (which is a library as well) lets me render stuff to the DOM and respond to user interaction.
Axios let's me make HTTP requests.
This means I can spend less time writing generic library code and more time building out things specific to my application.

Most of my client projects do have a Node server and a React client.
The Node server takes care of database requests, 3rd-part api requests, and more.
The client-side React app is only responsible for making API calls to the Node back-end.
*/

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

/*
A 3rd party HTTP library makes development much easier. It's faster to use, easy to customize.
This is how you would make an HTTP request without a 3rd party library:

  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
         if (xmlhttp.status == 200) {
             // Do something on success
         }
         else if (xmlhttp.status == 400) {
             // Do something on 400
         }
         else {
             // Do something else
         }
      }
  };

  xmlhttp.open("GET", "ajax_info.txt", true);
  xmlhttp.send();
*/
