const randomUrlGenerator = function() {
  const url = 'http://localhost:8080/polls/';
  const link = url + Math.random().toString(36).slice(2);
  return link;
};

const bordaCount = function(response) {
  let winningStr = "";
  let tie = 'There was a tie! Please change your rankings.'
  let countChoice1 = 0;
  let countChoice2 = 0;
  let countChoice3 = 0;

  let string1 = response[0].choice1;
  let string2 = response[0].choice2;
  let string3 = response[0].choice3;

  // counting for string1
  for (const index of response) {
    if(index.choice1 === string1) {
      countChoice1 += 2;
    }
    if (index.choice2 === string1) {
      countChoice1 += 1;
    }
  };

  // counting for string2
  for (const index of response) {
    if(index.choice1 === string2) {
      countChoice2 += 2;
    }
    if (index.choice2 === string2) {
      countChoice2 += 1;
    }
  };

// counting for string3
  for (const index of response) {
    if(index.choice1 === string3) {
      countChoice3 += 2;
    }
    if (index.choice2 === string3) {
      countChoice3 += 1;
    }
  };

  if (countChoice1 > countChoice2 && countChoice1 > countChoice3) {
    winningStr = string1;
    return winningStr;
  };

  if (countChoice2 > countChoice1 && countChoice2 > countChoice3) {
    winningStr = string2;
    return winningStr;
  };

  if (countChoice3 > countChoice2 && countChoice3 > countChoice1) {
    winningStr = string3;
    return winningStr;
  };

  if (winningStr === "") {
    return console.log(tie);
  }
};

modules.export = { randomUrlGenerator, bordaCount }