import React from 'react';

class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const name = this.props.name || 'world';
    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>It is {this.state.date.toLocaleTimeString()}.</p>
      </div>
    );
  }
}

module.exports = Sample;
