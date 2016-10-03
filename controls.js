$(document).ready(function (){
    $("body").keyup(function (event){
      if(event.keyCode === 38){
        $(".player2").animate({top: "-=100px"},{duration: 10});
      } else if (event.keyCode === 39){
        $(".player2").animate({left: "+=100px"},{duration: 10});
      } else if(event.keyCode === 37){
        $(".player2").animate({left: "-=100px"},{duration: 10});
      } else if(event.keyCode === 40){
        $(".player2").animate({top: "+=100px"},{duration: 10});
      }
    });
});

