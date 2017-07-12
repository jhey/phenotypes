module.exports = {
  name: 'tab',
  label: 'Tab',
  status: 'demo',
  collated: true,
  context: {
    description: `Tab components inherit their font style from their ancestors. In this example,
the parent has the .h5 class.`,
    className: 'h5',
    tabs: [{
      name: 'First tab',
    }, {
      name: 'Second tab',
    }],
  },
  variants: [{
    name: 'responsive',
    context: {
      description: 'For responsiveness, just use responsive classes on an ancestor.',
      className: 'text-2 text-4-sm text-6-md',
      tabs: [{
        name: 'So responsive',
      }, {
        name: 'indeed',
      }],
    },
  }, {
    name: 'custom Tab style',
    context: {
      description: 'You can specify a className prop on individual Tab for a custom look.',
      className: 'h5',
      tabs: [{
        name: 'Normal tab',
      }, {
        name: 'Special tab',
        props: {
          className: 'text-style-italic text-weight-normal',
        },
      }, {
        name: 'Normal tab',
      }],
    },
  }, {
    name: 'external links',
    context: {
      description: 'A Tab can link; just give it an href prop.',
      className: 'h5',
      tabs: [{
        name: 'Internal thing 1',
      }, {
        name: 'Internal thing 2',
      }, {
        name: 'External thing ↗️',
        props: {
          href: 'https://amino.com',
        },
      }],
    },
  }],
};
