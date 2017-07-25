var Wgame = function (fps) {
    var g = {
        actions: {},
        keydowns: {},
    }
    var canvas = document.querySelector("#id-canvas")
    var context = canvas.getContext('2d')
    g.canvas = canvas
    g.context = context
    g.drawImage = function (object) {
        var img = object.image
        g.context.drawImage(img, object.x, object.y, img.width, img.height)
    }

    window.addEventListener('keydown', function (event) {
        g.keydowns[event.key] = true
    })
    window.addEventListener('keyup', function (event) {
        g.keydowns[event.key] = false
    })

    g.registerAction = function (key, callback) {
        g.actions[key] = callback
    }

    var runloop = function () {
        var fps = window.fps
        var actions = Object.keys(g.actions)
        for (var index = 0; index < actions.length; index++) {
            var element = actions[index];
            if (g.keydowns[element]) {
                g.actions[element]()
            }
        }
        g.update()
        context.clearRect(0, 0, canvas.width, canvas.height)
        g.draw()

        setTimeout(function () {
            runloop()
        }, 1000 / fps);
    }

    setTimeout(function () {
        runloop()
    }, 1000 / fps)
    return g
}