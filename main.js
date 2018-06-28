const markTentative = e => {
  e.textContent = e.textContent.slice(1).trim()

  const el = e.parentElement.parentElement.parentElement
  el.style.fontSize = 'xx-small'

  const color =
    el.style.backgroundColor ||
    el.firstElementChild.firstElementChild.style.borderColor

  const complement = tinycolor(color)
    .complement()
    .toHexString()

  e.style.color = complement
}

setInterval(() => {
  document
    .querySelectorAll('div[role=gridcell] div > span > span > html-blob')
    .forEach(e => {
      if (e.textContent.startsWith('?')) {
        markTentative(e)
      }
    })
}, 1000)
