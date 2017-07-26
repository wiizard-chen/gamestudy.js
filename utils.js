var log = console.log.bind(console)

// var log = function (str) {
//   var text = document.querySelector('#id-input-text')
//   text.value +='\n' + str
// }

var imageFromPath = function (path, width, height) {
  var img = new Image(width, height)
  img.src = path
  return img
}

var rectIntersects = function (a, b) {
  //轴对称包围盒（Axis-Aligned Bounding Box） 原理是区间判断，高中水平数学
  var x1 = a.x < b.x + b.image.width
  var x2 = a.x + a.image.width > b.x
  var y1 = a.y < b.y + b.image.height 
  var y2 =  a.image.height + a.y > b.y
  return x1 && x2  && y1 && y2
}
