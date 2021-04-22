let data;

function preload() {
  data = loadJSON("./pose.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(data.bodypoints);
}

function draw() {
  background(255);
  fill(0);
  for (let point of data.bodypoints) {
    let x = point.x;
    let y = point.y;
  }

  line(data.bodypoints[0].x, data.bodypoints[0].y, (data.bodypoints[5].x + data.bodypoints[6].x) / 2, (data.bodypoints[5].y + data.bodypoints[6].y) / 2);
  fill(255);


  circle(285, 90, 20);

  line(data.bodypoints[5].x, data.bodypoints[5].y, data.bodypoints[6].x, data.bodypoints[6].y);
  line(data.bodypoints[5].x, data.bodypoints[5].y, data.bodypoints[7].x, data.bodypoints[7].y);
  line(data.bodypoints[7].x, data.bodypoints[7].y, data.bodypoints[9].x, data.bodypoints[9].y);
  line(data.bodypoints[6].x, data.bodypoints[6].y, data.bodypoints[8].x, data.bodypoints[8].y);
  line(data.bodypoints[8].x, data.bodypoints[8].y, data.bodypoints[10].x, data.bodypoints[10].y);

  line(data.bodypoints[5].x, data.bodypoints[5].y, data.bodypoints[11].x, data.bodypoints[11].y);
  line(data.bodypoints[6].x, data.bodypoints[6].y, data.bodypoints[12].x, data.bodypoints[12].y);
  line(data.bodypoints[11].x, data.bodypoints[11].y, data.bodypoints[12].x, data.bodypoints[12].y);

  line(data.bodypoints[11].x, data.bodypoints[11].y, data.bodypoints[13].x, data.bodypoints[13].y);
  line(data.bodypoints[13].x, data.bodypoints[13].y, data.bodypoints[15].x, data.bodypoints[15].y);
  line(data.bodypoints[12].x, data.bodypoints[12].y, data.bodypoints[14].x, data.bodypoints[14].y);
  line(data.bodypoints[14].x, data.bodypoints[14].y, data.bodypoints[16].x, data.bodypoints[16].y);
}
