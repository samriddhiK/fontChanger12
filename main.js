noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550)
    canvas.position;

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    background('#82c5c5');
    document.getElementById("square_side"),innerHTML = "Width And Height of a Word will be = " + difference +"px";
    fill('#006769');
    stroke('#003e3f');
    text(Ashmie,noseX , noseY, 50, 60);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY = " + noseY);
       leftWristX = results[0].pose.leftWrist.x;
       rightWristX = results[0].pose.rightWrist.x;
       difference = floor(leftWristX - rightWristX);
       console.log("leftWristX = " + leftWristX + "rightWristX  = "+ rightWristX + " difference = " + difference);
    }
}