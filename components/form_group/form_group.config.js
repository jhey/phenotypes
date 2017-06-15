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
      controlId: 'small',
      phSize: 'small',
      label: 'Small form group',
    },
  }, {
    name: 'large',
    label: 'Large',
    context: {
      controlId: 'large',
      phSize: 'large',
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
      controlId: 'responsive',
      phSizeMd: 'large',
      label: 'Responsive form group',
    },
  }],
};
