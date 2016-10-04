//Numbers are not finalized, basic player movement for cardinal directions
$(document).ready(function (){
    $("body").keydown(function(event){
      if(event.keyCode === 38){
        $(".player2").animate({top: "-=10px"},{duration: 2});
      } else if (event.keyCode === 39){
        $(".player2").animate({left: "+=10px"},{duration: 2});
      } else if(event.keyCode === 37){
        $(".player2").animate({left: "-=10px"},{duration: 2});
      } else if(event.keyCode === 40){
        $(".player2").animate({top: "+=10px"},{duration: 2});
        // A shooter has to be able to fire some bullets
      } else if(event.keyCode === 13){
        console.log('Fire the cannon!');
        fire();
      }
    });
});

//Again Numbers are not finalized, testing projectiles
function fire() {
  var cannonHead = $('.cannon').position().top;
  $(".cannon").append($("<div>").addClass("fire").css({"top": cannonHead}));
}

function update() {
    $(".fire").each(function() {
      var oldTop = $(this).offset().top;
      var boundaryCeiling = $('body').position().top;
      var boundaryFloor = $('body').position().top + $('body').height();

      $(this).css("top", oldTop - 10);
      if (oldTop < boundaryCeiling){
        $(this).remove();
    }
  });
}
setInterval(update, 10);






