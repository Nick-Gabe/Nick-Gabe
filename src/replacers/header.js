module.exports = function (data) {
  const header = data.header;
  const { style, align } = header.styles;
  const color = header.styles.color.replace('#', '');

  const linkTypes = {
    link: ({ name, link, logo }) =>
      `<a href="${link}">
        <img src="https://img.shields.io/badge/${name}-${color}?style=${style}&logo=${
        logo ?? name
      }&logoColor=white">
      </a>`,
    views: () =>
      `<img src="https://komarev.com/ghpvc/?username=${data.user}&style=${style}&color=${color}">`,
  };

  const headerImage = `<img src="${header.image.src}" width="${header.image.width ?? 600}">`;
  const headerLinksHTML = header.links.map((link) => linkTypes[link.type](link)).join('\n');

  const sections = [headerImage, headerLinksHTML];

  return sections.map((section) => `<p align="${align}">${section}</p>`).join('\n');
};
