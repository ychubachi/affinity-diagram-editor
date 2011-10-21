var cardHtml = '<div class="card"><textarea>new card</textarea></div>';

var draggableEvents = {
  start: function(event, ui) {
    $('#status').append('started,')
  },
  stop: function(event, ui) {
    $('#status').append('stopped,')
  }
};

$(function() {
  cardInteractions();
});

var createCard = function() {
  console.log('onclick');
  $('#cards').append(cardHtml);
  cardInteractions();
};

var cardInteractions = function() {
  $('.card').draggable(draggableEvents).resizable();
};