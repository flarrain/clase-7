function setup() {
  canvas = createCanvas(windowWidth, windowHeight * 0.8);
  canvas.parent('top');
  canvas.position(0, 0);
  canvas.style('z-index', '-1');//
  noLoop();//para que no se dibuje más veces.
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight * 0.8);
}

function draw() {
  var palabra = "cucarachas";
  fill(255);//color que tienen las letras o los
  //elementos (si se indica un solo valor entonces es el mismo en los tres según RGB)
  background(237,34,93);
  textSize(50);
  textAlign(CENTER);
  text(palabra.length, width / 2, height / 2);
}
