const { getRepositories } = require('../utils/githubApi');
const theme = require('../theme');
const githubRepositoryStats = require('../utils/githubRepositoryStats');

const { colors } = theme;

module.exports = async function (data) {
  const repos = await getRepositories(data.user);

  const getRecents = (a, b) => (new Date(a.updated_at) >= new Date(b.updated_at) ? -1 : 1);

  const generateStatsImage = (repo) =>
    githubRepositoryStats({
      user: data.user,
      repo: repo.name,
      title_color: colors.primary,
      text_color: colors.white,
      bg_color: colors.secondary,
      border_color: colors.black,
      icon_color: colors.white,
      border_radius: 20,
    });

  return repos.sort(getRecents).slice(0, data.repoQuantity).map(generateStatsImage).join('\n');
};
