const { generateBadge, generateViewsBadge } = require('../utils/generateBadge');
const { generateElement } = require('../utils/generateElement');

module.exports = function (data) {
  const header = data.header;
  const { align, ...badgeGenericStyles } = header.styles;

  const badgeTypes = {
    badge: (badgeProperties) => generateBadge(badgeProperties),
    views: (badgeProperties) => generateViewsBadge({ username: data.user, ...badgeProperties }),
  };

  const headerImage = generateElement('img', { ...header.image });

  const headerBadgesHTML = header.badges
    .map(({ type, ...badgeProperties }) =>
      badgeTypes[type]({
        ...badgeProperties,
        ...badgeGenericStyles,
        logo: badgeProperties.logo ?? badgeProperties.name,
      }),
    )
    .join('\n');

  const sections = [headerImage, headerBadgesHTML];

  return sections.map((section) => generateElement('p', { children: section, align })).join('\n');
};
