const { types } = require("pg");

// Client facing scripts here
let option_counter =3;
//This on click function just adds another option field if the user wants more options.
$('.add-option-btn').click(function() {
  option_counter++;
  const optionDiv =
  `<div class="option">
  <label>Option ${option_counter}</label>
  <input type="text" name="question${option_counter}" placeholder="Title">
  <textarea name="descrption${option_counter}" placeholder="Description (optional)"></textarea>
  </div>
  `;
  $('#options').append(optionDiv);
});

//Handle from submission
$('#poll_form').submit(function(event) {
  event.preventDefault();

  const pollData = $(this).serialize(); //the $(this) refers to #poll_form

  $.ajax({
    url:'/create_poll', //poll creation route the name is just an example.
    type: 'POST',
    data: pollData,
    success: function(response) {
      // here we show the genrated link if the ajax request was a success.
      $('#adminLink').attr('href',response.adminLink).text(response.adminLink);
      $('#sharedLink').attr('href',response.sharedLink).text(response.sharedLink);
      $('.result').show();
    },
    // This way of handling the error is mainly for debugging.
    error: function() {
      alert('error creating the poll');
    }
  });
});
