var Paddle = function () {
    var img = imageFromPath('PNG/paddle.png',180,35)
    var canvas = document.querySelector("#id-canvas")
    var o = {
        image: img,
        x: (canvas.width - img.width) / 2,
        y: canvas.height * 0.9,
        speed: 15,
    }
    var paddle = o
    o.moveleft = function () {
        o.move(paddle.x - paddle.speed)
    }
    o.moveright = function () {
        o.move(paddle.x + paddle.speed)
    }

    o.move = function (x) {
        if (x < 0)
            x = 0
        else if (x > canvas.width - o.image.width)
            x = canvas.width - o.image.width
        o.x = x
    }

    o.collide = function (ball) {
        var ballheight = ball.y + ball.image.height - Math.abs(o.y)
        var ballheight2 = ball.y + ball.image.height - Math.abs(o.y) - o.image.height
        if (ballheight >= 0 && ballheight2 <= 0) {
            var ballWidth = ball.x + ball.image.width - Math.abs(o.x)
            var ballWidth2 = ball.x - Math.abs(o.x) - o.image.width
            if (ballWidth >= 0 && ballWidth2 <= 0) {
                return true
            }
        }
        return false
    }
    return o
}