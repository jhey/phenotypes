module.exports = {
  name: 'text input',
  label: 'Text Input',
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
      className: 'TextInput--small',
    },
  }, {
    name: 'large',
    label: 'Large',
    context: {
      className: 'TextInput--large',
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
  },
  {
    name: 'responsive',
    label: 'Responsive',
    context: {
      placeholder: 'Resize me!',
      className: 'TextInput--small TextInput--default-md TextInput--large-lg',
    },
  }],
};
