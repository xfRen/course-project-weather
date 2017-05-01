const React = require('react');

var Modal = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired,
    onClose: React.PropTypes.func.isRequired
  },
  getDefaultProps: function() {
    return {
      title: 'Error'
    };
  },
  // If we add data-close to the JSX, the resulting HTML attribute will be data-close="true".
  // This transformation is made when compiling the JSX.
  // If you add data-close="" to the JSX, the resulting HTML attribute will be data-close.
  // This is what Foundation expects.
  render: function() {
    var {title, message, onClose} = this.props;
    return (
      <div className="reveal-overlay" style={{"display": "block"}}>
        <div className="reveal text-center" style={{"display": "block", "top": 233}}>
          <h4>{title}</h4>
          <p>{message}</p>
          <p>
            <button className="button hollow" onClick={onClose}>
              Close
            </button>
          </p>
        </div>
      </div>
    );
  },
  componentDidMount: function() { // this will be executed after the render method
    // Foundation Modals need to be "opened" with JavaScript.
    // componentDidMount is where we initialize the modal and open it up.
    // This lifecycle methods runs right after the components DOM is available.
    // This means we can target the modal and initialize/open the Foundation modal without running into any problems.

    // Foundation does not support the module system.
    // This is why we made an exception for it and added it into the webpack config.
    // It's available globally in your project because of that.

    // var {title, message, onClose} = this.props;
    // var modalMarkup = (
    //   <div className="reveal text-center" id="modal" data-reveal="">
    //     <h1>{title}</h1>
    //     <p>{message}</p>
    //     <button className="close-button" data-close="">
    //       <span aria-hidden="true">&times;</span>
    //     </button>
    //     <button className="button hollow" onClick={onClose}>Close</button>
    //   </div>
    // );
    // $modalNode is a node that can be added to the DOM
    // var $modalNode = $(ReactDOMServer.renderToString(modalMarkup));

    // attach to the DOM
    // $(ReactDOM.findDOMNode(this)).html($modalNode);

    // create a new instance of modal
    // var modal = new Foundation.Reveal($('#modal'));

    // open the instance
    // modal.open();
  },
  componentWillUnmount: function() {
    // remove modal node if there is one
    // $('.reveal-overlay').remove();
  }

});

module.exports = Modal;
