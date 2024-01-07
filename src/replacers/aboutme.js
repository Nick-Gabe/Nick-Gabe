module.exports = function (data) {
  const aboutme = data.aboutme;

  return aboutme.list.join('\n');
};
