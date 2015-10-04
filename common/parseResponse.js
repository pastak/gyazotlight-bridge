var insert = require('./insert')
var whiteList = require('./whitelist.json')

module.exports = function(text) {
  var data = JSON.parse(text)
  var url = data.url
  var imageUrl = data.imageUrl
  var href = location.href
  var target = document.activeElement
  var text = url

  var siteInfo = whiteList.filter(function (info) {
    return href.match(info.match) && target.matches(info.selector)
  })[0]
  if (siteInfo) {
    switch (siteInfo.type) {
      case 'markdown':
        text = `[![](${imageUrl})](${url})`
        break
      case 'html':
        text = `<a href='${url}' target='_blank'><img src='${imageUrl}' /></a>`
    }
  }
  insert(text, target)
}
