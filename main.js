noseX = 0;
noseY = 0;
mouthX = 0;
mouthY = 0;
eyeX = 0;
eyeY = 0;
headX = 0;
headY = 0;
musX = 0;
musY = 0;
hatX = 0
hatY = 0;
function preload()
{
    specs = loadImage('https://i.postimg.cc/jd4rh1Rm/specks-clipart-12.png');
    mustach = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
    lips = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
    nose_image = loadImage('https://i.postimg.cc/4dx2m3SP/red-nose.png');
}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    classifier = ml5.poseNet(video, modelLoaded);
    classifier.on('pose', gotposes);
}
function draw()
{
  image(video, 0, 0, 300, 300);
  image(specs, eyeX, eyeY, 100, 50);
  image(mustach, musX, musY, 100, 20);
  image(lips, mouthX, mouthY, 50, 20);
  image(nose_image, noseX, noseY, 30, 30);
  image(hat, headX, headY, 100, 50);
}
function take_snapshot()
{
    save('filter.png');
}
function show(message)
{
    console.log(message);
}
function modelLoaded()
{
   show("PoseNet is loaded!!");
}
function gotposes(results)
{
    if(results.length > 0)
    {
        show(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
        eyeX = results[0].pose.rightEye.x-30;
        eyeY = results[0].pose.rightEye.y-20;
        mouthX = results[0].pose.nose.x-50;
        mouthY = results[0].pose.nose.y+15;
        musX = results[0].pose.nose.x-30;
        musY = results[0].pose.nose.y-40;
        console.log("nose_x = "+noseX);
        console.log("nose_y = "+noseY);
    }
}
