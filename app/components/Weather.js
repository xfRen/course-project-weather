const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const Modal = require('Modal');
const axiosCall = require('axiosCall');
const {browserHistory} = require('react-router');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false,
      errorMessage: undefined,
      city: undefined,
      temperature: undefined
    };
  },
  /*
  When you call this.setState, React does more than just update the state object.
  It also checks if the component needs to be re-rendered based on those changes.
  This is all part of what makes React so useful!

  The same is true with props. Behind the scene React is looking to see if the DOM would change based on the new props.
  If the DOM does change, React goes ahead an updates the browser with the new DOM.

  From the docs: "By default, when your component's state or props change, your component will re-render."
  */
  render: function() {
    var {city, temperature, errorMessage, isLoading} = this.state;
    function renderMessage() {
      if (isLoading) {
        return <p className="text-center">Fetching weather...</p>
      } else {
        if (typeof city !== 'undefined' && typeof temperature !== 'undefined') { //You should never use non-strict comparison for numbers
          return <WeatherMessage city={city} temperature={temperature}/>
        }
      }
    };
    function renderErrorModal () {
      if (typeof errorMessage === 'string') {
        return (
          <Modal message={errorMessage}
            onClose={() => {
              this.setState({
                errorMessage: undefined
              });
            }
          }/>
        )
      }
    };
    return (
      <div>
        <h1 className="text-center page-title">Get Weather by City</h1>
        <WeatherForm getWeather={this.getWeather}/>
        {renderMessage()}
        {renderErrorModal()}
      </div>
    );
  },
  componentDidMount: function() { // this method is called once page is loaded -> component is mounted; this method is not called when re-render
    // The location prop comes from React Router and gets injected into our components because we configured them with React Router.
    // Everything react-router injects into your component will be under this.props.location
    var city = this.props.location.query.city;
    if (typeof city === 'string' && city.length > 0) {
      var object = {};
      object.city = city;
      this.getWeather(object);
      browserHistory.push('/');
    }
  },
  componentWillReceiveProps: function(newProps) {
    // this method is called once browserHistory.push() is executed, not matter from inside of this component or from outside

    // By default, your component will not get new props just because the URL updates.
    // In this case, it's the props passed down from react-router that are causing the componentWillReceiveProps method to fire.
    // React-router does care when the URL changes. It watches for URL changes and updates any route components with that new information.

    // Reason we need to use newProps instead of this.props:
    // componentWillReceiveProps actually fires before the new props are set on the component.
    // This means that new props are not available via this.props in this lifecycle method. 
    // The new props are available via that first argument.
    // this.props contains the old props at this point in the component lifecycle.
    var city = newProps.location.query.city;
    if (typeof city === 'string' && city.length > 0) {
      var object = {};
      object.city = city;
      this.getWeather(object);
      browserHistory.push('/');
    }
  },
  getWeather: function(object) {
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      city: undefined,
      temperature: undefined
    });
    axiosCall.getTemp(object.city).then((response) => {
      if (response) {
        if (response.status === 200 && response.statusText === "OK") {
          var data = response.data;
          if (data) {
            var main = data.main;
            var city = data.name;
            if (main) {
              var temperature = main.temp;
              this.setState({
                city: city,
                temperature: Math.floor(temperature),
                isLoading: false,
                errorMessage: undefined
              });
            }
          }
        }
      }
    }).catch((error) => {
      if (error) {
        this.setState({
          city: undefined,
          temperature: undefined,
          isLoading: false,
          errorMessage: 'Unable to fetch weather for that city.'
        });
        //var message = error.message;
        //setTimeout(function() {alert(message)}, 1000);
        // setTimeout(alert(message), 1000) is not correct. It passes the result of alert method to setTimeout.
        // The call to setState will trigger a rerender, but it's not a synchronous process.
        // This is why the alert is showing up first. (I use setTimeout to resolve this issue.)
        // This will go away once we move from alert to a regular modal solution later in the project.
        // The alert call is just a temporary solution that allowed us to get things up and running quickly.
      }
    });
  }
});

module.exports = Weather;
