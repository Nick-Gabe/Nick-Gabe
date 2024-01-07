const theme = require('../theme');
const { generateBadge } = require('../utils/generateBadge');
const { generateElement } = require('../utils/generateElement');

const wallColors = [theme.colors.secondary, theme.colors.lightSecondary];
const highlightColor = theme.colors.primary;

const randomItem = (array) => array[Math.floor(Math.random() * array.length)];

const getWallColor = (options = { isHighlighted: false }) => ({
  color: options.isHighlighted ? highlightColor : randomItem(wallColors),
  logoColor: theme.colors.white,
});

const encodeStr = (str, replacer) => {
  return encodeURI(str.toLowerCase().replace(/-/g, replacer));
};

module.exports = function (data) {
  const skillswall = data.skillswall;
  const { align, ...badgeGenericStyles } = skillswall.styles;

  const imgSkills = skillswall.skills.map((skill) => {
    const name = encodeStr(skill.name, '_');
    const logo = encodeStr(skill.logo ?? skill.name, '+');
    const colors = getWallColor({ isHighlighted: skill.isHighlighted });

    return generateBadge({ name, logo, ...badgeGenericStyles, ...colors });
  });

  if (skillswall.randomOrder) imgSkills.sort(() => Math.random() - 0.5);

  return generateElement('p', { children: imgSkills.join('\n'), align });
};
