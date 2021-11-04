function setup() {
    let c = createCanvas(innerWidth, innerHeight);
    c.parent("sketch-parent");
}

function draw() {
    background(255);

    stroke(205, 100, 100);
    strokeWeight(5);
    line(0, 0, mouseX, mouseY);
    line(width, 0, mouseX, mouseY);
    line(width, height, mouseX, mouseY);
    line(0, height, mouseX, mouseY);
}

function windowResized() {
    resizeCanvas(innerWidth, innerHeight);
}