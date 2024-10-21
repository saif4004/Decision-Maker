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
