const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');

const axiosCall = require('axiosCall');

var Weather = React.createClass({
  /*
  When you call this.setState, React does more than just update the state object.
  It also checks if the component needs to be re-rendered based on those changes.
  This is all part of what makes React so useful!

  The same is true with props. Behind the scene React is looking to see if the DOM would change based on the new props.
  If the DOM does change, React goes ahead an updates the browser with the new DOM.

  From the docs: "By default, when your component's state or props change, your component will re-render."
  */
  render: function() {
    var {isLoading, city, temperature} = this.state;
    function renderMessage() {
      if (isLoading) {
        return <p className="text-center">Fetching weather...</p>
      } else {
        if (typeof city !== 'undefined' && typeof temperature !== 'undefined') { //You should never use non-strict comparison for numbers
          return <WeatherMessage city={city} temperature={temperature}/>
        }
      }
    }
    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm getWeather={this.getWeather}/>
        {renderMessage()}
      </div>
    );
  },
  getWeather: function(object) {
    var thisInstance = this;
    thisInstance.setState({
      isLoading: true
    });
    axiosCall.getTemp(object.city).then(function(response) {
      if (response) {
        if (response.status === 200 && response.statusText === "OK") {
          var data = response.data;
          if (data) {
            var main = data.main;
            var city = data.name;
            if (main) {
              var temperature = main.temp;
              thisInstance.setState({
                city: city,
                temperature: Math.floor(temperature),
                isLoading: false
              });
            }
          }
        }
      }
    }).catch(function(error) {
      if (error) {
        thisInstance.setState({
          city: undefined,
          temperature: undefined,
          isLoading: false
        });
        var message = error.message;
        setTimeout(function() {alert(message)}, 1000);
        // setTimeout(alert(message), 1000) is not correct. It passes the result of alert method to setTimeout.
        // The call to setState will trigger a rerender, but it's not a synchronous process.
        // This is why the alert is showing up first. (I use setTimeout to resolve this issue.)
        // This will go away once we move from alert to a regular modal solution later in the project.
        // The alert call is just a temporary solution that allowed us to get things up and running quickly.
      }
    });
  },
  getInitialState: function() {
    return {
      isLoading: false
    };
  }
});

module.exports = Weather;
