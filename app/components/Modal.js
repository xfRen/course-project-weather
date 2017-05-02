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
  // If we add "data-close" to the JSX, the resulting HTML attribute will be data-close="true".
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
  }
});

module.exports = Modal;
