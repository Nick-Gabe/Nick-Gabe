const theme = require('../theme');

const wallColors = [theme.colors.secondary, theme.colors.lightSecondary];
const highlightColor = theme.colors.primary;

const randomItem = (array) => array[Math.floor(Math.random() * array.length)];

const getWallColor = (options = { isHighlighted: false }) => ({
  background: options.isHighlighted ? highlightColor : randomItem(wallColors),
  textColor: theme.colors.white,
});

const encodeStr = (str) => {
  return encodeURI(str.toLowerCase());
};

module.exports = function (data) {
  const skillswall = data.skillswall;
  const { style, align } = skillswall.styles;

  const imgSkills = skillswall.skills.map((skill) => {
    const name = encodeStr(skill.name.replace(/-/g, '_'));
    const logo = encodeStr((skill.logo ?? skill.name).replace(/[ _]/g, '-'));

    const colors = getWallColor({ isHighlighted: skill.isHighlighted });
    const bgColor = colors.background.replace('#', '');
    const textColor = colors.textColor.replace('#', '');

    return `<img src="https://img.shields.io/badge/${name}-${bgColor}?style=${style}&logo=${logo}&logoColor=${textColor}">`;
  });

  if (skillswall.randomOrder) imgSkills.sort(() => Math.random() - 0.5);

  return `<p align="${align}">${imgSkills.join('\n')}</p>`;
};
