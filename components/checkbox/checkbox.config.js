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
    name: 'disabled checked',
    context: {
      label: 'Disabled checked',
      disabled: true,
      checked: true
    }
  }, {
    name: 'small',
    context: {
      label: 'Small',
      className: 'Checkbox--small'
    }
  }, {
    name: 'small checked',
    context: {
      label: 'Small checked',
      checked: true,
      className: 'Checkbox--small'
    }
  }, {
    name: 'small disabled',
    context: {
      label: 'Small disabled',
      disabled: true,
      className: 'Checkbox--small'
    }
  }, {
    name: 'small disabled checked',
    context: {
      label: 'Small disabled checked',
      disabled: true,
      checked: true,
      className: 'Checkbox--small'
    }
  }]
};
