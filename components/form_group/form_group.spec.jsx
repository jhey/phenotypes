/* eslint-env mocha */
/* eslint-disable prefer-arrow-callback, no-unused-expressions */
const React = require('react');
const { shallow, mount } = require('enzyme');
const { expect } = require('chai');

const FormGroup = require('./form_group');

describe('FormGroup', function () {
  it('should render form control element', function () {
    const wrapper = mount(<FormGroup />);
    const input = wrapper.find('input');

    expect(input).to.have.length(1);
    expect(input.props().type).to.equal('text');
    expect(input.hasClass('form-control')).to.be.true;
  });

  it('should apply correct class for size', function () {
    const defaultSize = shallow(<FormGroup />);
    const small = shallow(<FormGroup size="small" />);
    const large = shallow(<FormGroup size="large" />);

    expect(defaultSize.hasClass('FormGroup')).to.be.true;
    expect(defaultSize.hasClass('FormGroup--small')).to.be.false;
    expect(defaultSize.hasClass('FormGroup--large')).to.be.false;

    expect(small.hasClass('FormGroup')).to.be.true;
    expect(small.hasClass('FormGroup--small')).to.be.true;
    expect(small.hasClass('FormGroup--large')).to.be.false;

    expect(large.hasClass('FormGroup')).to.be.true;
    expect(large.hasClass('FormGroup--small')).to.be.false;
    expect(large.hasClass('FormGroup--large')).to.be.true;
  });

  it('should apply error class', function () {
    const withError = shallow(<FormGroup error="error" />);

    expect(withError.hasClass('FormGroup--has-error')).to.be.true;
  });

  it('should render FormGroup__elements', function () {
    const withoutElements = shallow(<FormGroup />);
    const withElements = shallow(<FormGroup label="label" error="error" hint="hint" />);

    expect(withoutElements.find('.FormGroup__label')).to.have.length(0);
    expect(withoutElements.find('.FormGroup__error')).to.have.length(0);
    expect(withoutElements.find('.FormGroup__hint')).to.have.length(0);

    expect(withElements.find('.FormGroup__label')).to.have.length(1);
    expect(withElements.find('.FormGroup__error')).to.have.length(1);
    expect(withElements.find('.FormGroup__hint')).to.have.length(1);
  });
});
