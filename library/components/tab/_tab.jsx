import React from 'react';
import Tab from './tab.jsx';

class TabExample extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { activeTab: 0 };
  }

  render() {
    /* eslint-disable react/no-array-index-key */
    return (
      <div>
        <p>{this.props.description}</p>
        <div className={this.props.className}>
          {this.props.tabs.map((tab, index) => (
            <Tab
              key={index}
              active={this.state.activeTab === index}
              onClick={() => !(tab.props && tab.props.href) && this.setState({ activeTab: index })}
              {...tab.props}
            >
              {tab.name}
            </Tab>
          ))}
        </div>
        <hr />
      </div>
    );
  }
}

module.exports = TabExample;
