//Please let everything be fine
console.log('Everything is fine.')

// It is not best practice to have global varibles
var inAir = false

//Collision detection between player and block
function hitBox(){
  var playerLeft = $('.player').offset().left;
  var playerRight = $('.player').offset().left + $('.player').width();
  var playerTop = $('.player').offset().top;
  var playerBottom = $('.player').offset().top + $('.player').height();
  var blockLeft = $('.block').offset().left;
  var blockRight = $('.block').offset().left + $('.block').width();
  var blockTop = $('.block').offset().top;
  //Dawa suggested increasing the "hitbox" for landing on top of the block
  var blockTopS = $('.block').offset().top + 10;
  var blockTopN = $('.block').offset().top - 10;
  var blockBottom = $('.block').offset().top + $('.block').height();

//Killzone are on blocks side but safe on top
  if (playerRight > blockLeft && playerLeft < blockRight && playerBottom > blockTop){
    console.log('Hit!');
  } else if (playerRight > blockLeft && playerLeft < blockRight && blockTopS > playerBottom && playerBottom > blockTopN){
    console.log('Land!');
//Allows the player to stop on the block and the new ground is at same level as the block
    $('.player').stop();
    $(".player").css('top', "-50px");
  }
}

//There are a difference between walls/platforms, and blocks. Blocks are meant to be jumped off
function hitWall(){
  var playerLeft = $('.player').offset().left;
  var playerRight = $('.player').offset().left + $('.player').width();
  var playerTop = $('.player').offset().top;
  var playerBottom = $('.player').offset().top + $('.player').height();
  $('.platform').each(function(){
    var platLeft = $(this).offset().left;
    var platRight = $(this).offset().left + 50;
    var platTop = $(this).offset().top - 50;
    var platBottom = $(this).offset().top;

    if (playerRight > platLeft  && playerLeft < platRight && playerBottom > platTop){
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
    var triangleLeft = $(this).offset().left;
    var triangleRight = $(this).offset().left + 50;
    var triangleTop = $(this).offset().top - 50;
    var triangleBottom = $(this).offset().top;

    if (playerRight > triangleLeft  && playerLeft < triangleRight && playerBottom > triangleTop){
      console.log('Hit!');
      location.reload(true);
    }
  });
}

//Function for allowing the player to jump
$(document).ready(function jumping(){
  $('body').keydown(function(event) {
    if (event.keyCode === 32 && inAir === false) {
      $('.player').animate({top: '-=120'},{duration: 450});
      }
    inAir = true;
// function needs to be altered to prevent holding down space to stay in air
  });
  $('body').keyup(function(event) {
      if(event.keyCode === 32 && inAir === true) {
      $('.player').animate({top: '+=120'},{duration: 450});
    }
    inAir = false;
  });
});


function movingBlock() {
  $(".block").each(function() {
  var movright =  $(".block").position().left;
  var boundaryLeft = -15000;
    $('.block').animate({left: '-=10000'},{duration: 22000});
    hitbox();
    if (movright < boundaryLeft){
      $(this).remove();
    }
  });
}


function platform() {
  $(".platform").each(function() {
    var movright =  $(".platform").position().left;
    var boundaryLeft = -15000;
    $('.platform').animate({left: '-=10000'},{duration: 22000});
    hitbox();
    if (movright < boundaryLeft){
      $(this).remove();
    }
  });
}

function dodgeThis() {
   $(".triangle").each(function() {
    var movright =  $(".triangle").position().left;
    var boundaryLeft = -15000;
    $('.triangle').animate({left: '-=10000'},{duration: 22000});
    hitbox();
    if (movright < boundaryLeft){
      $(this).remove();
    }
  });
}

// setInterval(movingBlock, 1000);
// setInterval(platform, 1000);
// setInterval(dodgeThis, 1000);

// setInterval(hitBox, 1);
// setInterval(hitHazzard, 100);
// setInterval(hitWall, 100);























