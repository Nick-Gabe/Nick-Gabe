module.exports = function (data) {
  const skillswall = data.skillswall;
  const skills = skillswall.skills;
  const style = skillswall.style;

  const encodeStr = str => {
    return encodeURI(str.toLowerCase());
  }
  
  const imgSkills = skills.map(skill => {
    const name = encodeStr(skill.name.replace(/-/g, '_'));
    const logo = encodeStr((skill.logo ?? skill.name).replace(/[ _]/g, '-'));
    const bgColor = skill.background.replace('#', '');
    const textColor = skill.color.replace('#', '');

    return `<img src="https://img.shields.io/badge/${name}-${bgColor}?style=${style}&logo=${logo}&logoColor=${textColor}">`
  })

  if(skillswall.randomOrder) imgSkills.sort(() => Math.random() - 0.5);

  return imgSkills.join('\n');
};