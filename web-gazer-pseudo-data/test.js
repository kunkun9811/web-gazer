// points

/* FIRST FIXATION => Well some of them are excluded but still */
p1 = {
  data: { x: 1, y: 0 },
  elapsedTime: 100,
};

p2 = {
  data: { x: 2, y: 0 },
  elapsedTime: 110,
};

p3 = {
  data: { x: 1.5, y: 1.6 },
  elapsedTime: 190,
};

p4 = {
  data: { x: 1.5, y: 1 },
  elapsedTime: 120,
};

p5 = {
  data: { x: 1.11, y: 0.75 },
  elapsedTime: 130,
};

p6 = {
  data: { x: 1.1, y: 0.75 },
  elapsedTime: 140,
};

p7 = {
  data: { x: 1.2, y: 0.75 },
  elapsedTime: 150,
};

p8 = {
  data: { x: 1.3, y: 0.75 },
  elapsedTime: 160,
};

p9 = {
  data: { x: 1.7, y: 0.75 },
  elapsedTime: 170,
};

p10 = {
  data: { x: 1.8, y: 0.75 },
  elapsedTime: 180,
};

p11 = {
  data: { x: 1.5, y: 1.6 },
  elapsedTime: 200,
};

p12 = {
  data: { x: 1.5, y: 1.6 },
  elapsedTime: 210,
};

p13 = {
  data: { x: 1.5, y: 1.6 },
  elapsedTime: 220,
};

p14 = {
  data: { x: 1.5, y: 1.6 },
  elapsedTime: 230,
};

p15 = {
  data: { x: 1.5, y: 1.6 },
  elapsedTime: 240,
};

p16 = {
  data: { x: 1.5, y: 1.6 },
  elapsedTime: 250,
};

p17 = {
  data: { x: 1.5, y: 2 },
  elapsedTime: 300,
};

/* FIRST FIXATION => Well some of them are excluded but still */
p18 = {
  data: { x: 10, y: 0 },
  elapsedTime: 350,
};

p19 = {
  data: { x: 20, y: 0 },
  elapsedTime: 390,
};

p20 = {
  data: { x: 10.5, y: 1.6 },
  elapsedTime: 400,
};

p21 = {
  data: { x: 10.5, y: 1 },
  elapsedTime: 500,
};

p22 = {
  data: { x: 10.11, y: 0.75 },
  elapsedTime: 550,
};

p23 = {
  data: { x: 10.1, y: 0.75 },
  elapsedTime: 600,
};

const urlProcess = "http://localhost:5000/process";

// data to send
// data = [p1, p2, p4, p5, p6, p7, p8, p9, p10, p3, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23];
data = [p1, p2, p4, p5, p6, p7, p8, p9, p10, p3];

fetch(urlProcess, {
  method: "POST",
  body: JSON.stringify(data),
})
  .then((response) => console.log("TEST SUCCESS!!"))
  .catch((err) => console.log(`TEST FAILED => ${err}`));
