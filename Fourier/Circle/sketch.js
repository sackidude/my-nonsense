let time = 0;
let wave = [];
let slider;
let oldSlide;

function setup() {
    slider = document.getElementById('amount-slider');
    oldSlide = slider.value;
    canvas = createCanvas(600, 400);

    canvas.parent("sketch-holder");

    ellipseMode(RADIUS);
}

function draw() {
    background(0);
    translate(200, 200);

    if (oldSlide != slider.value) {
        wave.splice(0, wave.length);
        oldSlide = slider.value;
    }

    let x = 0;
    let y = 0;
    fill(255)
    ellipse(0,0, 2)

    for (let i = 0; i < slider.value; i++) {
        let prevX = x;
        let prevY = y
  
        let n = i * 2 + 1;
        let radius = 75 * (4 / (n * PI));
        x += radius * cos(n * time);
        y += radius * sin(n * time);
        stroke(125);
        noFill();
        ellipse(prevX, prevY, radius);

        stroke(255)
        fill(255);
        line(prevX, prevY, x, y);
        ellipse(x, y, 2);
    }

    wave.unshift(y);
    strokeWeight(1.5);
    stroke(255, 0, 0)
    line(x, y, 150, y)

    push();
    noFill()
    stroke(255)
    strokeWeight(1);
    beginShape();
    
    for (let i = 0; i < wave.length; i++) {
        vertex(i + 150, wave[i]);
    }

    endShape()

    if(wave.length > 250){
        wave.pop();
    }

    time += 0.030;
}