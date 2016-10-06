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
      } else if(event.keyCode === 87){
        console.log('Fire the cannon!');
        fire();
      } else if(event.keyCode === 83){
        console.log('Fire the other cannon!');
        fire2();
      } else if(event.keyCode === 68){
        console.log('Fire the right cannon!');
        fire3();
      } else if(event.keyCode === 65){
        console.log('Fire the left cannon!');
        fire4();
      }
    });
});


//Again Numbers are not finalized, testing projectiles
function fire() {
  var cannonHead = $('.cannon').position().top;
  $(".cannon").append($("<div>").addClass("fire").css({"top": cannonHead}));
}

function fire2() {
  var cannonHead = $('.cannon').position().top;
  $(".cannon").append($("<div>").addClass("fire2").css({"top": cannonHead}));
}

function fire3() {
  var cannonHead = $('.cannon').position().top;
  $(".cannon").append($("<div>").addClass("fire3").css({"left": cannonHead}));
}

function fire4() {
  var cannonHead = $('.cannon').position().top;
  $(".cannon").append($("<div>").addClass("fire4").css({"left": cannonHead}));
}

function update() {
    $(".fire").each(function() {
      var oldTop = $(this).offset().top;
      var boundaryCeiling = $('body').position().top;
      $(this).css("top", oldTop - 10);
      if (oldTop < boundaryCeiling){
        $(this).remove();
    }
  });
}

function update2() {
    $(".fire2").each(function() {
      var oldTop = $(this).offset().top;
      var boundaryFloor = $('body').position().top + $('body').height();
      $(this).css("top", oldTop + 10);
      if (oldTop > boundaryFloor){
        $(this).remove();
    }
  });
}

function update3() {
    $(".fire3").each(function() {
      var oldLeft = $(this).offset().left;
      var boundaryRight = $('body').position().left + $('body').width();
      $(this).css("left", oldLeft + 10);
      if (oldLeft > boundaryRight){
        $(this).remove();
    }
  });
}

function update4() {
    $(".fire4").each(function() {
      var oldLeft = $(this).offset().left;
      var boundaryLeft = $('body').position().left;
      $(this).css("left", oldLeft - 10);
      if (oldLeft < boundaryLeft){
        $(this).remove();
    }
  });
}

setInterval(update, 10);
setInterval(update2, 10);
setInterval(update3, 10);
setInterval(update4, 10);







