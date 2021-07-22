const math = require("mathjs");

export class Fixation {
  constructor(x_coords, y_coords, start, end) {
    this.data = {};
    // if (typeof tf !== "undefined") {
    //   // Toggle when use tensorflow.js to compute fixations and saccades
    //   // xall & yall are converted to percentage, ranging from [0, 100);
    //   if (x_coords instanceof Array) {
    //     // Reconstruct from server data, already percentage
    //     this.data.xall = x_coords;
    //     this.data.yall = y_coords;
    //   } else {
    //     // First time construction
    //     this.data.xall = x_coords.div(document.documentElement.clientWidth / 100);
    //     this.data.yall = y_coords.div(document.documentElement.clientHeight / 100);
    //   }

    //   this.data.x_per = tf.mean(this.data.xall).squeeze().dataSync()[0];
    //   this.data.xmax_per = tf.max(this.data.xall).squeeze().dataSync()[0];
    //   this.data.xmin_per = tf.min(this.data.xall).squeeze().dataSync()[0];
    //   this.data.xmad_per = get_median(this.data.xall.sub(get_median(this.data.xall))).dataSync()[0];
    //   this.data.xvar_per = tf.moments(this.data.xall).variance.sqrt().dataSync()[0];

    //   this.data.y_per = tf.mean(this.data.yall).squeeze().dataSync()[0];
    //   this.data.ymax_per = tf.max(this.data.yall).squeeze().dataSync()[0];
    //   this.data.ymin_per = tf.min(this.data.yall).squeeze().dataSync()[0];
    //   this.data.ymad_per = get_median(this.data.yall.sub(get_median(this.data.yall))).dataSync()[0];
    //   this.data.yvar_per = tf.moments(this.data.yall).variance.sqrt().dataSync()[0];

    //   if (!(x_coords instanceof Array)) {
    //     this.data.xall = this.data.xall.squeeze().dataSync()[0];
    //     this.data.yall = this.data.yall.squeeze().dataSync()[0];
    //   }

    //   this.data.start = start;
    //   this.data.end = end;
    //   this.data.duration = end.sub(start).dataSync()[0];
    // } else {
    // Toggle when use math.js to compute fixations and saccades
    // xall & yall are converted to percentage, ranging from [0, 100);
    if (x_coords instanceof Array) {
      // Reconstruct from server data, already percentage
      this.data.xall = x_coords;
      this.data.yall = y_coords;
    } else {
      this.data.xall = math.divide(x_coords, document.documentElement.clientWidth / 100).toArray();
      this.data.yall = math.divide(y_coords, document.documentElement.clientHeight / 100).toArray();
    }

    this.data.x_per = math.mean(this.data.xall);
    this.data.xmad_per = math.mad(this.data.xall);
    this.data.xmax_per = math.max(this.data.xall);
    this.data.xmin_per = math.min(this.data.xall);

    this.data.y_per = math.mean(this.data.yall);
    this.data.ymad_per = math.mad(this.data.yall);
    this.data.ymax_per = math.max(this.data.yall);
    this.data.ymin_per = math.min(this.data.yall);

    this.data.start = start;
    this.data.end = end;
    this.data.duration = end - start;
    // }

    // Bind confusion detection with fixation
    this.data.confusionCount = 0;
    // this.data.stuNum = typeof userInfo === "undefined" ? undefined : userInfo["number"];
    this.data.stuNum = undefined;
  }

  // TODO: NO NEED
  // static fromFixationData(fixationData) {
  //   let fixation;
  //   // if (typeof tf !== "undefined") {
  //   //   fixation = new this(tf.tensor1d(fixationData.xall), tf.tensor1d(fixationData.yall), fixationData.start, fixationData.end);
  //   // } else {
  //   fixation = new this(fixationData.xall, fixationData.yall, fixationData.start, fixationData.end);
  //   // }
  //   fixation.data.confusionCount = fixationData.confusionCount;
  //   fixation.data.stuNum = fixationData.stuNum;
  //   return fixation;
  // }

  // Getters. Cater for visualization need. This is user-dependent.
  // get x() {
  //   return (this.data.x_per / 100) * document.documentElement.clientWidth;
  // }
  // get xmax() {
  //   return (this.data.xmax_per / 100) * document.documentElement.clientWidth;
  // }
  // get xmin() {
  //   return (this.data.xmin_per / 100) * document.documentElement.clientWidth;
  // }
  // get xmad() {
  //   return (this.data.xmad_per / 100) * document.documentElement.clientWidth;
  // }
  // get y() {
  //   return (this.data.y_per / 100) * document.documentElement.clientHeight;
  // }
  // get ymax() {
  //   return (this.data.ymax_per / 100) * document.documentElement.clientHeight;
  // }
  // get ymin() {
  //   return (this.data.ymin_per / 100) * document.documentElement.clientHeight;
  // }
  // get ymad() {
  //   return (this.data.ymad_per / 100) * document.documentElement.clientHeight;
  // }

