/* eslint-env mocha */
/* eslint-disable prefer-arrow-callback, no-unused-expressions */
const React = require('react');
const { shallow, mount } = require('enzyme');
const { expect } = require('chai');
const sinon = require('sinon');

const FormControl = require('./form_control');

describe('FormControl', function () {
  it('should render text input element', function () {
    const wrapper = shallow(<FormControl />);
    const input = wrapper.find('input');

    expect(input).to.have.length(1);
    expect(input.props().type).to.equal('text');
  });

  it('should pass HTML attributes to input element', function () {
    const wrapper = mount(
      <FormControl
        value="value"
        disabled="disabled"
        autoFocus="autoFocus"
        placeholder="placeholder"
      />
    );

    const inputProps = wrapper.find('input').props();
    expect(inputProps.value).to.equal('value');
    expect(inputProps.disabled).to.equal('disabled');
    expect(inputProps.autoFocus).to.equal('autoFocus');
    expect(inputProps.placeholder).to.equal('placeholder');
  });

  it('should apply correct class for size', function () {
    const defaultSize = shallow(<FormControl />);
    const small = shallow(<FormControl size="small" />);
    const large = shallow(<FormControl size="large" />);

    expect(defaultSize.hasClass('form-control')).to.be.true;
    expect(defaultSize.hasClass('form-control-small')).to.be.false;
    expect(defaultSize.hasClass('form-control-large')).to.be.false;

    expect(small.hasClass('form-control')).to.be.true;
    expect(small.hasClass('form-control-small')).to.be.true;
    expect(small.hasClass('form-control-large')).to.be.false;

    expect(large.hasClass('form-control')).to.be.true;
    expect(large.hasClass('form-control-small')).to.be.false;
    expect(large.hasClass('form-control-large')).to.be.true;
  });

  it('should call onChange', function () {
    const callMe = sinon.spy();
    const wrapper = mount(<FormControl onChange={callMe} />);

    wrapper.find('input').simulate('change');
    expect(callMe.calledOnce).to.be.true;
  });

  it('should call onFocus', function () {
    const callMe = sinon.spy();
    const wrapper = mount(<FormControl onFocus={callMe} />);

    wrapper.find('input').simulate('focus');
    expect(callMe.calledOnce).to.be.true;
  });

  it('should call onBlur', function () {
    const callMe = sinon.spy();
    const wrapper = mount(<FormControl onBlur={callMe} />);

    wrapper.find('input').simulate('blur');
    expect(callMe.calledOnce).to.be.true;
  });
});
