Template.exam_4_canvas.onCreated(function () {
  //console.log(this.instance.$("#myCanvas"));
  //console.log(this.$("#myCanvas"));
})

Template.exam_4_canvas.onRendered(function () {
    //console.log(this.$("#myCanvas"));

    var canvas =this.find("#myCanvas");
    var context = canvas.getContext('2d');

    console.log('init canvas')

    var imageObj = new Image();

    imageObj.onload = function () {

      console.log('load ok')

      var _count = 0;
      function loop() {

        //랜더링 (화면에 반영)
        context.setTransform(1,0,0,1,canvas.width/2, canvas.height/2); //변환행렬 초기화
        context.clearRect(-canvas.width/2,-canvas.height/2,canvas.width,canvas.height);
        context.beginPath();
        context.moveTo(-canvas.width/2,0);
        context.lineTo(canvas.width/2,0);
        context.stroke()
        context.beginPath();
        context.moveTo(0,-canvas.height/2);
        context.lineTo(0,canvas.height/2);
        context.stroke();
        context.font = '18pt Calibri';
        context.fillStyle = 'blue';
        context.fillText("x pos is " + Math.round(_count++), 0, 0);


        context.drawImage(imageObj,0,0,72,72,0,0,72,72);


        requestAnimationFrame(loop);
      }

      loop();

    }

    imageObj.src = '/images/0001-sheet_.jpg'
    //imageObj.src = '/images/0001-sheet.png'

  }

)