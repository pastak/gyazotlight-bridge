module.exports = function (sValue, sField) {
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
