const { fromString } = require('css-color-converter')

function getColorBrightness(color) {
  console.log('dale')
  if (color) {
    const cssColor = fromString(color)

    if (cssColor) {
      const rgb = cssColor.toRgbaArray()
      return +((rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 255000).toFixed(2)
    }
  }

  return 0
}

module.exports = {
  getColorBrightness
}
