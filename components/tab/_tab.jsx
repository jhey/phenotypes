const React = require('react');
const Tab = require('./tab.jsx');

class TabExample extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { activeTab: 1 };
    this.activateTab = this.activateTab.bind(this);
  }

  activateTab(tabId) {
    this.setState({ activeTab: tabId });
  }

  render() {
    return (
      <div>
        <div className="h5">
          <Tab active={this.state.activeTab === 1} onClick={() => { this.activateTab(1) }}>
            Tab one
          </Tab>
          <Tab active={this.state.activeTab === 2} onClick={() => { this.activateTab(2) }}>
            Tab two
          </Tab>
          <Tab active={this.state.activeTab === 3} onClick={() => { this.activateTab(3) }} className="text-weight-normal">
            Tab with custom style
          </Tab>
          <Tab href="https://amino.com">External link ↗️</Tab>
        </div>
      </div>
    );
  }

}

module.exports = TabExample;
