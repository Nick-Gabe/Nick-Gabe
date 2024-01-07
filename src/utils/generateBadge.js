const { generateElement } = require('./generateElement');

const normalizeColor = (color) => color.replace('#', '');

const formatKeyValue = ([key, value]) => {
  const isColor = /color/i.test(key);
  value = isColor ? normalizeColor(value) : value;

  return `${key}=${value}`;
};

const generateQueryFromObject = (properties) => {
  return Object.entries(properties)
    .filter((value) => !!value)
    .map(formatKeyValue)
    .join('&');
};

function generateBadge({ name, message, color = '', href, ...properties }) {
  const path = [name, message, normalizeColor(color)].filter(Boolean).join('-');

  const query = generateQueryFromObject(properties);

  const badge = generateElement('img', {
    src: `https://img.shields.io/badge/${path}?${query}`,
  });

  return href
    ? generateElement('a', {
        children: badge,
        href,
      })
    : badge;
}

function generateViewsBadge(badgeProperties) {
  const query = generateQueryFromObject(badgeProperties);

  const badge = generateElement('img', {
    src: `https://komarev.com/ghpvc/?${query}`,
  });

  return badge;
}

module.exports = { generateBadge, generateViewsBadge };
