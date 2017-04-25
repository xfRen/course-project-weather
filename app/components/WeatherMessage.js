const React = require('react');

// var WeatherMessage = React.createClass({
//   render: function() {
//     var {city, temperature} = this.props;
//     return (
//       <p>In {city}, it is now {temperature}&deg;F</p>
//     );
//   }
// });

var WeatherMessage = (props) => {
  var {city, temperature} = props;
  return (
    <p>In {city}, it is now {temperature}&deg;F</p>
  );
}

module.exports = WeatherMessage;
