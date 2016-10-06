console.log('Everything is fine.')

// function startingGame() {
//   var playerObj = ;
//   var stage = ;
//   var blockObj = ;
//   var triangleObj = ;
// }

function collisionCircle(){
  var playerObj = {radius: 25, x: 5, y: 5};
  var  blockObj = {radius: 25, x: 10, y: 5};

  var dx = playerObj.x - blockObj.x;
  var dy = playerObj.y - blockObj.y;
  var distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < playerObj.radius + blockObj.radius) {
    console.log('Hit!');
  }
}

function collisionSquare(){
  var rect1 = {x: 5, y: 5, width: 50, height: 50}
  var rect2 = {x: 20, y: 10, width: 10, height: 10}

  if (rect1.x < rect2.x + rect2.width &&
     rect1.x + rect1.width > rect2.x &&
     rect1.y < rect2.y + rect2.height &&
     rect1.height + rect1.y > rect2.y) {
      console.log('Hit!');
  }
}

function hitbox(){
  var playerLeft = $('.player').position().left;
  var playerRight = $('.player').position().left + $('.player').width();
  var playerTop = $('.player').position().top + $('.player').height();
  var playerBottom = $('.player').position().top;
  var blockLeft = $('.block').position().left;
  var blockRight = $('.block').position().left + $('.block').width();
  var blockTop = $('.block').position().top + $('.block').height();
  var blockBottom = $('.block').position().top;

  if (playerRight > blockLeft){
    console.log('Hit!');
  } else if (playerBottom === blockTop){
    $('.player').css.top = $(this).position().top;
  }
}

function hitHazzard(){
  var playerLeft = $('.player').position().left;
  var playerRight = $('.player').position().left + $('.player').width();
  var playerTop = $('.player').position().top + $('.player').height();
  var playerBottom = $('.player').position().top;
  var triangleLeft = $('.triangle').position().left;
  var triangleObjRight = $('.triangle').position().left + $('.triangle').width();
  var triangleTop = $('.triangle').position().top + $('.triangle').height();
  var triangleBottom = $('.triangle').position().top;

  if (playerRight > blockLeft && playerBottom >= blockTop){
    console.log('Hit!');
  }
}

var inAir = false

$(document).ready(function jumping(){
  $('body').keydown(function(event) {
    if (event.keyCode === 32 && inAir === false) {
      $('.player').animate({top: '+=100'},{duration: 450});
      }
    inAir = true;
  });
  $('body').keyup(function(event) {
    if(event.keyCode === 32 && inAir === true) {
      $('.player').animate({top: '-=100'},{duration: 450});
    }
    inAir = false;
  });
});

function platform() {
    $(".block").each(function() {
      var movright =  $(".block").position().left;
      var boundaryLeft = -3000;
      $('.block').animate({left: '-=4000'},{duration: 8000});
      hitbox();
      if (movright < boundaryLeft){
        $(this).remove();
    }
  });
}

function platform2() {
    $(".triangle").each(function() {
      var movright =  $(".triangle").position().left;
      var boundaryLeft = -3000;
      $('.triangle').animate({left: '-=4000'},{duration: 8000});
      hitbox();
      if (movright < boundaryLeft){
        $(this).remove();
    }
  });
}

// setInterval(platform, 1000);
// setInterval(platform2, 1000);
// setInterval(hitbox, 1000);



