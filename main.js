var enableDebugMode = function (enable) {
    if (!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function (event) {
        var k = event.key
        if (k == 'p') {
            // 暂停功能
            window.paused = !window.paused
        } else if ('1234567'.includes(k)) {
            // 为了 debug 临时加的载入关卡功能
            blocks = loadLevel(Number(k))
        }
    })
    // 控制速度
    document.querySelector('#id-input-speed').addEventListener('input', function (event) {
        var input = event.target
        // log(event, input.value)
        window.fps = Number(input.value)
    })
}


var __main = function () {
    enableDebugMode(true)


    window.fps = 60
    var images = {
        ball: {
            name: "PNG/ball.png",
            width: 30,
            height: 30,
        }
    }
    var game = Wgame(window.fps, images)


    var score = 0
    var paddle = Paddle()
    var ball = Ball()

    blocks = loadLevel(4)

    game.registerAction('a', function () {
        paddle.moveleft()
    })

    game.registerAction('d', function () {
        paddle.moveright()
    })

    game.registerAction('f', function () {
        ball.fire()
    })

    var enableDrag = false

    game.canvas.addEventListener('mousedown', function (event) {
        var x = event.offsetX
        var y = event.offsetY
        // log(x, y, event)
        //检查是否点中了 ball
        if (ball.hasPoint(x, y)) {
            // 设置拖拽状态
            log(x, y, 'down')
            enableDrag = true
        }
    })

    game.canvas.addEventListener('mousemove', function (event) {
        var x = event.offsetX
        var y = event.offsetY
        if (enableDrag) {
            log(x, y, 'move')
            ball.x = x
            ball.y = y
        }

    })

    game.canvas.addEventListener('mouseup', function (event) {
        var x = event.offsetX
        var y = event.offsetY
        if (enableDrag) {
            enableDrag = false
            log(x, y, 'up')
        }
    })


    game.draw = function () {
        game.drawImage(paddle)
        if (ball.alive)
            game.drawImage(ball)

        //draw blocks
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i]
            if (block.alive) {
                game.drawImage(block)
            }
        }
        game.context.fillText('Score : ' + score, 500, 50)
    }

    game.update = function () {
        if (window.paused)
            return
        ball.move()
        if (ball.fired && paddle.collide(ball)) {
            ball.speedChange()
        }
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i]
            if (block.collide(ball)) {
                block.kill()
                ball.speedChange()

                //增加分数
                score += 100
            }
        }
    }
}
__main()