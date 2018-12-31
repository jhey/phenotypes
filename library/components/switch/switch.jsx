import * as React from 'react';
import classes from 'classnames';

class Switch extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      clicked: false,
      focused: false,
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleBlur() {
    this.props.onBlur && this.props.onBlur();
    this.setState({
      clicked: false,
      focused: false,
    });
  }

  handleFocus() {
    this.props.onFocus && this.props.onFocus();
    this.setState({focused: true});
  }

  handleMouseDown(event) {
    // `mousedown` will trigger `focus` on the indicator element, then the subsequent
    // `click` event on the wrapping label will trigger focus on the input --
    // if the input is already focused, we need to prevent the indicator element
    // from pulling focus and triggering `blur` on the input
    event.preventDefault();
    this.setState({clicked: true});
  }

  render() {
    const {className, ...inputProps} = this.props;

    return (
      <label
        className={classes(className, 'Switch', {
          'Switch--is-focused': this.state.focused && !this.state.clicked,
        })}>
        <input
          {...inputProps}
          className="Switch__input"
          type="checkbox"
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
        />
        <div className="Switch__indicator" onMouseDown={this.handleMouseDown}>
          <div className="Switch__toggler" />
        </div>
      </label>
    );
  }
}

export default Switch;
