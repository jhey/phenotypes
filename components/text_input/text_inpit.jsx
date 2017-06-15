/* eslint-env mocha */
/* eslint-disable prefer-arrow-callback, no-unused-expressions */
const React = require('react');
const { shallow, mount } = require('enzyme');
const { expect } = require('chai');
const sinon = require('sinon');

const FormControl = require('./form_control');

describe('FormControl', function () {
  it('should render text input element as default input type', function () {
    const wrapper = mount(<FormControl />);
    const input = wrapper.find('input');

    expect(input).to.have.length(1);
    const inputProps = input.props();
    expect(inputProps.type).to.equal('text');
    expect(inputProps.role).to.equal('textbox');
  });

  it('should render text input element', function () {
    const wrapper = mount(<FormControl type="text" />);
    const input = wrapper.find('input');

    const inputProps = input.props();
    expect(inputProps.type).to.equal('text');
    expect(inputProps.role).to.equal('textbox');
  });

  it('should render email input element', function () {
    const wrapper = mount(<FormControl type="email" />);
    const input = wrapper.find('input');
    expect(input.props().type).to.equal('email');
  });

  it('should render password input element', function () {
    const wrapper = mount(<FormControl type="password" />);
    const input = wrapper.find('input');
    expect(input.props().type).to.equal('password');
  });

  it('should pass HTML attributes to input element', function () {
    const wrapper = mount(
      <FormControl
        aria-label="label"
        autoComplete="autoComplete"
        autoFocus="autoFocus"
        className="className"
        form="form"
        disabled="disabled"
        id="id"
        name="name"
        pattern="pattern"
        placeholder="placeholder"
        readOnly="readOnly"
        required="required"
        size="size"
        maxLength="maxLength"
        value="value"
      />
    );

    const inputProps = wrapper.find('input').props();
    expect(inputProps['aria-label']).to.equal('label');
    expect(inputProps.autoComplete).to.equal('autoComplete');
    expect(inputProps.autoFocus).to.equal('autoFocus');
    expect(inputProps.className).to.equal('className form-control');
    expect(inputProps.form).to.equal('form');
    expect(inputProps.disabled).to.equal('disabled');
    expect(inputProps.id).to.equal('id');
    expect(inputProps.name).to.equal('name');
    expect(inputProps.pattern).to.equal('pattern');
    expect(inputProps.placeholder).to.equal('placeholder');
    expect(inputProps.readOnly).to.equal('readOnly');
    expect(inputProps.required).to.equal('required');
    expect(inputProps.size).to.equal('size');
    expect(inputProps.maxLength).to.equal('maxLength');
    expect(inputProps.value).to.equal('value');
  });

  it('should apply correct class for size', function () {
    const defaultSize = shallow(<FormControl />);
    const small = shallow(<FormControl phSize="small" />);
    const large = shallow(<FormControl phSize="large" />);
    const responsive = shallow(<FormControl phSizeMd="large" />);

    expect(defaultSize.hasClass('form-control')).to.be.true;
    expect(defaultSize.hasClass('form-control-small')).to.be.false;
    expect(defaultSize.hasClass('form-control-large')).to.be.false;

    expect(small.hasClass('form-control')).to.be.true;
    expect(small.hasClass('form-control-small')).to.be.true;
    expect(small.hasClass('form-control-large')).to.be.false;

    expect(large.hasClass('form-control')).to.be.true;
    expect(large.hasClass('form-control-small')).to.be.false;
    expect(large.hasClass('form-control-large')).to.be.true;

    expect(responsive.hasClass('form-control')).to.be.true;
    expect(responsive.hasClass('form-control-large-md')).to.be.true;
  });

  it('should call onBlur', function () {
    const callMe = sinon.spy();
    const wrapper = mount(<FormControl onBlur={callMe} />);

    wrapper.find('input').simulate('blur');
    expect(callMe.calledOnce).to.be.true;
  });

  it('should call onChange', function () {
    const callMe = sinon.spy();
    const wrapper = mount(<FormControl onChange={callMe} />);

    wrapper.find('input').simulate('change');
    expect(callMe.calledOnce).to.be.true;
  });

  it('should call onCopy', function () {
    const callMe = sinon.spy();
    const wrapper = mount(<FormControl onCopy={callMe} />);

    wrapper.find('input').simulate('copy');
    expect(callMe.calledOnce).to.be.true;
  });

  it('should call onCut', function () {
    const callMe = sinon.spy();
    const wrapper = mount(<FormControl onCut={callMe} />);

    wrapper.find('input').simulate('cut');
    expect(callMe.calledOnce).to.be.true;
  });

  it('should call onFocus', function () {
    const callMe = sinon.spy();
    const wrapper = mount(<FormControl onFocus={callMe} />);

    wrapper.find('input').simulate('focus');
    expect(callMe.calledOnce).to.be.true;
  });

  it('should call onInput', function () {
    const callMe = sinon.spy();
    const wrapper = mount(<FormControl onInput={callMe} />);

    wrapper.find('input').simulate('input');
    expect(callMe.calledOnce).to.be.true;
  });

  it('should call onKeyDown', function () {
    const callMe = sinon.spy();
    const wrapper = mount(<FormControl onKeyDown={callMe} />);

    wrapper.find('input').simulate('keydown');
    expect(callMe.calledOnce).to.be.true;
  });

  it('should call onKeyUp', function () {
    const callMe = sinon.spy();
    const wrapper = mount(<FormControl onKeyUp={callMe} />);

    wrapper.find('input').simulate('keyup');
    expect(callMe.calledOnce).to.be.true;
  });

  it('should call onPaste', function () {
    const callMe = sinon.spy();
    const wrapper = mount(<FormControl onPaste={callMe} />);

    wrapper.find('input').simulate('paste');
    expect(callMe.calledOnce).to.be.true;
  });
});
