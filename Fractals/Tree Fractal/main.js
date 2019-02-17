var iter = 100;
var slider;

function setup() {
    var cnv = createCanvas(640, 400);
    cnv.parent("canvas-holder");
    slider = document.getElementById("slider");
}

function draw() {
    background(0);
    translate(width/2, height-10);
    
    branch(iter);
}

function branch(len){
    stroke(125, 75, 0);
    strokeWeight(2);
    if(len<5&&len>0){
        stroke(50, 200, 0);
        strokeWeight(3);
    }
    
    line(0, 0, 0, -len);
    translate(0, -len);
    let angle = slider.value;
    if(len>4){
        push();
        rotate(angle)
        branch(len*.67);
        pop();
        push();
        rotate(-angle);
        branch(len*.67);
        pop();
    }
}