// This data is passed to be used in the replacers. Like a ".env" file.
// I opted to not use .env so it is possible to create custom objects, arrays and logic here.
// You can modify, create or delete any property you want.
const { colors } = require('./theme');

module.exports = {
  user: 'nick-gabe',
  startedProgramming: '9/10/2020',
  repoQuantity: 6,
  header: {
    styles: {
      align: 'center',
      style: 'for-the-badge',
      color: colors.lightSecondary.base,
      logoColor: colors.lightSecondary.over,
    },
    image: {
      src: 'src/resources/images/nickgabe.png',
      width: 600,
    },
    description: "👋 Heyyy! I'm Nícolas Gabriel, a brazilian programmer.",
    badges: [
      {
        type: 'badge',
        name: 'twitter',
        href: 'https://twitter.com/imnickgabe',
      },
      {
        type: 'badge',
        name: 'linkedin',
        href: 'https://linkedin.com/in/nickgabe',
      },
      {
        type: 'badge',
        name: 'website',
        href: 'https://nickgabe.vercel.app',
        logo: 'esri',
      },
      {
        type: 'views',
      },
    ],
  },
  aboutme: {
    list: ['* Nícolas Gabriel, 19 years', '* Full Stack programmer', '* Currently studying Python'],
  },
  skillswall: {
    styles: {
      style: 'for-the-badge',
      align: 'left',
      highlightColor: colors.primary,
      wallColors: [colors.secondary, colors.lightSecondary],
    },
    randomOrder: true,
    skills: [
      { name: 'JavaScript', isHighlighted: true },
      { name: 'HTML5' },
      { name: 'Markdown' },
      { name: 'CSS3', isHighlighted: true },
      { name: 'Python' },
      { name: 'Shell Script', logo: 'gnu-bash' },
      { name: 'React', isHighlighted: true },
      { name: 'React Native', logo: 'react' },
      { name: 'jQuery' },
      { name: 'SASS' },
      { name: 'Ant-Design', isHighlighted: true },
      { name: 'GraphQL' },
      { name: 'Chakra', logo: 'chakraui' },
      { name: 'Bootstrap' },
      { name: 'Node.JS', isHighlighted: true },
      { name: 'Jest' },
      { name: 'Strapi' },
      { name: 'Express.js', logo: 'express' },
      { name: 'FastAPI', isHighlighted: true },
      { name: 'Flask' },
      { name: 'Styled Components' },
      { name: 'TailwindCSS', isHighlighted: true },
      { name: 'Firebase' },
      { name: 'MongoDB' },
      { name: 'SQLite' },
      { name: 'TypeScript', isHighlighted: true },
      { name: 'Netlify' },
      { name: 'Vercel' },
      { name: 'Heroku' },
      { name: 'Github Pages', logo: 'github' },
      { name: 'Photoshop', logo: 'adobe-photoshop' },
      { name: 'Figma' },
      { name: 'Storybook' },
      { name: 'NPM' },
      { name: 'Git', isHighlighted: true },
      { name: 'GitHub' },
      { name: 'Visual Studio Code' },
      { name: 'Docker', isHighlighted: true },
      { name: 'Jira' },
      { name: 'GitHub Actions', isHighlighted: true },
    ],
  },
  recentworks: {
    styles: {
      title_color: colors.primary.base,
      text_color: colors.secondary.over,
      bg_color: colors.secondary.base,
      border_color: colors.black.base,
      icon_color: colors.secondary.over,
    },
  },
  socialMedias: {
    styles: {
      align: 'left',
      style: 'for-the-badge',
      color: colors.lightSecondary.base,
      logoColor: colors.lightSecondary.over,
    },
    links: [
      {
        name: 'twitter',
        href: 'https://twitter.com/imnickgabe',
      },
      {
        name: 'linkedin',
        href: 'https://linkedin.com/in/nickgabe',
      },
      {
        name: 'email',
        logo: 'gmail',
        href: 'mailto:nicolasgabrielctt@gmail.com',
      },
      {
        name: 'npm',
        href: 'https://www.npmjs.com/~nick-gabe',
      },
      {
        name: 'codepen',
        href: 'https://codepen.io/nick-gabe',
      },
      {
        name: 'imnickgabe',
        logo: 'discord',
        labelColor: colors.secondary.base,
      },
    ],
  },
  githubStats: {
    styles: {
      style: 'for-the-badge',
      align: 'center',
      title_color: colors.primary.base,
      text_color: colors.secondary.over,
      bg_color: colors.secondary.base,
      border_color: colors.black.base,
      show_icons: true,
      icon_color: colors.secondary.over,
      rank_icon: 'github',
    },
  },
};
