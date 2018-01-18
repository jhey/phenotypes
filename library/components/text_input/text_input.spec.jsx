/* eslint-env mocha */
/* eslint-disable prefer-arrow-callback, no-unused-expressions */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import TextInput from './text_input';

describe('TextInput', function () {
  it('should render text input element as default input type', function () {
    const wrapper = shallow(<TextInput />);
    const input = wrapper.find('input');

    expect(input).to.have.length(1);
    const inputProps = input.props();
    expect(inputProps.type).to.equal('text');
  });

  it('should pass HTML attributes to input element and apply disabled class', function () {
    const wrapper = shallow(
      <TextInput
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
    expect(inputProps.className).to.equal('className TextInput');
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

  it('should call onBlur', function () {
    const callMe = sinon.spy();
    const wrapper = shallow(<TextInput onBlur={callMe} />);

    wrapper.find('input').simulate('blur');
    expect(callMe.calledOnce).to.be.true;
  });

  it('should call onChange', function () {
    const callMe = sinon.spy();
    const wrapper = shallow(<TextInput onChange={callMe} />);

    wrapper.find('input').simulate('change');
    expect(callMe.calledOnce).to.be.true;
  });

  it('should call onCopy', function () {
    const callMe = sinon.spy();
    const wrapper = shallow(<TextInput onCopy={callMe} />);

    wrapper.find('input').simulate('copy');
    expect(callMe.calledOnce).to.be.true;
  });

  it('should call onCut', function () {
    const callMe = sinon.spy();
    const wrapper = shallow(<TextInput onCut={callMe} />);

    wrapper.find('input').simulate('cut');
    expect(callMe.calledOnce).to.be.true;
  });

  it('should call onFocus', function () {
    const callMe = sinon.spy();
    const wrapper = shallow(<TextInput onFocus={callMe} />);

    wrapper.find('input').simulate('focus');
    expect(callMe.calledOnce).to.be.true;
  });

  it('should call onInput', function () {
    const callMe = sinon.spy();
    const wrapper = shallow(<TextInput onInput={callMe} />);

    wrapper.find('input').simulate('input');
    expect(callMe.calledOnce).to.be.true;
  });

  it('should call onKeyDown', function () {
    const callMe = sinon.spy();
    const wrapper = shallow(<TextInput onKeyDown={callMe} />);

    wrapper.find('input').simulate('keydown');
    expect(callMe.calledOnce).to.be.true;
  });

  it('should call onKeyUp', function () {
    const callMe = sinon.spy();
    const wrapper = shallow(<TextInput onKeyUp={callMe} />);

    wrapper.find('input').simulate('keyup');
    expect(callMe.calledOnce).to.be.true;
  });

  it('should call onPaste', function () {
    const callMe = sinon.spy();
    const wrapper = shallow(<TextInput onPaste={callMe} />);

    wrapper.find('input').simulate('paste');
    expect(callMe.calledOnce).to.be.true;
  });
});
