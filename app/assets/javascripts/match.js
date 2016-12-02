$(document).ready(function() {

  var firstClick = '';
  var secondClick = '';

  function clicks() {
    if (firstClick == '') {
      firstClickFun();
    } else if (secondClick == '') {
      secondClickFun();
    } else checkClicks();
  }

  function firstClickFun() {
    $('.card').click(function () {
      firstClick = $(this).attr('class');
      changeClass = (firstClick + '-clicked');
      $(this).addClass(changeClass);
      clicks();
    });
  }

  function secondClickFun() {
    $('.card').click(function () {
      secondClick = $(this).attr('class');
      changeClass = (secondClick + '-clicked');
      $(this).addClass(changeClass);
      clicks();
    });
  }

  function checkClicks() {
    if (firstClick == secondClick) {
      console.log("MATCH " + "1: " + firstClick + " 2: " + secondClick);
      reset();
    } else {
      console.log("NO MATCH " + "1: " + firstClick + " 2: " + secondClick);
      reset();
    }
  }

  function reset() {
    firstClick = '';
    secondClick = '';
    clicks();
  }

  clicks();
});

  //
  // var $card = $('.card');
  //
  // $card.click(function() {
  //   var selected = $(this).children();
  //   if(!firstCard) {
  //     firstCard = selected;
  //     card.fadeIn(350);
  //   } else {
  //     secondCard = selected;
  //     card.fadeIn(350);
  //       if(firstCard != secondCard){
  //         card.fadeOut(350);
  //       }else{
  //
  //       }
  //   }
  // });
