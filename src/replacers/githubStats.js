const { generateElement } = require('../utils/generateElement');
const { queryFromObject } = require('../utils/URI');

module.exports = function (data) {
  const { align, ...style } = data.githubStats.styles;
  const query = queryFromObject(style);

  const stats = generateElement('img', {
    src: `https://github-readme-stats.vercel.app/api/?username=${data.user}&${query}`,
  });

  return generateElement('p', {
    children: stats,
    align,
  });
};
