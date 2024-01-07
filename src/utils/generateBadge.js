const { generateElement } = require('./generateElement');
const { queryFromObject, normalizeColor } = require('./URI');

const escapeString = (string) => string.replace(/[_-]/g, (match) => match.repeat(2));

function generateBadge({ name, message, color = '', href, ...properties }) {
  const path = [name, message, normalizeColor(color)].filter(Boolean).map(escapeString).join('-');

  const query = queryFromObject(properties);

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
  const query = queryFromObject(badgeProperties);

  const badge = generateElement('img', {
    src: `https://komarev.com/ghpvc/?${query}`,
  });

  return badge;
}

module.exports = { generateBadge, generateViewsBadge };
