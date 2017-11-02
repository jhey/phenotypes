module.exports = {
  name: 'progress bar',
  label: 'Progress Bar',
  status: 'demo',
  collated: true,
  context: {
    size: 5,
    stepClassName: 'width-6',
    label: 'Fixed step width',
  },
  variants: [{
    name: 'dynamic step width',
    context: {
      size: 5,
      stepClassName: 'flex-1',
      label: 'Dynamic step width',
    },
  }, {
    name: 'responsive step width',
    context: {
      size: 5,
      stepClassName: 'width-4 width-5-sm width-6-md',
      label: 'Responsive step width',
    },
  }],
};
