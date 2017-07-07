module.exports = {
  name: 'checkbox',
  label: 'Checkbox',
  status: 'draft',
  collated: true,
  context: {
    label: 'Checkbox label'
  },
  variants: [{
    name: 'checked',
    context: {
      label: 'Checked',
      checked: true
    }
  }, {
    name: 'disabled',
    context: {
      label: 'Disabled',
      disabled: true
    }
  }, {
    name: 'disabled and checked',
    context: {
      label: 'Disabled and checked',
      disabled: true,
      checked: true
    }
  }]
};
