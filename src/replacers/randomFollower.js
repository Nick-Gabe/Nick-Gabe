const { getRandomFollower } = require('../utils/githubApi');
const { drawFollowerImage } = require('../utils/drawFollowerImage');

module.exports = async function (user) {
  const follower = await getRandomFollower(user);
  const imageName = 'randomFollower.png'

  drawFollowerImage(follower, imageName)

  return `<a href="${follower.html_url}" alt="${follower.name}"><img style="height:150px;" src=./src/resources/images/${imageName} alt="Follower of the day"/></a>`;
};
