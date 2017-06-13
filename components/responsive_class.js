const classes = require('classnames');

// Generate a responsive className for a component, based on its phSize* props
//
// Arguments:
//  rootClass - string, root of the class to be applied
//  props - object, props for the component
//  isApplied - function, should return a boolean dictating if the responsive
//    class should be applied, based on the corresponding phSize* prop
//
// Examples:
//  >> responsiveClass('button-small', { phSize: 'large' }, size => size === 'small')
//  ''
//  >> responsiveClass('button-large', { phSize: 'large' }, size => size === 'large')
//  'button-large'
//  >> responsiveClass('button-large', { phSizeMd: 'large' }, size => size === 'large')
//  'button-large-md'
//
function responsiveClass(rootClass, props, isApplied) {
  // Note: Keep breakpoint suffixes in sync with CSS!
  return classes({
    [rootClass]: isApplied(props.phSize),
    [`${rootClass}-xs`]: isApplied(props.phSizeXs),
    [`${rootClass}-sm`]: isApplied(props.phSizeSm),
    [`${rootClass}-md`]: isApplied(props.phSizeMd),
    [`${rootClass}-lg`]: isApplied(props.phSizeLg),
    [`${rootClass}-xl`]: isApplied(props.phSizeXL),
  });
}

module.exports = responsiveClass;
