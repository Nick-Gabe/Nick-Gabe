async function GithubRequest(url) {
  const headers = new Headers({
    'Content-Type': 'application/json',
    'user-agent': 'node.js',
  });
  if (process.env.GITHUB_TOKEN) {
    headers.append('Authorization', `Bearer ${process.env.GITHUB_TOKEN}`);
  }

  const response = await (
    await fetch(`https://api.github.com/${url}`, {
      headers,
    })
  ).json();

  return response;
}

const VALID_GITHUB_USERNAME = /^[a-zA-Z0-9-]{1,39}$/;

function assertValidUsername(user) {
  if (!VALID_GITHUB_USERNAME.test(user)) {
    throw new Error(`Invalid GitHub username: ${user}`);
  }
}

async function getRandomFollower(user) {
  assertValidUsername(user);
  const followers = await GithubRequest(`users/${user}/followers`);

  const randomFollowerIndex = Math.floor(Math.random() * followers.length);
  const selectedFollowerName = followers[randomFollowerIndex].login;
  assertValidUsername(selectedFollowerName);
  const selectedFollower = await GithubRequest(`users/${selectedFollowerName}`);

  return selectedFollower;
}

async function getRepositories(user) {
  assertValidUsername(user);
  const repositories = GithubRequest(`users/${user}/repos`);
  return repositories;
}

module.exports = { getRandomFollower, getRepositories };
