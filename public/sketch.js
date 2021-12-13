let clientSocket;

clientSocket.on("connect", newConnection);
clientSocket.on("mouseBroadcast", newBroadcast);

function preload() {
  clientSocket = io();
}

function newConnection() {
  console.log("Your id: ", clientSocket.id);
}

function newBroadcast(data) {
  console.log(data);
  fill("red");
  circle(data.x, data.y, 10);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}

function draw() {
  fill("yellow");
  circle(mouseX, mouseY, 40);
}

function mouseMoved() {
  let message = {
    x: mouseX,
    y: mouseY,
  };

  clientSocket.emit("mouse", message);
}
