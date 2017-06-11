module.exports = {
  name: 'form control',
  label: 'Form Control',
  status: 'draft',
  collated: true,
  context: {
    placeholder: 'Placeholder text',
  },
  variants: [{
    name: 'default',
    label: 'Default',
  }, {
    name: 'small',
    label: 'Small',
    context: {
      size: 'small',
    },
  }, {
    name: 'large',
    label: 'Large',
    context: {
      size: 'large',
    },
  }, {
    name: 'disabled',
    label: 'Disabled',
    context: {
      placeholder: 'Can’t touch this.',
      disabled: true,
    },
  }, {
    name: 'password',
    label: 'Password',
    context: {
      placeholder: 'Password goes here.',
      type: 'password',
    },
  }],
};
