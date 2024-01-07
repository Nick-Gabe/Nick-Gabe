const { getRepositories } = require('../utils/githubApi');
const theme = require('../theme');
const githubRepositoryStats = require('../utils/githubRepositoryStats');

const { colors } = theme;

module.exports = async function (data) {
  const recentworks = data.recentworks;
  const styles = recentworks.styles;
  const repos = await getRepositories(data.user);

  const getRecents = (a, b) => (new Date(a.updated_at) >= new Date(b.updated_at) ? -1 : 1);

  const generateStatsImage = (repo) =>
    githubRepositoryStats({
      user: data.user,
      repo: repo.name,
      title_color: styles.title_color,
      text_color: styles.text_color,
      bg_color: styles.bg_color,
      border_color: styles.border_color,
      icon_color: styles.icon_color,
      border_radius: 20,
    });

  return repos.sort(getRecents).slice(0, data.repoQuantity).map(generateStatsImage).join('\n');
};
