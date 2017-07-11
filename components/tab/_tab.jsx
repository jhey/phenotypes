const React = require('react');
const Tab = require('./tab.jsx');

class TabExample extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { activeTab: 0 };
    this.activateTab = this.activateTab.bind(this);
  }

  activateTab(tabIndex) {
    this.setState({ activeTab: tabIndex });
  }

  render() {
    return (
      <div>
        <p>{this.props.description}</p>
        <div className={this.props.className}>
          {this.props.tabs.map((tab, index) =>
            <Tab
              key={index}
              active={this.state.activeTab === index}
              onClick={() => !(tab.props && tab.props.href) && this.activateTab(index)}
              {...tab.props}
            >
              {tab.name}
            </Tab>
          )}
        </div>
        <hr />
      </div>
    );
  }
}

module.exports = TabExample;
