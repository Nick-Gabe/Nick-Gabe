module.exports = function (data) {
  const linkTypes = {
    link: ({ name, link, logo, style, color }) =>
      `<a href="${link}">
        <img src="https://img.shields.io/badge/${name}-${color.replace(
        '#',
        '',
      )}?style=${style}&logo=${logo ?? name}&logoColor=white">
      </a>`,
    views: ({ color, style }) =>
      `<img src="https://komarev.com/ghpvc/?username=${
        data.user
      }&style=${style}&color=${color.replace('#', '')}">`,
  };

  const header = data.header;

  const headerImage = `<img src="${header.image.src}" width="${header.image.width ?? 600}">`;
  const headerLinksHTML = header.links.map((link) => linkTypes[link.type](link)).join('\n');

  const sections = [headerImage, headerLinksHTML];

  return sections.map((section) => `<p align="${header.align}">${section}</p>`).join('\n');
};
