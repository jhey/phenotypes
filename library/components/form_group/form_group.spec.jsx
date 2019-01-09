/* eslint-env mocha */
import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import FormGroup from './form_group';

describe('FormGroup', function() {
  it('should apply error class', function() {
    const withError = shallow(<FormGroup error="error" />);
    expect(withError.hasClass('FormGroup--has-error')).to.be.true;
  });

  it('should render FormGroup__elements', function() {
    const withoutElements = shallow(<FormGroup />);
    const withElements = shallow(
      <FormGroup label="label" error="error" hint="hint" />,
    );

    expect(withoutElements.find('.FormGroup__label')).to.have.length(0);
    expect(withoutElements.find('.FormGroup__error')).to.have.length(0);
    expect(withoutElements.find('.FormGroup__hint')).to.have.length(0);

    const label = withElements.find('.FormGroup__label');
    expect(withElements.find('.FormGroup__label')).to.have.length(1);
    expect(label.is('label')).to.be.true;
    expect(withElements.find('.FormGroup__error')).to.have.length(1);
    expect(withElements.find('.FormGroup__hint')).to.have.length(1);
  });

  it('should render children', function() {
    const wrapper = mount(
      <FormGroup label="label" error="error" hint="hint">
        <div className="test-child" />
      </FormGroup>,
    );
    expect(wrapper.find('.test-child')).to.have.length(1);
  });

  it('should apply controlId to label', function() {
    const wrapper = shallow(<FormGroup label="label" controlId="control-id" />);
    expect(wrapper.find('label').props().htmlFor).to.equal('control-id');
  });
});
