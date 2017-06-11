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
  }, {
    name: 'small',
    label: 'Small',
    context: {
      size: 'small',
      label: 'Small form group',
    },
  }, {
    name: 'large',
    label: 'Large',
    context: {
      size: 'large',
      label: 'Large form group',
    },
  }, {
    name: 'error',
    label: 'Error',
    context: {
      label: 'Error state',
      error: 'Error message',
    },
  }],
};
