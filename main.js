chrome.runtime.onMessage.addListener(function (message,sender,res) {
  var ws = new WebSocket('ws://localhost:3652/')
  ws.onmessage = function (event) {
    console.log(event)
    res(event.data)
    ws.close()
  }
  ws.onopen = function () {
    console.log('Open!')
    ws.send('open')
    console.log('Send!')
  }
  return true
})
