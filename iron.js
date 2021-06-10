class Iron {
    constructor(x, y, width, height,) {
        var options = {
            'density': 30,
            'friction': 3,
            'restitution': 0.8
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
   

  
        rectMode(CENTER);
        stroke('black');
        fill('red');
        rect(pos.x, pos.y, this.width, this.height);

        
    }
};