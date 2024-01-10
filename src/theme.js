const { getColorBrightness } = require("./utils/getColorBrightness");

const black = '#121111';
const white = '#F2F2F2';

function generateBaseAndOverColor(color) {
  const brightnessThreshold = 0.69;

  return {
    base: color,
    over: getColorBrightness(color) <= brightnessThreshold ? white : black,
  }
}

module.exports = {
  colors: {
    primary: generateBaseAndOverColor('#F73C7B'),
    secondary: generateBaseAndOverColor('#393359'),
    lightSecondary: generateBaseAndOverColor('#4D4577'),
    black: generateBaseAndOverColor(black),
    white: generateBaseAndOverColor(white),
  },
};
