const fs = require('fs');
const replacers = fs
  .readdirSync('./src/replacers')
  .filter(file => file.endsWith('js'))
  .reduce((acc, cur) => {
    acc[cur.slice(0, -3)] = require('./src/replacers/' + cur)
    return acc
  }, {});

(async function updateREADME(user = process.env.user) {
  fs.readFile('README_TEMPLATE.md', 'utf-8', async (err, data) => {
    if (err) {
      throw err;
    }

    const replacementRegex = new RegExp(`%{(${Object.keys(replacers).join('|')})}`, 'gm');

    async function replaceAsync(str, regex, asyncFn) {
      const promises = [];
      str.replace(regex, (match, ...args) => {
        const promise = asyncFn(match, ...args);
        promises.push(promise);
      });
      const data = await Promise.all(promises);
      return str.replace(regex, () => data.shift());
    }

    const updatedMd = await replaceAsync(data, replacementRegex, async (e) => {
      return await replacers[e.slice(2, -1)](user);
    });

    fs.writeFile('README.md', updatedMd, 'utf-8', (err) => {
      if (err) {
        throw err;
      }
      console.log('README update complete.');
    });
  });
})();
