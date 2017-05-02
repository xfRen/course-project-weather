var React = require('react');

var TopNav = require('TopNav');

/*
Understanding {this.props.children}:

{this.props.children} outputs all the content specified between the opening and closing tag in the parent
in this case, since router is used in the parent, only one will be displayed at the same time;
otherwise, all the content specified between the opening and closing tag will be displayed all-together

Example:
Imagine we have a component called MyComponent that gets rendered like this:

<MyComponent>
  <p>on the fly jsx</p>
  <OtherComponent/>
</MyComponent>
All of the JSX defined inside of the component (p tag and OtherComponent) would be available for the component to use.
It's available via this.props.children.

MyComponent could choose to render that JSX by referencing the prop. For example:

class MyComponent extends React.Component {
  render (){
    return (
      <div>
        <h1>MyComponent JSX here</h1>
        {this.props.children}
      </div>
    );
  }
}

You can checkout a runnable CodePen: http://codepen.io/andrewjmead/pen/MbMMYK?editors=0010
*/

var Main = (props) => {
  return (
    <div>
      <TopNav/>
      <div className="row">
        <div className="small-12 medium-6 small-centered columns">
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
