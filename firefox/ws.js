
self.port.on('send', function() {
  var ws = new WebSocket('ws://localhost:3652/')
  ws.onmessage = function (event) {
    self.port.emit('res', event.data)
    ws.close()
  }
  ws.onopen = function () {
    console.log('Open!')
    ws.send('open')
    console.log('Send!')
  }
})
