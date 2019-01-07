/* eslint-env mocha */
/* eslint-disable prefer-arrow-callback, no-unused-expressions */
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Button from './button';

// Mocks a synthetic event object so we can test click handling:
function mockSyntheticEvent() {
  const preventDefaultSpy = sinon.spy();
  const stopPropagationSpy = sinon.spy();

  return {
    preventDefault: preventDefaultSpy,
    stopPropagation: stopPropagationSpy,
  };
}

describe('Button', function() {
  it('should render a button tag', function() {
    const wrapper = mount(<Button />);
    expect(wrapper.hasClass('Button')).to.be.true;

    const trueButton = wrapper.find('button');

    expect(trueButton).to.have.length(1);
    expect(trueButton.hasClass('Button__control')).to.be.true;
    expect(trueButton.props().type).to.equal('button');
  });

  it('should render an anchor tag', function() {
    const wrapper = mount(<Button href="/" />);
    expect(wrapper.hasClass('Button')).to.be.true;

    const anchorButton = wrapper.find('a');

    expect(anchorButton).to.have.length(1);
    expect(anchorButton.hasClass('Button__control')).to.be.true;
    expect(anchorButton.props().role).to.equal('button');
  });

  it('should handle clicks on a button tag', function() {
    const onClickSpy = sinon.spy();
    const wrapper = mount(<Button onClick={onClickSpy} />);
    const trueButton = wrapper.find('button');

    trueButton.simulate('click');
    expect(onClickSpy.calledOnce).to.be.true;
  });

  it('should handle clicks on an anchor tag', function() {
    const onClickSpy = sinon.spy();

    const wrapper = mount(<Button href="/" onClick={onClickSpy} />);
    const anchorButton = wrapper.find('a');

    const eventSpy = mockSyntheticEvent();
    anchorButton.simulate('click', eventSpy);
    expect(eventSpy.preventDefault.calledOnce).to.be.false;
    expect(eventSpy.stopPropagation.calledOnce).to.be.false;
  });

  it('should handle clicks on an anchor tag with "href=#"', function() {
    const wrapper = mount(<Button href="#" />);
    const anchorButton = wrapper.find('a');

    const eventSpy = mockSyntheticEvent();
    anchorButton.simulate('click', eventSpy);
    expect(eventSpy.preventDefault.calledOnce).to.be.true;
    expect(eventSpy.stopPropagation.calledOnce).to.be.false;
  });

  it('should disable a button tag', function() {
    const onClickSpy = sinon.spy();
    const wrapper = mount(<Button onClick={onClickSpy} disabled />);
    const trueButton = wrapper.find('button');

    expect(wrapper.hasClass('Button--is-disabled')).to.be.true;
    expect(trueButton.props().disabled).to.be.true;

    trueButton.simulate('click');
    expect(onClickSpy.callCount).to.equal(0);
  });

  it('should disable an anchor tag', function() {
    const onClickSpy = sinon.spy();

    const wrapper = mount(<Button href="/" onClick={onClickSpy} disabled />);
    const anchorButton = wrapper.find('a');

    expect(wrapper.hasClass('Button--is-disabled')).to.be.true;
    expect(anchorButton.props().tabIndex).to.equal(-1);

    const eventSpy = mockSyntheticEvent();
    anchorButton.simulate('click', eventSpy);
    expect(onClickSpy.callCount).to.equal(0);
    expect(eventSpy.preventDefault.calledOnce).to.be.true;
    expect(eventSpy.stopPropagation.calledOnce).to.be.true;
  });
});
