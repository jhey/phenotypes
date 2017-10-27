module.exports = {
  name: 'switch',
  label: 'Switch',
  status: 'demo',
  collated: true,
  context: {
    label: 'Switch',
    checked: false,
    disabled: false,
  },
  variants: [{
    name: 'disabled off',
    context: {
      label: 'Disabled switch (off)',
      checked: false,
      disabled: true,
    },
  }, {
    name: 'disabled on',
    context: {
      label: 'Disabled switch (on)',
      checked: true,
      disabled: true,
    },
  }],
};
