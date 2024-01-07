const { generateBadge } = require('../utils/generateBadge');
const { generateElement } = require('../utils/generateElement');

const randomItem = (array) => array[Math.floor(Math.random() * array.length)];
const encodeStr = (str) => encodeURI(str.toLowerCase());

module.exports = function (data) {
  const skillswall = data.skillswall;
  const { align, wallColors, highlightColor, ...badgeGenericStyles } = skillswall.styles;

  const getWallColor = (options = { isHighlighted: false }) => {
    const selectedColor = options.isHighlighted ? highlightColor : randomItem(wallColors);

    return {
      color: selectedColor.base,
      logoColor: selectedColor.over,
    };
  };

  const imgSkills = skillswall.skills.map((skill) => {
    const name = encodeStr(skill.name);
    const logo = encodeStr(skill.logo ?? skill.name);
    const colors = getWallColor({ isHighlighted: skill.isHighlighted });

    return generateBadge({ name, logo, ...badgeGenericStyles, ...colors });
  });

  if (skillswall.randomOrder) imgSkills.sort(() => Math.random() - 0.5);

  return generateElement('p', { children: imgSkills.join('\n'), align });
};
