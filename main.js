const markTentative = e => {
  e.textContent = e.textContent.slice(0, -1).trim()

  const el = e.parentElement.parentElement.parentElement
  el.style.fontSize = 'xx-small'

  const color =
    el.style.backgroundColor ||
    el.firstElementChild.firstElementChild.style.borderColor

  e.style.color = tinycolor(color)
    .complement()
    .toHexString()
}

setInterval(() => {
  document
    .querySelectorAll('div[role=gridcell] div > span > span > html-blob')
    .forEach(e => {
      if (e.textContent.endsWith('?')) markTentative(e)
    })
}, 1000)
