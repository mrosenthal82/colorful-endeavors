function colorsOne() {
  let ctx = document.getElementById("colors1").getContext("2d");
  ctx.clearRect(0,0,1000,1000);
  // ctx.fillStyle="rgb(255,0,0)";
  // ctx.fillRect(0,0,30,30);

  let size = Number(prompt("Side length:"));
  let y = 10-size;

  for (let q=0; q<5; q++){
    x=10;
    y+=size;
    blue=q*51;
    green=0;
    red=255-q*51;
    for (let i = 0; i<5; i++){
      ctx.fillStyle=`rgb(${red},${green},${blue})`;
      ctx.fillRect(x,y,size,size);
      red-=51;
      green+=51;
      x+=size;
    }
  }
}
