const { default: axios } = require('axios');

async function getRandomFollower(user) {
  const followers = (await axios.get(`https://api.github.com/users/${user}/followers`)).data;

  const randomFollowerIndex = Math.floor(Math.random() * followers.length);
  const selectedFollower = (await axios.get((followers[randomFollowerIndex]?.url))).data;

  return selectedFollower;
}

/**
 * Still in progress
 */
async function getLastFollower(user) {
  const followQuantity = (await axios.get(`https://api.github.com/users/${user}`)).data.followers;
  const lastPage = Math.ceil(followQuantity / 30);
  const followers = (await axios.get(`https://api.github.com/users/${user}/followers?page=${lastPage}`)).data;

  const lastFollowerIndex = followers.length - 1;
  const selectedFollower = (await axios.get((followers[lastFollowerIndex]?.url))).data;

  return selectedFollower;
}

module.exports = { getRandomFollower, getLastFollower }