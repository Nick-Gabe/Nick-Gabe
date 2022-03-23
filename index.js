const { default: axios } = require('axios')
const fs = require('fs')
const generateFollowerImage = require('./image')

function calculateDate() {
    const past = new Date(2020, 10, 9).getTime()
    const now = new Date().getTime()

    let time_elapsed = Math.floor((now - past) / 1000)
    let years = Math.floor(time_elapsed / 31536000)
    let months = Math.floor((time_elapsed % 31536000) / 2628000)
    let days = Math.floor((time_elapsed % 31536000 % 2628000) / 86400)

    let dayplural
    days === 1 ? dayplural = '' : dayplural = 's'
    let monthplural
    months === 1 ? monthplural = '' : monthplural = 's'
    let yearPlural
    years === 1 ? yearPlural = '' : yearPlural = 's'

    return `${years} Year${yearPlural}, ${months} Month${monthplural} and ${days} Day${dayplural} of experience`
}

async function updateREADME(user) {

    async function getData(url) {
        const response = await axios.get(url, { 'user-agent': 'node.js' })
        return response?.data
    }

    async function getRecentRepos(quantity) {
        const repos = await getData(`https://api.github.com/users/${user}/repos`)

        const getRecents = (a, b) => new Date(a.updated_at) >= new Date(b.updated_at) ? -1 : 1
        const formatJson = elem => `<a href="${elem.html_url}"><img height=100 src="https://github-readme-stats.vercel.app/api/pin/?username=${user}&repo=${encodeURIComponent(elem.name)}&theme=moltack&border_radius=20"/></a>`

        return repos.sort(getRecents).map(formatJson).slice(0, quantity).join('\n')
    }

    async function drawFollower() {
        const followers = await getData(`https://api.github.com/users/${user}/followers`)

        const randomFollowerIndex = Math.floor(Math.random() * followers.length)
        const selectedFollower = await getData(followers[randomFollowerIndex]?.url)

        return selectedFollower
    }

    const selectedFollower = await drawFollower()
    generateFollowerImage(selectedFollower)

    fs.readFile('README_TEMPLATE.md', 'utf-8', async (err, data) => {
        if (err) {
            throw err;
        }

        const repoSection = await getRecentRepos(6)

        const followerHtml = `<a href="${selectedFollower.html_url}"><img style="max-height:150px;" src=./resources/images/followerOfTheDay.png alt="Follower of the day"/></a>`

        const updatedMd = data
            .replace(
                /%{recentworks}/gm,
                repoSection
            )
            .replace(
                /%{myexperience}/gm,
                calculateDate()
            )
            .replace(
                /%{followerOfTheDay}/gm,
                followerHtml
            );

        fs.writeFile('README.md', updatedMd, 'utf-8', (err) => {
            if (err) {
                throw err;
            }
            console.log('README update complete.');
        });
    });
}

updateREADME('nick-gabe')