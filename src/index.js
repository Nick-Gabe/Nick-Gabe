const fs = require('fs');
const data = require('./data.js');

const replacers = fs
  .readdirSync('./src/replacers')
  .filter((file) => file.endsWith('js'))
  .reduce((acc, cur) => {
    acc[cur.slice(0, -3)] = require('./replacers/' + cur);
    return acc;
  }, {});

(async function updateREADME() {
  fs.readFile('README_TEMPLATE.md', 'utf-8', async (err, content) => {
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

    const updatedMd = await replaceAsync(content, replacementRegex, async (e) => {
      return await replacers[e.slice(2, -1)](data);
    });

    fs.writeFile('README.md', updatedMd, 'utf-8', (err) => {
      if (err) {
        throw err;
      }
      console.log('README update complete.');
    });
  });
})();
