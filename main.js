noseX = 0;
noseY = 0;

function preload(){
    clownenose = loadImage("https://i.postimg.cc/FFqqb03f/580b57fbd9996e24bc43bed5.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(clownenose, noseX, noseY, 25, 25);
}

function takesnapshot(){
    save('clownfilter.png');
}

function modelLoaded(){
    console.log("Pose Net is initialised");
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 10;
        noseY = results[0].pose.nose.y - 5;
        console.log("noseX =" +noseX);
        console.log("noseY =" +noseY);
    }
}