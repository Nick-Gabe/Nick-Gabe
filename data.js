// This data is passed to be used in the replacers. Like a ".env" file.
// I opted to not use .env so it is possible to create custom objects, arrays and logic here.
// You can modify, create or delete any property you want.

const wallColors = ["#4D4577", "#393359"];
const highlightColor = "#F73C7B";

const randomItem = (array) => array[Math.floor(Math.random() * array.length)];

const getWallColor = (options = {}) => ({
  background: options.isHighlighted
    ? highlightColor
    : randomItem(wallColors),
  color: "#FFFFFF",
})

module.exports = {
  user: "nick-gabe",
  started: "9/10/2020",
  repoQuantity: 6,
  skillswall: {
    style: "for-the-badge",
    randomOrder: true,
    // By default, skills are not highlighted and their logo is their name,
    // but you can customize them here.
    skills: [
      {
        name: "JavaScript",
        ...getWallColor({ isHighlighted: true })
      },
      {
        name: "HTML5",
        ...getWallColor()
      },
      {
        name: "Markdown",
        ...getWallColor()
      },
      {
        name: "CSS3",
        ...getWallColor({ isHighlighted: true })
      },
      {
        name: "Python",
        ...getWallColor()
      },
      {
        name: "Shell Script",
        logo: "gnu-bash",
        ...getWallColor()
      },
      {
        name: "React",
        ...getWallColor({ isHighlighted: true })
      },
      {
        name: "React Native",
        logo: "react",
        ...getWallColor()
      },
      {
        name: "jQuery",
        ...getWallColor()
      },
      {
        name: "SASS",
        ...getWallColor()
      },
      {
        name: "Ant-Design",
        ...getWallColor({ isHighlighted: true })
      },
      {
        name: "GraphQL",
        ...getWallColor()
      },
      {
        name: "Chakra",
        logo: "chakraui",
        ...getWallColor()
      },
      {
        name: "Bootstrap",
        ...getWallColor()
      },
      {
        name: "Node.JS",
        ...getWallColor({ isHighlighted: true })
      },
      {
        name: "Jest",
        ...getWallColor()
      },
      {
        name: "Strapi",
        ...getWallColor()
      },
      {
        name: "Express.js",
        logo: "express",
        ...getWallColor()
      },
      {
        name: "FastAPI",
        ...getWallColor({ isHighlighted: true })
      },
      {
        name: "Flask",
        ...getWallColor()
      },
      {
        name: "Styled Components",
        ...getWallColor()
      },
      {
        name: "TailwindCSS",
        ...getWallColor({ isHighlighted: true })
      },
      {
        name: "Firebase",
        ...getWallColor()
      },
      {
        name: "MongoDB",
        ...getWallColor()
      },
      {
        name: "SQLite",
        ...getWallColor()
      },
      {
        name: "TypeScript",
        ...getWallColor({ isHighlighted: true })
      },
      {
        name: "Netlify",
        ...getWallColor()
      },
      {
        name: "Vercel",
        ...getWallColor()
      },
      {
        name: "Heroku",
        ...getWallColor()
      },
      {
        name: "Github Pages",
        logo: "github",
        ...getWallColor()
      },
      {
        name: "Photoshop",
        logo: "adobe-photoshop",
        ...getWallColor()
      },
      {
        name: "Figma",
        ...getWallColor()
      },
      {
        name: "Storybook",
        ...getWallColor()
      },
      {
        name: "NPM",
        ...getWallColor()
      },
      {
        name: "Git",
        ...getWallColor({ isHighlighted: true })
      },
      {
        name: "GitHub",
        ...getWallColor()
      },
      {
        name: "Visual Studio Code",
        ...getWallColor()
      },
      {
        name: "Docker",
        ...getWallColor({ isHighlighted: true })
      },
      {
        name: "Jira",
        ...getWallColor()
      },
      {
        name: "GitHub Actions",
        ...getWallColor({ isHighlighted: true })
      },
    ]
  }
}
