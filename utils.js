var log = console.log.bind(console)

var imageFromPath = function (path, width, height) {
    var img = new Image(width, height)
    img.src = path
    return img
}

var rectIntersects = function(a,b){
    if(b.y > a.y && b.y < (a.y + a.image.height)){
        if(b.x > a.x && (b.x < a.x + a.image.width)){
            return true
        } else if (b.x + b.image.width > a.x && b.x + b.image.width < a.x + a.image.width){
            return true
        }

    }
    return false
}