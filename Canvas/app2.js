const lienzo = document.querySelector('#Lienzo');

const ctx = lienzo.getContext('2d');


      ctx.fillStyle = 'orange';
      ctx.beginPath();
      ctx.ellipse(200, 200, 100, 150, Math.PI / 2, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();


      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.moveTo(160, 160); 
      ctx.lineTo(140, 190); 
      ctx.lineTo(180, 190); 
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.moveTo(240, 160); 
      ctx.lineTo(220, 190); 
      ctx.lineTo(260, 190); 
      ctx.fill();
      ctx.closePath();

      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.moveTo(200, 175); 
      ctx.lineTo(185, 210); 
      ctx.lineTo(215, 210); 
      ctx.fill();
      ctx.closePath();




      ctx.fillStyle = 'green';
      ctx.beginPath();
      ctx.moveTo(200, 120);
      ctx.lineTo(200, 50);
      ctx.lineWidth = 10;
      ctx.stroke();
      ctx.closePath();

      ctx.fillStyle = 'black';
      ctx.beginPath()
      ctx.fillRect(70,300, 260, 200);

      ctx.fillStyle = 'orange';
      ctx.fillRect(10,310, 60, 200);
      ctx.fillRect(330,310, 60, 200);