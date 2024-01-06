require('dotenv/config');
const axios = require('axios').default;

module.exports = async function (data) {
  const repos = (
    await axios.get(`https://api.github.com/users/${data.user}/repos`, { 'user-agent': 'node.js' })
  ).data;

  const getRecents = (a, b) => (new Date(a.updated_at) >= new Date(b.updated_at) ? -1 : 1);
  const formatJson = (elem) =>
    `<a href="${
      elem.html_url
    }"><img height=100 src="https://github-readme-stats.vercel.app/api/pin/?username=${
      data.user
    }&repo=${encodeURIComponent(
      elem.name,
    )}&title_color=FE3B7B&text_color=F2F2F2&bg_color=393359&border_color=121111&icon_color=F2F2F2&border_radius=20"/></a>`;

  return repos.sort(getRecents).slice(0, data.repoQuantity).map(formatJson).join('\n');
};
