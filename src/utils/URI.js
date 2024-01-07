function normalizeColor(color) {
  return color.replace('#', '');
}

function formatKeyValue([key, value]) {
  const isColor = /color/i.test(key);
  value = isColor ? normalizeColor(value) : value;

  return `${key}=${value}`;
}

function queryFromObject(properties) {
  return Object.entries(properties)
    .filter((value) => !!value)
    .map(formatKeyValue)
    .join('&');
}

module.exports = { queryFromObject, normalizeColor, formatKeyValue };
