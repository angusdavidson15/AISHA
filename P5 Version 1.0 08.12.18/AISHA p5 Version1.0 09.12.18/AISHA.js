var ecclipseY = 150;
var state = 1;

var button = document.getElementById("Show-more");


function setup() {
    var displayWidth = 800;
    var displayHeight = 600;

    var centerX =
        createCanvas(displayWidth, displayHeight);
}

function draw() {
    startMenu();

}

function startMenu() {
    background(1, 150, 200);
    textSize(50);
    text('Welcome to AISHA', 200, 300);
    textSize(20);
    //var startBtn = document.getElementById('startBtn');
}

function secondScreen() {
    background(1, 150, 200);
    textSize(50);
    text('AISHA', 300, 60);

    if (mouseIsPressed === true) {
        textSize(20);
        text('Mouse click working', 300, 300);
    }

    //strokeWeight(2); /*Stroke weight for all shapes */    

    //Circle 1
    fill(50, 50, 50);
    strokeWeight(2);
    stroke(10);
    /* x,y,shape width,shape height */
    ellipse(150, 150, 100, 100);

    //Circle 2
    fill(50, 50, 50);
    strokeWeight(2);
    stroke(10);
    ellipse(300, 150, 100, 100);


    //Circle 3
    fill(50, 50, 50);
    strokeWeight(2);
    stroke(10);
    ellipse(450, 150, 100, 100);

    //Circle 4
    fill(50, 50, 50);
    strokeWeight(2);
    stroke(10);
    ellipse(600, 150, 100, 100);

    var centerX = (displayWidth / 2);

    //places frame rate in bottom right corner
    var fps = parseInt(frameRate(), 10);
    textSize(20);
    text('frameRate: ' + fps, 10, 590);
}