  // Setters
  // set x(val) {
  //   this.data.x_per = (val * 100) / document.documentElement.clientWidth;
  // }
  // set xmax(val) {
  //   this.data.xmax_per = (val * 100) / document.documentElement.clientWidth;
  // }
  // set xmin(val) {
  //   this.data.xmin_per = (val * 100) / document.documentElement.clientWidth;
  // }
  // set xmad(val) {
  //   this.data.xmad_per = (val * 100) / document.documentElement.clientWidth;
  // }
  // set y(val) {
  //   this.data.y_per = (val * 100) / document.documentElement.clientHeight;
  // }
  // set ymax(val) {
  //   this.data.ymax_per = (val * 100) / document.documentElement.clientHeight;
  // }
  // set ymin(val) {
  //   this.data.ymin_per = (val * 100) / document.documentElement.clientHeight;
  // }
  // set ymad(val) {
  //   this.data.ymad_per = (val * 100) / document.documentElement.clientHeight;
  // }

  // TODO: NO NEED
  // contain(timestamp) {
  //   return timestamp >= this.data.start && timestamp <= this.data.end;
  // }

  // TODO: NO NEED
  // incConfusionCount() {
  //   this.data.confusionCount++;
  // }

  // TODO: NO NEED
  // draw(ctx, r = 10, color = "#0B5345") {
  //   ctx.fillStyle = color;
  //   ctx.beginPath();
  //   ctx.arc(this.x, this.y, r, 0, Math.PI * 2, true);
  //   ctx.fill();
  // }

  // TODO: NO NEED
  // drawId(ctx, index, r = 10, fontsize = 16) {
  //   ctx.font = fontsize + "px serif";
  //   ctx.fillText(index, this.x + r, this.y + r);
  //   // ctx.fillText(this.xvar.print() + ', ' + this.yvar.print(), this.x + 2*r, this.y + r);
  //   // console.log(this.x);
  //   // console.log(this.y);
  // }

  // TODO: NO NEED
  // drawRectArea(ctx, color = "#0B5345") {
  //   ctx.strokeStyle = color;
  //   ctx.strokeRect(this.xmin, this.ymin, this.xmax - this.xmin, this.ymax - this.ymin);
  // }
}

export class Saccade {
  constructor(x_coords, y_coords, vx, vy) {
    // if (typeof tf !== "undefined") {
    //   // Toggle when use tensorflow.js to compute fixations and saccades
    //   // xall & yall are converted to percentage, ranging from [0, 100);
    //   this.xall = x_coords
    //     .div(document.documentElement.clientWidth / 100)
    //     .squeeze()
    //     .arraySync();
    //   this.yall = y_coords
    //     .div(document.documentElement.clientHeight / 100)
    //     .squeeze()
    //     .arraySync();
    //   this.vx = vx
    //     .div(document.documentElement.clientWidth / 100)
    //     .squeeze()
    //     .arraySync();
    //   this.vy = vy
    //     .div(document.documentElement.clientHeight / 100)
    //     .squeeze()
    //     .arraySync();
    // } else {
    // Toggle when use math.js to compute fixations and saccades
    // xall & yall are converted to percentage, ranging from [0, 100);
    this.xall = math.divide(x_coords, document.documentElement.clientWidth / 100);
    this.yall = math.divide(y_coords, document.documentElement.clientHeight / 100);
    this.vx = math.divide(vx, document.documentElement.clientWidth / 100);
    this.vy = math.divide(vy, document.documentElement.clientHeight / 100);
    // }
  }

  // mark() {
  //   this.additional = true;
  // } // To mark saccades before the first fixation or after the last fixation

  // drawVelocity(ctx, arrowLen = 14, color = "blue") {
  //   // color = '#'+Math.floor(Math.random()*16777215).toString(16);

  //   this.xall.forEach((fromX, i) => {
  //     let fromY = this.yall[i];
  //     let offsetX = arrowLen * Math.cos(Math.atan2(this.vy[i], this.vx[i]));
  //     let offsetY = arrowLen * Math.sin(Math.atan2(this.vy[i], this.vx[i]));

  //     // drawArrow(ctx, fromX, fromY, fromX + offsetX, fromY + offsetY, 30, 2, 3, color);

  //     ctx.fillStyle = color;
  //     ctx.beginPath();
  //     ctx.arc(fromX, fromY, 5, 0, Math.PI * 2, true);
  //     ctx.fill();
  //   });
  // }
}
