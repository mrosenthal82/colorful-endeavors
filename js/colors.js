function colorsOne() {
  let ctx = document.getElementById("colors1").getContext("2d");
  ctx.clearRect(0,0,1000,1000);

  let size = Number(prompt("Side length:"));
  let y = 10-size;

  for (let q=0; q<=20; q++){
    x=10;
    y+=size;
    if (q>=0 && q<=10){
      blue=q*25.5;
      red=255-q*25.5;
    } else {
      blue-=25.5;

    }
    green=0;

    for (let i = 0; i<10; i++){
      ctx.fillStyle=`rgb(${red},${green},${blue})`;
      ctx.fillRect(x,y,size,size);
      red-=25.5;
      green+=25.5;
      x+=size;
    }
    for (let j = 0; j<=10; j++){
      ctx.fillStyle=`rgb(${red},${green},${blue})`;
      ctx.fillRect(x,y,size,size);
      red+=25.5;
      green-=25.5;
      x+=size;
    }
  }
}
