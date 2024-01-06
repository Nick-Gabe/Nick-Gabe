// This data is passed to be used in the replacers. Like a ".env" file.
// I opted to not use .env so it is possible to create custom objects, arrays and logic here.
// You can modify, create or delete any property you want.
const theme = require('./theme');

module.exports = {
  user: 'nick-gabe',
  startedProgramming: '9/10/2020',
  repoQuantity: 6,
  header: {
    image: {
      src: 'src/resources/images/nickgabe.png',
      width: 600,
    },
    styles: {
      align: 'center',
      style: 'for-the-badge',
      color: theme.colors.lightSecondary,
    },
    links: [
      {
        type: 'link',
        name: 'twitter',
        link: 'https://twitter.com/imnickgabe',
      },
      {
        type: 'link',
        name: 'linkedin',
        link: 'https://linkedin.com/in/nickgabe',
      },
      {
        type: 'link',
        name: 'website',
        link: 'https://nickgabe.vercel.app',
        logo: 'esri',
      },
      {
        type: 'views',
      },
    ],
  },
  socialMedias: {
    styles: {
      align: 'left',
      style: 'for-the-badge',
      color: theme.colors.lightSecondary,
    },
    links: [
      {
        type: 'link',
        name: 'twitter',
        link: 'https://twitter.com/imnickgabe',
      },
      {
        type: 'link',
        name: 'linkedin',
        link: 'https://linkedin.com/in/nickgabe',
      },
      {
        type: 'link',
        name: 'email',
        logo: 'gmail',
        link: 'mailto:nicolasgabrielctt@gmail.com',
      },
      {
        type: 'link',
        name: 'npm',
        link: 'https://www.npmjs.com/~nick-gabe',
      },
      {
        type: 'link',
        name: 'codepen',
        link: 'https://codepen.io/nick-gabe',
      },
      {
        type: 'static',
        name: 'imnickgabe',
        logo: 'discord',
        labelColor: theme.colors.secondary,
      },
    ],
  },
  skillswall: {
    style: 'for-the-badge',
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
};
