
// Client facing scripts here
$(document).ready(function() {
  let option_counter =0;
  let pollData = {};
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
    const title1 = $('input[name="title1"').val();
    const title2 = $('input[name="title2"').val();
    const title3 = $('input[name="title3"').val();
    const desc_1 = $('textarea[name="descrption_1"').val();
    const desc_2 = $('textarea[name="descrption_2"').val();
    const desc_3 = $('textarea[name="descrption_3"').val();

     pollData = {
      question: question,
      titles: [title1, title2, title3],
      descriptions: [desc_1, desc_2, desc_3]
    };
    $.ajax({
      url: '/polls/create_poll', //End point go here
      method: 'POST',
      data: pollData,
      success: function(response) {
        // console.log('Data successfully sent!');
        // console.log(response);
        $('#adminLink').attr('href', response.adminLink).text(response.adminLink);
        $('#sharedLink').attr('href', response.sharedLink).text(response.sharedLink);
        $('.result').show();
      },
      error: function(error) {
        console.error("Error submitting poll ",error);
      }
    });
    // Display the poll question and options

    $('.question_display').text(pollData.question); // Set the question
    $('.options_display').empty(); // Clear previous options

    // Loop through the options and add them to the list
    pollData.titles.forEach(function(title, index) {
      $('.options_display').append(`<li><strong>Option ${index + 1}:</strong> ${title}</li>`);
    });

    // display section
    $('.poll_display').show();

    //Dropdowns for options starts here

    //clear the voting sections before creating dropdown
    $('.options_ranks').empty();

    //loop through to make the dropdowns
    pollData.titles.forEach(function(opt,index) {
      let votingDropDowns =`
        <label for="options_votes_${index}">Vote for ${opt}</label>
        <select class="options_votes_${index}" name="options_votes_${index}">
        <option value="">Select rank</option>`;
        for (let i =0; i < pollData.titles.length; i++) {
          votingDropDowns += `<option value="${i+1}">${i+1}</option>`;
        }
        votingDropDowns += `</select>`;
        $('.options_votes').append(votingDropDowns);
    });

  });

  //Handle voting here
  // Change options from index to the actual name of the option
  $('#vote').submit(function(event) {
    event.preventDefault();
    const votingCount =[];
    $('.options_votes select').each(function(index) {
      const vote = $(this).val();
      const optionName = pollData.titles[index];
      votingCount.push({option: optionName, rank: parseInt(vote)});
    });
    const votingData = {
      question: $('.question_display').text(),
      choices: votingCount
    };
    console.log("VotingData: ",votingData);
    $.ajax ({
      url:'/responses/submit_responses', //Voting routes
      method:'POST',
      data: votingData,
      success: function(response) {
        // console.log('Data successfully sent!');
        // console.log(response);
      },
      error: function(error) {
        console.error("Error submitting votes ",error);
      }
    });
  });
});
