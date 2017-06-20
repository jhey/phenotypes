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
    },
  }, {
    name: 'anchor',
    label: 'Using anchor tag',
    context: {
      href: '#',
    },
  }, {
    name: 'anchor-disabled',
    label: 'Using anchor tag: disabled',
    context: {
      href: '#',
      disabled: true,
    },
  }, {
    name: 'primary',
    label: 'Primary',
    context: {
      className: 'Button--primary',
    },
  }, {
    name: 'primary-disabled',
    label: 'Primary: disabled',
    context: {
      className: 'Button--primary',
      disabled: true,
    },
  }, {
    name: 'danger',
    label: 'Danger',
    context: {
      className: 'Button--danger',
    },
  }, {
    name: 'danger-disabled',
    label: 'Danger: disabled',
    context: {
      className: 'Button--danger',
      disabled: true,
    },
  }, {
    name: 'link',
    label: 'Link',
    context: {
      className: 'Button--link',
    },
  }, {
    name: 'link-disabled',
    label: 'Link: disabled',
    context: {
      className: 'Button--link',
      disabled: true,
    },
  }, {
    name: 'small',
    label: 'Small',
    context: {
      className: 'Button--small',
    },
  }, {
    name: 'large',
    label: 'Large',
    context: {
      className: 'Button--large',
    },
  }, {
    name: 'responsive',
    label: 'Responsive',
    context: {
      className: 'Button--small Button--medium-md Button--large-lg',
      children: 'Resize me!',
    },
  }],
};
