var tabs = require("sdk/tabs")
var wsWorker = require("sdk/page-worker").Page({
  contentScriptFile: require("sdk/self").data.url('../ws.js')
})
tabs.on('ready', function (tab) {
  var worker = tab.attach({
    contentScriptFile: '../content.js'
  })
  worker.port.on('call', function () {
    wsWorker.port.emit('send', '')
    wsWorker.port.once('res', function(text){
      worker.port.emit('res', text)
    })
  })
})
