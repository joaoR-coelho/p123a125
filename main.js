
difference=0
rightWristX=0
leftWristX=0

function setup() {
    video=createCapture(VIDEO) 
    video.size(550,500)
    canvas=createCanvas(400,400)
    canvas.position(560,150)
    poseNet=ml5.poseNet(video,modelLoaded) 
    poseNet.on("pose",gotPoses)
}
function modelLoaded () {
    console.log("modelo inicializado")
}
function gotPoses(results) {
    if (results.length>0) {
        console.log(results)
        leftWristX=results[0].pose.leftWrist.x
        rightWristX=results[0].pose.rightWrist.x
        difference=floor(leftWristX-rightWristX)
        console.log("leftWristX= "+leftWristX+"rightWristX= "+rightWristX+"difference= "+difference)
    }
}


function draw() {
    background("gray")
    document.getElementById("square_side").innerHTML="largura e altura serão: "+difference+"px"
    textSize(difference)
    fill("darkblue")
    text("João Rafael", 50,200)
}