const React = require('react');

// Use the destructuring syntax even if you are pulling off only one property.
// It's cleaner and easier to extend in the future.
const {Link, IndexLink} = require('react-router');

var TopNav = React.createClass({
  componentDidMount: function(){
    // Foundation seems only to work with DOM elements, so kick it off once component is mounted to DOM tree.
    // (https://gist.github.com/codeboyim/2b72707d892d8427579a)
    $(this.getDOMNode()).foundation();
  },
  render: function() {
    return (
      <div>
        <div className="title-bar" data-responsive-toggle="topBar" data-hide-for="medium">
          <button className="menu-icon" type="button" data-toggle="topBar"></button>
          <div className="title-bar-title">Menu</div>
        </div>
        <div className="top-bar" id="topBar">
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
      </div>
    );
  },
  onSearch: (event) => {
    event.preventDefault();
    alert("Not yet wired up");
  }
});

module.exports = TopNav;
