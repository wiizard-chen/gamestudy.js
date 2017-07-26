var Ball = function () {
  var img = imageFromPath("PNG/ball.png", 30, 30)
  var canvas = document.querySelector("#id-canvas")
  var o = {
    image: img,
    x: canvas.width / 2,
    y: canvas.height * 0.9 - img.height,
    time: 0,
    speedX: 3,
    speedY: 6,
    fired: false,
    alive: true
  }

  o.fire = function () {
    o.fired = true
  }

  o.move = function () {
    if (o.fired) {
      //log('move')
      if (o.x < 0 || o.x > canvas.width - o.image.width) {
        o.speedX = -o.speedX
      }
      if (o.y < 0) {
        o.speedY = -o.speedY
        o.y = 0
      }
      // move
      o.x += o.speedX
      o.y += o.speedY
      if (o.y > canvas.height) o.alive = false
    }
  }

  o.hasPoint = function (x, y) {
    var xIn = x >= o.x && x <= o.x + o.image.width
    var yIn = y >= o.y && y <= o.y + o.image.height
    return xIn && yIn
  }

  o.speedChange = function () {
    o.speedY *= -1
    o.y += 4 * o.speedY
    // if (num == 1) o.y -= 10
    // else o.y += 4 * o.speedY
  }
  return o
} 
