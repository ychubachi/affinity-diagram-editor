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
  $('.card').draggable(draggableEvents);
});

var createCard = function() {
  console.log('onclick');
  $('#cards').append(cardHtml);
  $('.card').draggable(draggableEvents);
};
