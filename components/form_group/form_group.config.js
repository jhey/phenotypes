module.exports = {
  name: 'form group',
  label: 'Form Group',
  status: 'draft',
  collated: true,
  context: {
    __preview: true,
    label: 'Form group',
    hint: 'Helper text',
  },
  variants: [{
    name: 'default',
    label: 'Medium',
    context: {
      controlId: 'default',
    },
  }, {
    name: 'small',
    label: 'Small',
    context: {
      className: 'FormGroup--small',
      controlId: 'small',
      label: 'Small form group',
    },
  }, {
    name: 'large',
    label: 'Large',
    context: {
      className: 'FormGroup--large',
      controlId: 'large',
      label: 'Large form group',
    },
  }, {
    name: 'error',
    label: 'Error',
    context: {
      controlId: 'error',
      label: 'Error state',
      error: 'Error message',
    },
  }, {
    name: 'error small',
    label: 'Error (small)',
    context: {
      className: 'FormGroup--small',
      controlId: 'error1',
      label: 'Error state (small)',
      error: 'Error message',
    },
  }, {
    name: 'error large',
    label: 'Error (large)',
    context: {
      className: 'FormGroup--large',
      controlId: 'error2',
      label: 'Error state (large)',
      error: 'Error message',
    },
  }, {
    name: 'responsive',
    label: 'Responsive',
    context: {
      className: 'FormGroup--small FormGroup--medium-sm FormGroup--large-md',
      controlId: 'responsive',
      label: 'Responsive form group',
    },
  }],
};
