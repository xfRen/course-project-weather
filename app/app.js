const React = require('react');
const ReactDOM = require('react-dom');
/*
var Route = require('react-router').Route;
var Router = require('react-router').Router;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;
*/
// ES6 new feature: destructuring assignment syntax
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
//var {Route, Router, IndexRoute, hashHistory} = require('react-router');
/* Question: why the 'IndexRoute' component starts with a capital and 'hashHistory' doesn't start with a capital?
Answer: There is no syntax rule that governs capitalization, but there is a pattern to the madness.
In general capitalization of the first character should be used
when something is class-like such as a constructor function or an ES6 class.
This would include a React components. hashHistory is a simple object so it would not have its first letter capitalized.
*/
/* Hash history:
Hash history allows for changes to the url without making a request to the server.
This allows us to create applications whose views get swapped out on the client and
configured via some router (such as react-router).
No HTTP requests are made when someone requests a new page using hash history.
*/
const {Route, Router, IndexRoute, browserHistory} = require('react-router');

const Main = require('Main');
const Weather = require('Weather');
const About = require('About');
const Example = require('Example');

/*
Think of IndexRoute like a default route. IndexRoute doesn't take a 'path' prop. It uses the parent route path for that.
So in this case, visiting the root of the application would render Main and render Weather inside of it.
In other words, If no other children are matched, then the IndexRoute will be matched.
So if we're not showing the About components or the Examples component, the Weather component will get shown.
*/
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Weather}/>
      <Route path="about" component={About}/>
      <Route path="example" component={Example}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
