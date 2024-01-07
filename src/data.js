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
      logoColor: theme.colors.white,
    },
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
  socialMedias: {
    styles: {
      align: 'left',
      style: 'for-the-badge',
      color: theme.colors.lightSecondary,
      logoColor: theme.colors.white,
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
        labelColor: theme.colors.secondary,
      },
    ],
  },
  skillswall: {
    styles: {
      style: 'for-the-badge',
      align: 'left',
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
};
