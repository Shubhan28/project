function preload()
{

}
function setup()
{
    canvas = createCanvas(300, 300);
    video = captureVideo(VIDEO);
    video.hide();
}
function draw()
{
    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(0, 128, 0, 70);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(0, 200, 0, 70);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(0, 300, 0, 70);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(0, 400, 0, 70);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(0, 500, 0, 70);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(0, 600, 0, 70);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(0, 700, 0, 70);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(0, 800, 0, 70);
}