/* eslint-env mocha */
/* eslint-disable prefer-arrow-callback, no-unused-expressions */
const React = require('react');
const { shallow } = require('enzyme');
const { expect } = require('chai');

const Switch = require('./switch');

describe('Switch', function () {
  it('should render an "on" state', function () {
    expect(shallow(<Switch isOn />).find('input').prop('checked')).to.be.true;
  });

  it('should render an "off" state', function () {
    expect(shallow(<Switch isOn={false} />).find('input').prop('checked')).to.be.false;
  });

  it('should default to an "off" state', function () {
    expect(shallow(<Switch />).find('input').prop('checked')).to.be.false;
  });
});
