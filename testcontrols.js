console.log('Everything is fine.')

$(document).ready(function jumping(){
  $('body').keydown(function(event) {
    if (event.keyCode === 32) {
      $('.player').animate({top: '-=100'},{duration: 300});
      }
  });
  $('body').keyup(function(event) {
    if(event.keyCode === 32) {
      $('.player').animate({top: '+=100'},{duration: 300});
    }
  });
});

function platform() {
    $(".block").each(function() {
      var movright =  $(".block").position().left;
      var boundaryLeft = $('body').position().left - 200;
      $('.block').animate({left: '-=900'},{duration: 3500});
      if (movright < boundaryLeft){
        $(this).remove();
    }
  });
}

function platform2() {
    $(".triangle").each(function() {
      var movright =  $(".triangle").position().left;
      var boundaryLeft = $('body').position().left;
      $('.triangle').animate({left: '-=900'},{duration: 3500});
      if (movright < boundaryLeft){
        $(this).remove();
    }
  });
}

setInterval(platform, 1000);
setInterval(platform2, 1000);
