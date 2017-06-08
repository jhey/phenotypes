const React = require('react');
const { shallow } = require('enzyme');
const { expect } = require('chai');

const TextUtilities = require('./css_text_utilities');

describe('TextUtilities', function () {
  it('should exist', function () {
    const wrapper = shallow(<TextUtilities />);
    const title = wrapper.find('h4').first().text();
    expect(title).to.equal('Text and heading sizes');
  });
});
