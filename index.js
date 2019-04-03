function getFirstSelector(selector) {
  return document.querySelector('selector')
}

function nestedTarget() {
  return document.querySelector('div#nested div.target')
}

function increaseRankBy(n) {
  var lis = document.getElementById('app').querySelectorAll('div#ranked-list li')

  for(let i = 0; i<lis.length; i++) {
    let temp = parseInt(lis[i]) + n
    lis[i] = temp
  }
}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div')
}
