module.exports = function (data) {
  const socialMedias = data.socialMedias;
  const { style, align } = socialMedias.styles;
  const color = socialMedias.styles.color.replace('#', '');

  const socialMediaTypes = {
    link: ({ name, link, logo }) =>
      `<a href="${link}"><img src="https://img.shields.io/badge/${name}-${color}?style=${style}&logo=${
        logo ?? name
      }&logoColor=white"></a>`,
    static: ({ name, logo, message, labelColor }) =>
      `<img src="https://img.shields.io/badge/${name}-${
        message ? message + '-' : ''
      }${color}?style=${style}&logo=${logo}&logoColor=white&labelColor=${labelColor.replace(
        '#',
        '',
      )}">`,
  };

  const socialMediasHTML = socialMedias.links
    .map((socialMedia) => socialMediaTypes[socialMedia.type](socialMedia))
    .join('\n');

  return `<p align="${align}">${socialMediasHTML}</p>`;
};
