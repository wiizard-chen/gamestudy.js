var Ball = function () {
    var img = imageFromPath('ball2.png', 30, 30)
    //var img = new Image(30,30)
    //img.src = 'ball2.png'
    var o = {
        image: img,
        x: 200,
        y: 215,
        time: 0,
        speedX: 3,
        speedY: 6,
        fired: false,
        alive: true,
    }

    o.fire = function () {
        o.fired = true
    }

    o.move = function (){
        if (o.fired) {
            // log('move')
            if (o.x < 0 || o.x > 400 - o.image.width) {
                o.speedX = -o.speedX
            }
            if (o.y < 0  ) {
                o.speedY = -o.speedY
            }
            // move
            o.x += o.speedX
            o.y += o.speedY
            if (o.y > 300)
                o.alive = false
        }
    }

    o.speedChange = function (num) {
        o.speedY *= -1
        if(num==1)
            o.y -=10        
    }
    return o
}