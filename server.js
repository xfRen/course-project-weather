const express = require('express');
// added below const to use browserHistory rather than hashHistory
const path = require('path');

// create an app
const app = express();
// changes for HEROKU: PORT is added
const PORT = process.env.PORT || 3000;

// The OpenWeatherMap API only supports HTTP requests.
// You need a paid membership to make HTTPS requests to their API,
// therefore below code (setting up express middleware) is needed and it will re-direct HTTPS traffic to HTTP

/*
Our Node server is only used to render the index.html file to the browser.
It's not used when communicating with the OpenWeatherMap API.
The redirect code only applies to requests to our Node server (index.html).
It will redirect a user from the HTTPS to HTTP version of the web page.
The redirect code does not apply to the API request because that request does not pass through the Node server.
The API call starts on the browser. This request never passes though our Node server.
It goes directly out to the OpenWeatherMap servers which return the weather information.

The Node.js server in this course is just there to serve you the index page and the large bundle.js file.
After that, it's your browser (client side) that runs the javascript and makes the requests.

If you take Andrew's Nose.js course, there you learn how to write a server that handles routing, requests,
sending back responses, and saving them on database (or fetching from database)
*/
app.use(function(request, response, next) {
	if (request.headers['x-forwarded-proto'] === 'https') { // when running on localhost, request.headers['x-forwarded-proto'] does NOT exist
		response.redirect('http://' + request.hostname + request.url);
	} else {
		next();
	}
});
// middleware needs to be added before static server configuration
// We want to run the middleware first, then server up our static assets.
// Otherwise, custom middleware is never getting a chance to redirect.
app.use(express.static('public'));
// added below part to use browserHistory rather than hashHistory
app.get('*', function(request, response) {
	response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
// -- end
app.listen(PORT, function() {
	console.log('This message is from server.js; Express server is up on port ' + PORT);
});
