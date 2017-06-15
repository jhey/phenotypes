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
    label: 'Default',
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
    name: 'responsive',
    label: 'Responsive',
    context: {
      className: 'FormGroup--small FormGroup--large-md',
      controlId: 'responsive',
      label: 'Responsive form group',
    },
  }],
};
