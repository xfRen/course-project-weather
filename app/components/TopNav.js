var React = require('react');

// Use the destructuring syntax even if you are pulling off only one property.
// It's cleaner and easier to extend in the future.
var {Link, IndexLink} = require('react-router');

// var TopNav = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//         <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
//         <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
//       </div>
//     );
//   }
// });

var TopNav = (props) => {
  return (
    <div>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
      <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
      <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
    </div>
  );
};

module.exports = TopNav;
