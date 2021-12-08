let offset = [0, 0]

function allowDrop(ev) {
  var t = ev.target;
  while (t !== null && !t.classList.contains("target")) {
    t = t.parentNode;
  }
  if (t && t.childNodes.length > 0) {
    return false;
  }
  ev.preventDefault()
}

function drag(ev) {
  ev.dataTransfer.setData('dragID', ev.target.id)
  offset = [
    ev.target.offsetLeft - ev.clientX,
    ev.target.offsetTop - ev.clientY
  ]
}

function drop(ev) {
  ev.preventDefault()
  const data = ev.dataTransfer.getData('dragID')
  ev.target.appendChild(document.getElementById(data))
}