const math = require("mathjs");

export class Fixation {
  constructor(x_coords, y_coords, start, end) {
    this.data = {};
    // Toggle when use math.js to compute fixations and saccades
    // NOTE: [Original implementation] xall & yall are converted to percentage, ranging from [0, 100)
    // ** NOTE: [Custom implementation] want to make it the same as raw pixels
    if (x_coords instanceof Array) {
      // Reconstruct from server data, already percentage
      this.data.xall = x_coords;
      this.data.yall = y_coords;
      // this.data.xall = x_coords.toArray();
      // this.data.yall = y_coords.toArray();
    } else {
      this.data.xall = math.divide(x_coords, document.documentElement.clientWidth / 100).toArray();
      this.data.yall = math.divide(y_coords, document.documentElement.clientHeight / 100).toArray();
    }

    // console.log("========================x_coords & y_coords========================");
    // console.log(x_coords);
    // console.log(y_coords);

    // console.log("========================in fixation class========================");
    // console.log(this.data.xall);
    // console.log(this.data.yall);

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
}

export class Saccade {
  constructor(x_coords, y_coords, vx, vy) {
    // Toggle when use math.js to compute fixations and saccades
    // xall & yall are converted to percentage, ranging from [0, 100);
    this.xall = math.divide(x_coords, document.documentElement.clientWidth / 100);
    this.yall = math.divide(y_coords, document.documentElement.clientHeight / 100);
    this.vx = math.divide(vx, document.documentElement.clientWidth / 100);
    this.vy = math.divide(vy, document.documentElement.clientHeight / 100);
    // }
  }
}
