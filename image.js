const Jimp = require('jimp')
const dateStringifier = require('date-stringifier')

module.exports = async function (info) {
    const avatar = await Jimp.read(info.avatar_url)
    const avatarmask = await Jimp.read('resources/images/levelMask.png')
    avatar.resize(269, 269)
    avatar.mask(avatarmask, 0, 0)

    const base = await Jimp.read('resources/images/CoderBase.png')
    const textFont = await Jimp.loadFont('resources/fonts/Coder30.fnt')
    const titleFont = await Jimp.loadFont('resources/fonts/Coder48.fnt')
    const dateFont = await Jimp.loadFont('resources/fonts/Coder18.fnt')
    const formattedDate = dateStringifier(new Date(info.created_at), `Joined {DD}/{MM}/{yy}`)

    base
        .composite(avatar, 18, 16)
        .print(textFont, 440, 123, info.public_repos)
        .print(textFont, 510, 159, info.followers)
        .print(dateFont, 670, 220, formattedDate)

        .print(titleFont, 430, 33, info.login)

    await base.writeAsync(`resources/images/followerOfTheDay.png`)
}