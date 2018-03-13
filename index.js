/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Szymon M Sasin @assassyn
*/
module.exports = function(source) {
  let result = source.replace(/^\s+|\s+$/g, '')
  result += '\r\n'

  return result;
}
