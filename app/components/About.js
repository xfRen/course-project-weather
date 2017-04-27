// When exporting and importing, there are two main ways.
// ES5 - When we import via ES5, we use the require function along with module.exports.
// This is what we did for the first half of the course.
// ES6 - ES6 imports differ from ES5 imports. Instead of require, we use the import statement.
// Instead of module.exports, we use the export keyword.

const React = require('react');

// var About = React.createClass({
//   render: function() {
//     return (
//       <h2>About component</h2>
//     );
//   }
// });

// Stateless functional components
// Benefits:
// Stateless functional components do have a simpler/shorter syntax.
// Stateless functional components should be used anytime you don't need custom state or lifecycle methods.
// They are also faster than class based components.
// React optimizes these components behind the scenes, and they end up requiring a lot less memory and processing power.
// There's no state or lifecycle methods to manage behind the scenes. This is where the speed advantage comes from!
// P.S. They're also much easier to test.

var About = (props) => {
  return (
    <div>
      <h2>About</h2>
      <p>Place Holder</p>
    </div>
  );
};

module.exports = About;
