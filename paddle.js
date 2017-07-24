var Paddle = function () {
        var img = imageFromPath('paddle.png')
        var o = {
            image: img,
            x: 130,
            y: 250,
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
            else if (x > 400 - o.image.width)
                x = 400 - o.image.width
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