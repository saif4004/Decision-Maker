
const randomUrlGenerator = function() {
  const url = 'http://localhost:8080/polls/';
  const link = url + Math.random().toString(36).slice(2);
  return link;
};

const bordaCount = function(response) {
  let winningStr = "";
  let tie = 'There was a tie! Please change your rankings.'
  let resultsArray = [];
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
    let obj1 = { winner: winningStr, votes: countChoice1 };
    let obj2 = { choice2: string2, votes: countChoice2 };
    let obj3 = { choice3: string3, votes: countChoice3 };
    resultsArray.push(obj1, obj2, obj3);
    return resultsArray;
  };

  if (countChoice2 > countChoice1 && countChoice2 > countChoice3) {
    winningStr = string2;
    let obj1 = { choice1: string1, votes: countChoice1 };
    let obj2 = { winner: winningStr, votes: countChoice2 };
    let obj3 = { choice3: string3, votes: countChoice3 };
    resultsArray.push(obj2, obj1, obj3);
    return resultsArray;
  };

  if (countChoice3 > countChoice2 && countChoice3 > countChoice1) {
    winningStr = string3;
    let obj1 = { choice1: string1, votes: countChoice1 };
    let obj2 = { choice2: string2, votes: countChoice2 };
    let obj3 = { winner: winningStr, votes: countChoice3 };
    resultsArray.push(obj3, obj1, obj2);
    return resultsArray;
  };

  if (winningStr === "") {
    return console.log(tie);
  }
};

module.exports = { randomUrlGenerator, bordaCount };
