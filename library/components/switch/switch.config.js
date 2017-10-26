module.exports = {
  name: 'switch',
  label: 'Switch',
  status: 'demo',
  collated: true,
  context: {
    label: 'Switch',
    isOn: false,
    disabled: false,
  },
  variants: [{
    name: 'disabled off',
    context: {
      label: 'Disabled switch (off)',
      isOn: false,
      disabled: true,
    },
  }, {
    name: 'disabled on',
    context: {
      label: 'Disabled switch (on)',
      isOn: true,
      disabled: true,
    },
  }],
};
