const React = require('react');

// Use the destructuring syntax even if you are pulling off only one property.
// It's cleaner and easier to extend in the future.
const {Link, IndexLink} = require('react-router');

var TopNav = React.createClass({
  render: function() {
    return (
      <div className="top-bar">
        <div>
          <div className="top-bar-left">
            <ul className="menu">
              <li>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
              </li>
              <li>
                <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
              </li>
              <li>
                <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <form onSubmit={this.onSearch} className="menu">
              <li>
                <input type="search" placeholder="Enter city name"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </form>
          </div>
        </div>
      </div>
    );
  },
  onSearch: (event) => {
    event.preventDefault();
    alert("Not yet wired up");
  }
});

module.exports = TopNav;
