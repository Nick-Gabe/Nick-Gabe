async function Request(url) {
  const headers = new Headers({
    'Content-Type': 'application/json',
    'user-agent': 'node.js',
  });
  return await (await fetch(url, headers)).json();
}

async function getRandomFollower(user) {
  const followers = await Request(`https://api.github.com/users/${user}/followers`);

  const randomFollowerIndex = Math.floor(Math.random() * followers.length);
  const selectedFollowerUrl = followers[randomFollowerIndex]?.url;
  const selectedFollower = await Request(selectedFollowerUrl);

  return selectedFollower;
}

async function getRepositories(user) {
  const repositories = Request(`https://api.github.com/users/${user}/repos`);
  return repositories;
}

module.exports = { getRandomFollower, getRepositories };
