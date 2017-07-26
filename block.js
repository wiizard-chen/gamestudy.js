var Block = function (position) {
    var p = position
    var image = imageFromPath('PNG/block.jpg', 50, 50)
    var o = {
        image: image,
        x: p[0],
        y: p[1],
        w: 50,
        h: 50,
        alive: true,
        lives: p[2] || 1,
    }
    o.kill = function () {
        o.lives--
        if (o.lives < 1) {
            o.alive = false
        }
    }
    o.collide = function (b) {
        return o.alive && rectIntersects(o,b)
    }
    return o
}

var loadLevel = function (n) {
    n = n - 1
    var level

    if (n >= levels.length) {
        level = levels[levels.length - 1]
    } else {
        level = levels[n]
    }

    var blocks = []
    for (var i = 0; i < level.length; i++) {
        var p = level[i]
        var b = Block(p)
        blocks.push(b)
    }
    return blocks
}