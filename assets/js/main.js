window.addEventListener('load', function () {
  const links = document.getElementsByClassName('download-button')
  for (const link of links) {
    link.addEventListener('click', function () {
      window.open('https://github.com/shoya140/scrapspace/releases', '_blank')
    })
  }
})