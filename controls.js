//Please let everything be fine
console.log('Everything is fine.')

// It is not best practice to have global variables
var inAir = false

//Collision detection between player and block
//Attempted to set the player sides as a global variable, but ran into errors
// so each function will have it defined as needed.
function hitBox(){
  var playerLeft = $('.player').offset().left;
  var playerRight = $('.player').offset().left + $('.player').width();
  var playerTop = $('.player').offset().top;
  var playerBottom = $('.player').offset().top + $('.player').height();
  $('.block').each(function(){
    var blockLeft = $(this).offset().left;
    var blockRight = $(this).offset().left + $(this).width();
    var blockTop = $(this).offset().top;
    //Dawa suggested increasing the "hitbox" for landing on top of the block
    var blockTopS = $(this).offset().top + 10;
    var blockTopN = $(this).offset().top - 10;
    var blockBottom = $(this).offset().top + $(this).height();
  //Killzone are on blocks side but safe on top
    if (playerRight > blockLeft && playerLeft < blockRight && playerBottom > blockTop){
      console.log('Hit!');
    } else if (playerRight > blockLeft && playerLeft < blockRight && blockTopS > playerBottom && playerBottom > blockTopN){
  //Allows the player to stop on the block and the new ground is at same level as the block
      $('.player').stop();
      $(".player").css('top', "-50px");
    }
  })
}

// //Bits of code is commented out as I orginally had a larger stage but it was not running as smoothly as I wanted
// function raisedBox(){
//   var playerLeft = $('.player').offset().left;
//   var playerRight = $('.player').offset().left + $('.player').width();
//   var playerTop = $('.player').offset().top;
//   var playerBottom = $('.player').offset().top + $('.player').height();
//   $('.raised-block').each(function(){
//     var rblockLeft = $(this).offset().left;
//     var rblockRight = $(this).offset().left + $(this).width();
//     var rblockTop = $(this).offset().top;
//     var rblockTopS = $(this).offset().top + 10;
//     var rblockTopN = $(this).offset().top - 10;
//     var rblockBottom = $(this).offset().top + $(this).height();
//   //Killzone are on blocks side but safe on top
//     if (playerRight > rblockLeft && playerLeft < rblockRight && playerBottom > rblockTop){
//       console.log('Hit!');
//     } else if (playerRight > rblockLeft && playerLeft < rblockRight && rblockTopS > playerBottom && playerBottom > rblockTopN){
//       console.log('Land!');
//   //Allows the player to stop on the block and the new ground is at same level as the block
//       $('.player').stop();
//       $(".player").css('top', "-100px");
//     }
//   })
// }

//There are a difference between walls/platforms, and blocks. Blocks are meant to be jumped off
function hitWall(){
  var playerLeft = $('.player').offset().left;
  var playerRight = $('.player').offset().left + $('.player').width();
  var playerTop = $('.player').offset().top;
  var playerBottom = $('.player').offset().top + $('.player').height();
  $('.platform').each(function(){
    var platLeft = $(this).offset().left;
    var platRight = $(this).offset().left + 50;
    var platTop = $(this).offset().top;
    var platBottom = $(this).offset().top - 50;

    if (playerRight > platLeft  && playerLeft < platRight && playerBottom > platTop && playerTop < platBottom){
      console.log('Hit!');
      location.reload(true);
    }
  });
}

//Collision with triangles which are deadly from all sides.. true story
function hitHazzard(){
  var playerLeft = $('.player').offset().left;
  var playerRight = $('.player').offset().left + $('.player').width();
  var playerTop = $('.player').offset().top;
  var playerBottom = $('.player').offset().top + $('.player').height();
  $('.triangle').each(function(){
    // Sides are made a bit smaller because collision is based off a square
    var triangleLeft = $(this).offset().left ;
    var triangleRight = $(this).offset().left + 40;
    var triangleTop = $(this).offset().top;
    var triangleBottom = $(this).offset().top + 40;

    if (playerRight > triangleLeft  && playerLeft < triangleRight && playerBottom > triangleTop){
      console.log('Hit!');
      location.reload(true);
    }
  });
}
setInterval(hitHazzard, 10);


//Unfortunately I was unable to come up with a good way to make physics actually work in JS, so I added this
function fallbox(){
  var playerLeft = $('.player').offset().left;
  var playerBottom = $('.player').offset().top + $('.player').height();
  $('.falling-block').each(function(){
  var fblockRight = $(this).offset().left + $(this).width();
  var fblockbottom = $(this).offset().top - 25;
  if (fblockRight < playerLeft){
    $('.player').animate({top: '0'},{duration: 450});
    }
  })
}

//Function for allowing the player to jump
$(document).ready(function jumping(){
  $('body').keydown(function(event) {
    if (event.keyCode === 32 && inAir === false) {
      $('.player').animate({top: '-=110'},{duration: 450});
      }
    inAir = true;
// function needs to be altered to prevent holding down space to stay in air
  });
  $('body').keyup(function(event) {
      if(event.keyCode === 32 && inAir === true) {
      $('.player').animate({top: '+=110'},{duration: 450});
    }
    inAir = false;
  });
});

//Each block moves but the player stands still. The illusion is that the player is automatically moving
function movingBlock() {
  $(".block").each(function() {
  var movright =  $(".block").position().left;
  var boundaryLeft = -10000;
    $('.block').animate({left: '-=10000'},{duration: 22000});
  });
}

function fallingBlock() {
  $(".falling-block").each(function() {
  var movright =  $(".falling-block").position().left;
  var boundaryLeft = -10000;
    $('.falling-block').animate({left: '-=10000'},{duration: 22000});
  });
}

// function higherBlock() {
//   $(".raised-block").each(function() {
//   var movright =  $(".raised-block").position().left;
//   var boundaryLeft = -10000;
//     $('.raised-block').animate({left: '-=10000'},{duration: 22000});
//     }
//   });
// }

function platform() {
  $(".platform").each(function() {
    var movright =  $(".platform").position().left;
    var boundaryLeft = -1000;
    $('.platform').animate({left: '-=10000'},{duration: 22000});
  });
}

function dodgeThis() {
   $(".triangle").each(function() {
    var movright =  $(".triangle").position().left;
    var boundaryLeft = -1000;
    $('.triangle').animate({left: '-=10000'},{duration: 22000});
  });
}

function winner() {
  $('.game-over').css('z-index','1')
}

function restart() {
  location.reload(true);
}



setInterval(movingBlock, 1000);
setInterval(platform, 1000);
setInterval(dodgeThis, 1000);
setInterval(fallingBlock, 1000);
//setInterval(higherBlock, 1000);

setInterval(hitBox, 10);
//setInterval(raisedBox, 1);
setInterval(fallbox, 10);
setInterval(hitHazzard, 10);
setInterval(hitWall, 10);
setTimeout(winner, 15000);
setTimeout(restart, 18000);






















