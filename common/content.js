var parseResponse = require('./parseResponse')
document.addEventListener('keydown', function(event){
  // Ctrl + Shift + I
  if (!(event.keyCode === 73 && event.ctrlKey && event.shiftKey)) return
  if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.sendMessage) {
    chrome.runtime.sendMessage(null, {name: 'call'}, function(text) {
      parseResponse(text)
    })
  } else {
    self.port.emit('call','')
    self.port.once('res', function(text) {
      parseResponse(text)
    })
  }

})
