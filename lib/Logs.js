function Logs(x, y, width, height, vX) {
  this.x = x;
  this.y = y;
  this.height = height;
  this.width = width;
  this.vX = vX;
}

var logImage;

loadResources();

function loadResources() {
  logImage = new Image();
  logImage.src = "lib/images/log.png";
}

Logs.prototype.draw = function (ctx) {
  ctx.drawImage(logImage,
    this.x,
    this.y,
    this.width,
    this.height
  );
};

Logs.prototype.resetPostition = function()  {
  if (this.x <= -150) {
    this.x = 850;
  } else if (this.x >= 850) {
    this.x = -150;
  }
}

Logs.prototype.moveLogs = function() {
  this.x += this.vX;
}


module.exports = Logs;