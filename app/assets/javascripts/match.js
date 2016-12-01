$(document).ready(function() {

  var $cards = $('.cards');
  var firstCard, secondCard;

  $cards.click(function() {
    var card = $(this).children();
    if(!firstCard) {
      firstCard = card;
      card.fadeIn(350);
    } else {
      secondCard = card;
      card.fadeIn(350);
    }
  });



});


// Check when a user clicks a 'card'
