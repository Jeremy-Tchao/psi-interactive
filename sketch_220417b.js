// Credit to ∩ ∪ ∩ ∪ ∩ ∪ for most of the not lighting code


// Define image
var face1;
var face2
let poseNet; // will hold the poseNet data
let video; // will hold the webcam data
let pose; // will hold the data for the current pose (I think).

function preload() {
  // Load image
  face1 = loadImage("face1.png");
  face2 = loadImage("face2.png");
  face = loadImage("face.png");
  
}

function setup() {
  // Define canvas
  
 createCanvas(2100, 900, WEBGL);
 //background(20);
 
  document.getElementById("defaultCanvas0").style.backgroundImage = "url('bolt.png')";
  document.getElementById("defaultCanvas0").style.backgroundRepeat = "no-repeat";
  
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video,modelLoaded)
  poseNet.on('pose',gotPoses);
  

    
}

function draw() {
  
texture(face)
if(pose){
  
  
  
  var dirX = (pose.leftEye.x/10) * 6;
  var dirY = (500 - pose.leftEye.y/10) * 8;
  ////directionalLight(255, 255, 255, dirX, dirY, 0.9);
  ////ambientLight(51);
  

  if(pose.leftEye.confidence > 0.8 && pose.rightEye.confidence > 0.8) //pose 1
    {
      texture(face1);
      rotateX(dirY);
      rotateY(dirX);
      if(pose.leftWrist.confidence > 0.2 || pose.rightWrist.confidence > 0.2)
      {
        texture(face2);
      }
    }
  


  
  
}
  // Call image
  //texture(face1);
  
  // Draw sphere
  //translate(200,0,0)
  sphere(50, 50, 50);
  
  angleMode(DEGREES);
  

  
  
}

function modelLoaded(){
  console.log("Pose net loaded! :D "); 
}

function gotPoses(poses){
  // Check to see if machine is picking up any poses
  // by checking to see if the array isn't empty.
  console.log(poses)
  
  if(poses.length > 0){
    pose = poses[0].pose;  
  }

}
