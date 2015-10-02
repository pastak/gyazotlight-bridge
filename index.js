(function () {
  function insert (sValue, sField) {
    if (sField.selectionStart || sField.selectionStart == '0') {
      var nStart = sField.selectionStart
      var nEnd = sField.selectionEnd

      sField.value = sField.value.substring(0, nStart) + sValue + sField.value.substring(nEnd, sField.value.length)
      sField.selectionStart = nStart + sValue.length
      sField.selectionEnd = nStart + sValue.length
    } else {
      sField.value += sValue
    }
  }
  document.addEventListener('keyup', function(event){
    // Ctrl + Shift + I
    if (!(event.keyCode === 73 && event.ctrlKey && event.shiftKey)) return
    chrome.runtime.sendMessage(null, {name: 'call'}, function(text) {
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
    })
  })
})()
