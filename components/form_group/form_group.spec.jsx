/* eslint-env mocha */
/* eslint-disable prefer-arrow-callback, no-unused-expressions */
const React = require('react');
const { mount, shallow } = require('enzyme');
const { expect } = require('chai');

const FormGroup = require('./form_group');

describe('FormGroup', function () {
  it('should apply correct class for size', function () {
    const defaultSize = shallow(<FormGroup />);
    const small = shallow(<FormGroup phSize="small" />);
    const large = shallow(<FormGroup phSize="large" />);
    const responsive = shallow(<FormGroup phSizeMd="large" />);

    expect(defaultSize.hasClass('FormGroup')).to.be.true;
    expect(defaultSize.hasClass('FormGroup--small')).to.be.false;
    expect(defaultSize.hasClass('FormGroup--large')).to.be.false;

    expect(small.hasClass('FormGroup')).to.be.true;
    expect(small.hasClass('FormGroup--small')).to.be.true;
    expect(small.hasClass('FormGroup--large')).to.be.false;

    expect(large.hasClass('FormGroup')).to.be.true;
    expect(large.hasClass('FormGroup--small')).to.be.false;
    expect(large.hasClass('FormGroup--large')).to.be.true;

    expect(responsive.hasClass('FormGroup')).to.be.true;
    expect(responsive.hasClass('FormGroup--large-md')).to.be.true;
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

    const label = withElements.find('.FormGroup__label');
    expect(withElements.find('.FormGroup__label')).to.have.length(1);
    expect(label.is('label')).to.be.true;
    expect(withElements.find('.FormGroup__error')).to.have.length(1);
    expect(withElements.find('.FormGroup__hint')).to.have.length(1);
  });

  it('should render children', function () {
    const wrapper = mount(
      <FormGroup label="label" error="error" hint="hint">
        <div className="test-child" />
      </FormGroup>
    );
    expect(wrapper.find('.test-child')).to.have.length(1);
  });

  it('should apply controlId to label', function () {
    const wrapper = shallow(<FormGroup label="label" controlId="control-id" />);
    expect(wrapper.find('label').props().htmlFor).to.equal('control-id');
  });
});
