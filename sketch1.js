const minLineWidth = 0;
const maxLineWidth = 400;
let lineWidthChange = 10;
let c1, c2;

function setup() {
  createCanvas(windowWidth,windowHeight);
  c1 = color(255);
  c2 = color(63, 191, 191);
  
  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);
  }
  
  frameRate(3);
  strokeWeight(1);
  stroke(1); 
  
}

function draw() {
  //background(32);

  let lineWidth = random(minLineWidth, maxLineWidth);
  for(let lineY = 0; lineY < height; lineY++){
    lineWidth += random(-lineWidthChange, lineWidthChange);
    lineWidth = constrain(lineWidth, minLineWidth, maxLineWidth);

    line(width / 2 - lineWidth, lineY, width / 2 + lineWidth, lineY);
  }
}
