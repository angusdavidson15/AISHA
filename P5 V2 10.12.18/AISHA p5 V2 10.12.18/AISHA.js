var ecclipseY = 150;
var value = 0; //storing int for startMenu
var startInt = 0; //int for startMenu
var homePageInt = 0; //int for homePage
var input, button;



function setup() {
    var displayWidth = 800;
    var displayHeight = 600;

    var centerX = createCanvas(displayWidth, displayHeight);
    startInt = 1;
    
}

function draw() {
    
    startMenu();
    
   if (startInt === 1){
            startMenu();
            value = 255;
        }
    
    if(homePageInt === 1){
            secondScreen();
           // value = 0;
        }
    
    fill(0);
    rect(25, 25, 50, 50);

}

function startMenu() {
    background(1, 150, 200);
    textSize(50);
    text('Welcome to AISHA', 200, 300);
    textSize(20);
    //var startBtn = document.getElementById('startBtn');
}

function update(){
    
}

function mousePressed(){
    if (value === 255) {
    startInt = 0;
    homePageInt = 1;
  }
    if (value === 0){
            homePageInt = 0;
            startInt = 1;
        }
}


function secondScreen() {
    background(1, 150, 200);
    textSize(50);
    text('AISHA', 300, 60);
       
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
    
    input = createInput();
    input.position(350, 300);
    
     button = createButton('submit');
     button.position(input.x + input.width, 300);
     button.mousePressed(value = 255);
}