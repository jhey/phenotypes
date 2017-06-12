module.exports = {
  name: 'form group',
  label: 'Form Group',
  status: 'draft',
  collated: true,
  context: {
    label: 'Form group',
    hint: 'Helper text',
    placeholder: 'Placeholder text',
  },
  variants: [{
    name: 'default',
    label: 'Default',
    context: {
      id: 'default',
    },
  }, {
    name: 'small',
    label: 'Small',
    context: {
      id: 'small',
      size: 'small',
      label: 'Small form group',
    },
  }, {
    name: 'large',
    label: 'Large',
    context: {
      id: 'large',
      size: 'large',
      label: 'Large form group',
    },
  }, {
    name: 'error',
    label: 'Error',
    context: {
      id: 'error',
      label: 'Error state',
      error: 'Error message',
    },
  }],
};
