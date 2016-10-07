//Please let everything be fine
console.log('Everything is fine.')

//Collision detection between player and block
function hitbox(){
  var playerLeft = $('.player').offset().left;
  var playerRight = $('.player').offset().left + $('.player').width();
  var playerTop = $('.player').offset().top;
  var playerBottom = $('.player').offset().top + $('.player').height();
  var blockLeft = $('.block').offset().left;
  var blockRight = $('.block').offset().left + $('.block').width();
  var blockTop = $('.block').offset().top;
  var blockTopS = $('.block').offset().top + 5;
  var blockTopN = $('.block').offset().top - 5;
  var blockBottom = $('.block').offset().top + $('.block').height();

//Killzone are on blocks side but safe on top
  if (playerRight > blockLeft && playerLeft < blockRight && playerBottom > blockTop){
    console.log('Hit!');
  } else if ( playerRight > blockLeft && playerLeft < blockRight && blockTopS > playerBottom && playerBottom > blockTopN){
    console.log('Land!');
    $('.player').animate({top: '-50'});
  }
}
//Collision with triangles which are deadly from all sides.. true story
function hitHazzard(){
  $('.triangle').each(function(){
    var playerLeft = $('.player').offset().left;
    var playerRight = $('.player').offset().left + $('.player').width();
    var playerTop = $('.player').offset().top - $('.player').height();
    var playerBottom = $('.player').offset().top;
    var triangleLeft = $(this).offset().left;
    var triangleRight = $(this).offset().left + 50;
    var triangleTop = $(this).offset().top - 50;
    var triangleBottom = $(this).offset().top;

    if (playerRight > triangleLeft  && playerLeft < triangleRight && playerBottom > triangleTop){
      console.log('Hit!');
    }
  });
}

var inAir = false

$(document).ready(function jumping(){
  $('body').keydown(function(event) {
    if (event.keyCode === 32 && inAir === false) {
      $('.player').animate({top: '-=100'},{duration: 450});
      }
    inAir = true;
  });
  $('body').keyup(function(event) {
    if(event.keyCode === 32 && inAir === true) {
      $('.player').animate({top: '+=100'},{duration: 450});
    }
    if ($('.player').offset().top != 416){
      $('.player').offset().top = 416;
    }
    inAir = false;
  });
});


// function platform() {
//     $(".block").each(function() {
//       var movright =  $(".block").position().left;
//       var boundaryLeft = -3000;
//       $('.block').animate({left: '-=4000'},{duration: 8000});
//       hitbox();
//       if (movright < boundaryLeft){
//         $(this).remove();
//     }
//   });
// }

// function platform2() {
//     $(".triangle").each(function() {
//       var movright =  $(".triangle").position().left;
//       var boundaryLeft = -3000;
//       $('.triangle').animate({left: '-=4000'},{duration: 8000});
//       hitbox();
//       if (movright < boundaryLeft){
//         $(this).remove();
//     }
//   });
// }

// setInterval(platform, 1000);
// setInterval(platform2, 1000);
setInterval(hitbox, 10);
setInterval(hitHazzard, 100);


//Automatic motion for the player object, for the person playing the game, they will just have to dodge other objects on screen

//Gravity Function






















