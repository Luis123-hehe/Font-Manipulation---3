
left_wrist_x = 0;
right_wrist_x = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(10, 100);

    canvas = createCanvas(800,400);
    canvas.position(620,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized!');
}

function draw() {
    background("#7af0c1");
    document.getElementById("font-size").innerHTML = "Font Size of the text is = " +difference+ "px";
    fill("#000080");
    textSize(difference);
    text('Luis',50,400);

}

function gotPoses(results,error) {
    if(error){
        console.error(error);
    }
    if (results.length > 0) {
        console.log(results);

        right_wrist_x = results[0].pose.rightWrist.x;
        left_wrist_x = results[0].pose.leftWrist.x;

        difference = floor(left_wrist_x - right_wrist_x);

        console.log("rightwrist_x = " + results[0].pose.rightWrist.x + "rightwrist_y" + results[0].pose.rightWrist.y);
        console.log("leftwrist_x = " + results[0].pose.leftWrist.x + "leftwrist_y" + results[0].pose.leftWrist.y);
    }
}