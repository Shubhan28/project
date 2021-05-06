eyesX = 0;
eyesY = 0;
noseX = 0;
noseY = 0;
mouthX = 0;
mouthY = 0
function preload()
{
   specs = loadImage('https://clipground.com/images/specks-clipart-12.jpg');
   mustach = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
   lips = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
   nose_image = loadImage('https://i2.wp.com/freepngimages.com/wp-content/uploads/2019/03/red-nose.png?fit=800%2C800');
}
function setup()
{
    canvas = createCanvas(300, 300);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    classifier = ml5.poseNet(video, modelLoaded);
    classifier.on('pose', gotposes);
}
function draw()
{
   image(video, 0, 0, 300, 300);
}