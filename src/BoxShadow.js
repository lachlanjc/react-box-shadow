const React = require('react')
const PropTypes = require('prop-types')
const cssShadow = require('css-box-shadow')

const BoxShadow = ({
  is = 'div',
  inset = false,
  offsetX = 0,
  offsetY = 0,
  blurRadius = 4,
  spreadRadius = 0,
  color = 'rgba(0,0,0,.5)',
  style,
  ...props
}) => {
  const Component = is
  const sx = {
    ...style,
    boxShadow: cssShadow.stringify([
      {
        inset,
        offsetX,
        offsetY,
        blurRadius,
        spreadRadius,
        color
      }
    ])
  }
  return <Component style={sx} {...props} />
}

BoxShadow.propTypes = {
  is: PropTypes.oneOf([PropTypes.string, PropTypes.function]),
  inset: PropTypes.boolean,
  offsetX: PropTypes.number,
  offsetY: PropTypes.number,
  blurRadius: PropTypes.number,
  spreadRadius: PropTypes.number,
  color: PropTypes.string,
  style: PropTypes.object
}

module.exports = BoxShadow
