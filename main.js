function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    video= createCapture(VIDEO);

    pumpkin=ml5.poseNet(video, modelloaded);
    pumpkin.on('pose', cake);
}

function modelloaded(){
    console.log("HP-RTH");
}

function cake(result){
    if(result.length > 0){
        console.log(result);
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
        rightwristX = result[0].pose.rightWrist.x;
        leftwristX = result[0].pose.leftWrist.x;
        difference = floor(leftwristX - rightwristX);
        }
}

function draw(){
    background('#32a852');
    textsize(difference);
    fill('#ebb734');
    text('Advika', 20, 100);
}