var insert = require('./insert')

module.exports = function(text) {
  var data = JSON.parse(text)
  var url = data.url
  var imageUrl = data.imageUrl
  var host = location.host
  var target = document.activeElement
  var text = url
  if (host === 'github.com' && target.tagName === 'TEXTAREA') {
    // On Github <textarea>, It will insert Markdown
    text = `[![](${imageUrl})](${url})`
  }
  insert(text, target)
}
