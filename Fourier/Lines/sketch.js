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
    translate(50, 200);

    if (oldSlide != slider.value) {
        wave.splice(0, wave.length);
        oldSlide = slider.value;
    }

    let y = 0;

    for (let i = 0; i < slider.value; i++) {
        let prevY = y;
  
        let n = i * 2 + 1;
        y += ((4 * sin(n * time))/(n*PI))*100;

        strokeWeight(3);
        line(i*15, prevY, i*15, y)
    }

    wave.unshift(y);
    strokeWeight(1.5);
    stroke(255, 0, 0)
    line((slider.value-1) * 15, y, 150, y)

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

    time += 0.02;
}