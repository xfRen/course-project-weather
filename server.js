const express = require('express');
// added below const to use browserHistory rather than hashHistory
const path = require('path');

// create an app
var app = express();
// changes for HEROKU: PORT is added
const PORT = process.env.PORT || 3000;

// openWeatherMap API only works with HTTP not HTTPS, below code will re-direct HTTPS traffic to HTTP
app.use(function(request, response, next) {
	if (request.headers['x-forwarded-proto'] === 'http') {
		next();
	} else {
		response.redirect('http://' + request.hostname + request.url);
	}
});

app.use(express.static('public'));
// added below part to use browserHistory rather than hashHistory
app.get('*', function(request, response) {
	response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
// -- end
app.listen(PORT, function() {
	console.log('This message is from server.js; Express server is up on port ' + PORT);
});
