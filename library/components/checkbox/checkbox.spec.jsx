/* eslint-env mocha */
/* eslint-disable prefer-arrow-callback, no-unused-expressions */
const React = require('react');
const { shallow } = require('enzyme');
const { expect } = require('chai');
const sinon = require('sinon');

const Checkbox = require('./checkbox');

describe('Checkbox', function () {
  it('should render input element', function () {
    const wrapper = shallow(<Checkbox label="foo" />);
    const input = wrapper.find('input');

    expect(input).to.have.length(1);
    const inputProps = input.props();
    expect(inputProps.type).to.equal('checkbox');
  });

  it('should pass HTML attributes to input element', function () {
    const wrapper = shallow(
      <Checkbox
        className="className"
        disabled="disabled"
        id="id"
        name="name"
        value="value"
        checked="checked"
      />
    );

    const wrapperProps = wrapper.find('label').props();

    const inputProps = wrapper.find('input').props();
    expect(inputProps.className).to.equal('Checkbox__input');
    expect(inputProps.disabled).to.equal('disabled');
    expect(inputProps.id).to.equal('id');
    expect(inputProps.name).to.equal('name');
    expect(inputProps.value).to.equal('value');
    expect(inputProps.checked).to.equal('checked');
  });


  it('should call onChange', function () {
    const callMe = sinon.spy();
    const wrapper = shallow(<Checkbox onChange={callMe} />);

    wrapper.find('input').simulate('change');
    expect(callMe.calledOnce).to.be.true;
  });
});
