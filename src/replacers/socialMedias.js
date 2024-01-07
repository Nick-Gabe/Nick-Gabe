const { generateBadge } = require('../utils/generateBadge');
const { generateElement } = require('../utils/generateElement');

module.exports = function (data) {
  const socialMedias = data.socialMedias;
  const { align, ...badgeGenericStyles } = socialMedias.styles;

  const socialMediasHTML = socialMedias.links
    .map((socialMedia) =>
      generateBadge({
        ...socialMedia,
        ...badgeGenericStyles,
        logo: socialMedia.logo ?? socialMedia.name,
      }),
    )
    .join('\n');

  return generateElement('p', { children: socialMediasHTML, align });
};
