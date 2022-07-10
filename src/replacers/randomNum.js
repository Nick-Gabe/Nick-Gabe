/* 
  Here you can create your customized replacements
  As an example, I'll create a Replacer that replaces %{randomNum}
  in the README by a random number between 0 and 1000.

  The file name will be the term it will look to replace
*/

// You just need to create a function
// and return the data you will use to replace
module.exports = function (username) {
  return Math.random() * 1000;
}
