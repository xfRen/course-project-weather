const React = require('react');
const {Link} = require('react-router');

// About "to='/?city=Taiyuan'":
// The forward slash will bring us to the root of the application where the Weather.jsx component lives.
// "to='?city=Taiyuan'" will work if you're already on the root page.
// It tacks on the queryString and everything runs.
// However "to='?city=Taiyuan'" won't work if you click it form any other page.
// That's because it'll try to add the queryString without actually switching to the weather page.
var Example = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a couple of example locations to try out:</p>
      <ol>
        <li>
          <Link to="/?city=Taiyuan">Taiyuan, China</Link>
        </li>
        <li>
          <Link to="/?city=Sunnyvale">Sunnyvale, CA</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Example;
