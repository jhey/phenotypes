module.exports = {
  name: 'form group',
  label: 'Form Group',
  status: 'draft',
  collated: true,
  context: {
    __preview: true,
    label: 'Form group',
    hint: 'Helper text',
    placeholder: 'Placeholder text',
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
      size: 'small',
      label: 'Small form group',
    },
  }, {
    name: 'large',
    label: 'Large',
    context: {
      controlId: 'large',
      size: 'large',
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
  }],
};
