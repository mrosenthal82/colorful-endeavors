function colorsOne() {
  let ctx = document.getElementById("colors1").getContext("2d");
  ctx.clearRect(0,0,1000,1000);

  let size = Number(prompt("Side length:"));
  let y = 10-size;

  for (let q=0; q<=10; q++){
    x=10;
    y+=size;
    if (q>=0 && q<6){
      blue=q*51;
      red=255-q*51;
    } else {
      blue-=51;

    }
    green=0;

    for (let i = 0; i<5; i++){
      ctx.fillStyle=`rgb(${red},${green},${blue})`;
      ctx.fillRect(x,y,size,size);
      red-=51;
      green+=51;
      x+=size;
    }
    for (let j = 0; j<=5; j++){
      ctx.fillStyle=`rgb(${red},${green},${blue})`;
      ctx.fillRect(x,y,size,size);
      red+=51;
      green-=51;
      x+=size;
    }
  }
}
