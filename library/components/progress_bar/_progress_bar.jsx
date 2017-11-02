import React from 'react';
import Button from '../button/button.jsx';
import ProgressBar from './progress_bar.jsx';

class ProgressBarExample extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      currentIndex: 0,
    };
  }

  incrementIndex() {
    const nextIndex = this.state.currentIndex + 1;
    this.goToIndex((nextIndex <= this.props.size - 1) ? nextIndex : 0);
  }

  goToIndex(index) {
    this.setState({ currentIndex: index });
  }

  render() {
    const { label, ...props } = this.props;

    return (
      <div>
        <div className="text-2 mb1">{label}</div>
        <div className="d-flex align-items-center">
          <div className="flex-1">
            <ProgressBar
              {...props}
              currentIndex={this.state.currentIndex}
            />
          </div>
          <div className="ml5">
            <Button
              className="Button--small"
              onClick={() => { this.incrementIndex() }}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = ProgressBarExample;
