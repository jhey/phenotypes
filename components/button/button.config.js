module.exports = {
  name: 'button',
  label: 'Button',
  status: 'draft',
  collated: true,
  context: {
    children: 'Button',
  },
  variants: [{
    name: 'default',
    label: 'Default',
  }, {
    name: 'disabled',
    label: 'Default: disabled',
    context: {
      disabled: true,
      children: 'Disabled button',
    },
  }, {
    name: 'anchor',
    label: 'Using anchor tag',
    context: {
      href: '#',
      children: 'Anchor-tagged button',
    },
  }, {
    name: 'anchor-disabled',
    label: 'Using anchor tag: disabled',
    context: {
      href: '#',
      disabled: true,
      children: 'Disabled anchor-tagged button',
    },
  }, {
    name: 'primary',
    label: 'Primary',
    context: {
      className: 'Button--primary',
      children: 'Primary button',
    },
  }, {
    name: 'primary-disabled',
    label: 'Primary: disabled',
    context: {
      className: 'Button--primary',
      disabled: true,
      children: 'Disabled primary button',
    },
  }, {
    name: 'danger',
    label: 'Danger',
    context: {
      className: 'Button--danger',
      children: 'Danger button',
    },
  }, {
    name: 'danger-disabled',
    label: 'Danger: disabled',
    context: {
      className: 'Button--danger',
      disabled: true,
      children: 'Disabed danger button',
    },
  }, {
    name: 'link',
    label: 'Link',
    context: {
      className: 'Button--link',
      children: 'Link-style button',
    },
  }, {
    name: 'link-disabled',
    label: 'Link: disabled',
    context: {
      className: 'Button--link',
      disabled: true,
      children: 'Disabled link-style button',
    },
  }, {
    name: 'small',
    label: 'Small',
    context: {
      className: 'Button--small',
      children: 'Small button',
    },
  }, {
    name: 'large',
    label: 'Large',
    context: {
      className: 'Button--large',
      children: 'Large button',
    },
  }, {
    name: 'responsive',
    label: 'Responsive',
    context: {
      className: 'Button--small Button--medium-md Button--large-lg',
      children: 'Responsive button',
    },
  }],
};
