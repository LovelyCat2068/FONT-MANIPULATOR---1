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
    console.log(result);
}