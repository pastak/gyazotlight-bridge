var tabs = require("sdk/tabs")
tabs.on('ready', function (tab) {
  var worker = tab.attach({
    contentScriptFile: '../content.js'
  })
})
