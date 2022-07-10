const { default: axios } = require('axios');
require('dotenv/config');

module.exports = async function (user) {
  const repos = (
    await axios.get(`https://api.github.com/users/${user}/repos`, { 'user-agent': 'node.js' })
  ).data;

  const getRecents = (a, b) => (new Date(a.updated_at) >= new Date(b.updated_at) ? -1 : 1);
  const formatJson = (elem) => `<a href="${elem.html_url}">
    <img height=100 src="https://github-readme-stats.vercel.app/api/pin/?username=${user}&repo=${encodeURIComponent(
    elem.name,
  )}&theme=moltack&border_radius=20"/>
  </a>`;

  return repos.sort(getRecents).slice(0, process.env.repoQuantity).map(formatJson).join('\n');
};
