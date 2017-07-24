var Block = function(position){
    var p = position
    var image = imageFromPath('PNG/block.jpg',50,50)
    var o = {
        image : image,
        x:p[0],
        y:p[1],
        w:50,
        h:50,
        alive:true,
        lifes:p[2]||1,
    }
    o.kill = function(){
        o.lifes --
        if(o.lifes < 1){
            o.alive =false
        }
    }
    o.collide = function(b){
        return o.alive && (rectIntersects(o,b) || rectIntersects(b,o))
    }
    return o
}
