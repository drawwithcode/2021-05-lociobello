let clientSocket = io();

clientSocket.on("connect", newConnection);
clientSocket.on("mouseBroadcast", newBroadcast);

function newConnection() {
  console.log("Your id: ", clientSocket.id);
}

// esegui questa funzione con i dati ricevuti
function newBroadcast(data) {
  console.log(data);
  // fill("red");
  // circle(data.x, data.y, 10);
  stroke("red");
  strokeWeight(8);
  line(data.x, data.y, data.px, data.py);
}

let gioconda;

function preload() {
  gioconda = loadImage("assets/gioconda.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textSize(37);
  image(gioconda, 0, 0);
  fill(255);
  text("Let's vandalize the Mona Lisa toghether!", 10, 40);
}

function draw() {
  stroke(0);
  strokeWeight(8);

  //disegna tenendo premuto
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

//la funzione mouseDragged contiene la posizione del mouse quando è premuto il click e viene usata come messaggio da mandare al server
function mouseDragged() {
  let message = {
    x: mouseX,
    y: mouseY,
    px: pmouseX,
    py: pmouseY,
  };

  clientSocket.emit("mouse", message);
}
