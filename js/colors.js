function colorsOne() {
  let ctx = document.getElementById("colors1").getContext("2d");
  ctx.clearRect(0,0,1000,500);

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


function colorsTwo() {
  let ctx = document.getElementById("colors2").getContext("2d");
  ctx.clearRect(0,0,1000,500);

  let size = Number(prompt("Side length:"));
  let y = 10-size;

  for (let q=0; q<=20; q++){
    x=10;
    y+=size;
    if (q>=0 && q<=10){
      blue=q*25.5+51;
      red=255-q*25.5+51;
    } else {
      blue-=25.5;
    }
    green=51;

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


function colorsThree() {
  let ctx = document.getElementById("colors3").getContext("2d");
  ctx.clearRect(0,0,1000,500);

  let size = 2;
  let y = 10-size;

  for (let q=0; q<=255; q++){
    x=10;
    y+=size;
    // if (q>=0 && q<=50){
      blue=q*1;
      red=255-q*1;
    // } else {
    //   blue-=1;
    // }
    green=0;

    for (let i = 0; i<255; i++){
      ctx.fillStyle=`rgb(${red},${green},${blue})`;
      ctx.fillRect(x,y,size,size);
      red-=1;
      green+=1;
      x+=size;
    }
    // for (let j = 0; j<=50; j++){
    //   ctx.fillStyle=`rgb(${red},${green},${blue})`;
    //   ctx.fillRect(x,y,size,size);
    //   red+=1;
    //   green-=1;
    //   x+=size;
    // }
  }
}
