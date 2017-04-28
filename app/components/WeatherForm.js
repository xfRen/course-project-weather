const React = require('react');

var WeatherForm = React.createClass({
  render: function() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <div>
          <input type="text" ref="cityInput" placeholder="Enter city name"/>
        </div>
        <div>
          <button className="button expanded hollow">Get Weather</button>
        </div>
      </form>
    );
  },
  onSubmitHandler: function(event) {
    event.preventDefault();
    var cityInputRef = this.refs.cityInput;
    if (cityInputRef.value.length > 0) {
      var object = {};
      object.city = cityInputRef.value;
      this.props.getWeather(object);
    }
  }
});

module.exports = WeatherForm;
