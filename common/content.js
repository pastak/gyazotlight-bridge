var parseResponse = require('./parseResponse')
document.addEventListener('keydown', function(event){
  // Ctrl + Shift + I
  if (!(event.keyCode === 73 && event.ctrlKey && event.shiftKey)) return
  var ws = new WebSocket('ws://localhost:3652/')
  ws.onmessage = function (event) {
    parseResponse(event.data)
    ws.close(1000)
  }
  ws.onopen = function () {
    ws.send('open')
  }
})
