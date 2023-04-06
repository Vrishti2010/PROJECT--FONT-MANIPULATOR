leftWristX = 0;
rightWristX = 0;
difference = 0;


function setup(){
video = createCapture(VIDEO);
video.size(550,500);
canvas = createCanvas(550,500);
canvas.position(650,100);
poseNet = ml5.poseNet(video, model_loaded);
poseNet.on('pose', got_poses);
}

function model_loaded(){
    console.log('posenet is intializing');
}

function got_poses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = "+ leftWristX + "rightWristX"+ rightWristX + "difference = "+ difference);
    
    }
    }

function draw(){

    background('#ffff99');
    textSize(difference);
    fill('#0000cc');
    text("Vrishti", 50, 400);
}

