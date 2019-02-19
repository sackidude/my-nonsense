let radiusH = 80;
let cnv;

function setup() {
  cnv = createCanvas(400, 400);
  cnv.parent("sketch-holder");
}

function draw() {
  background(100);
  translate(width/2, height/2);
  let posHour = drawThin(radiusH, map(hour(), 0, 23, 0, TWO_PI)*2-HALF_PI, 0, 0, color(255, 0, 0));
	let posMinute = drawThin(radiusH/3*2, map(minute(), 0, 59, 0, TWO_PI)-HALF_PI, posHour.x, posHour.y, color(0, 0, 255));
	let posSecond = drawThin(radiusH/3, map(second(), 0, 59, 0, TWO_PI)-HALF_PI, posMinute.x, posMinute.y, color(0, 255, 0));
}

function drawThin(r, angle, orginX, orginY, col){
  let x = r * cos(angle) + orginX;
  let y = r * sin(angle) + orginY;
  stroke(col);
  strokeWeight(4);
  noFill();
  line(orginX, orginY, x, y);
  return {x:x,y:y};
}