// Client facing scripts here
$(document).ready(function() {
  let option_counter =0;
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
    const question = $('input[name="question"').val();
    const opt_1 = $('input[name="title_1"').val();
    const opt_2 = $('input[name="title_2"').val();
    const opt_3 = $('input[name="title_3"').val();
    const desc_1 = $('textarea[name="descrption_1"').val();
    const desc_2 = $('textarea[name="descrption_2"').val();
    const desc_3 = $('textarea[name="descrption_3"').val();

    const pollData = {
      question: question,
      options: [opt_1, opt_2, opt_3],
      descriptions: [desc_1, desc_2, desc_3]
    };
    $.ajax({
      url: '/', //End point go here
      method: 'POST',
      data: JSON.stringify(pollData),
      success: function(response) {
        console.log('Data successfully sent!');
        console.log(response);
      },
      error: function(error) {
        console.error("Error submitting poll ",error);
      }
    });
  });
});
