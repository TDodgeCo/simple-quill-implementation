var saveButton = document.getElementById('saveButton')
var content = document.getElementById('content')

saveButton.addEventListener('click', function () {
  var editorContent = quill.root.innerHTML
  content.innerHTML = editorContent
})
