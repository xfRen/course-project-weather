const express = require('express');
// added below const to use browserHistory rather than hashHistory
const path = require('path');

// create an app
var app = express();

app.use(express.static('public'));
// added below part to use browserHistory rather than hashHistory
app.get('*', function(request, response) {
	response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
// -- end
app.listen(3000, function() {
	console.log('This message is from server.js; Express server is up on port 3000');
});
