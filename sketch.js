//  PARAMETRI
let parti = 100; // 将画面分为几部分
let parola = "EMOLAND"; // 要显示的文本内容

// ASSET
let font;

function preload() {
  font = loadFont("./assets/OLDENGL.TTF");
}

// CODICE

let cam;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // WEBGL激活3d效果，是一个在网页中绘制 3D 图形和 2D 图形 的技术
  textFont(font);
  fill("blue");
  textAlign(CENTER);
  let h_parti = height / parti;
  textSize(h_parti);

  cam = createCamera();
  cam.setPosition(800, 0, 800);
  cam.lookAt(0, 0, 0);
}

function draw() {
  background("black");

  orbitControl(); //它使你可以通过 鼠标拖动来自由地旋转观察 3D 场景.和滚轮拖动
  let h_parti = height / parti;
  //rect(0, 0, width, h_parti);
  translate(0, -height / 2);

  for (let i = 0; i < parti; i++) {
    push();
    let z = map(cos(frameCount / 100 + i * 1), -1, 1, -100, 100);
    let x = map(cos(frameCount / 100 + i * 1), -1, 1, -200, 200);
    let y = map(cos(frameCount / 100 + i * 1), -1, 1, -300, 300);
    translate(x, y, z);
    let y_parte = i * h_parti;
    let y_parola = y_parte + h_parti - textDescent(); //textDecent 是文字基线以下的高度
    text(parola, 0, y_parola);
    pop();
  }
}
