// In this file you can specify the trial data for your experiment
function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low)
}

function random3digits(low = 0, high = 999) {
  var num = Math.floor(Math.random() * (high - low) + low);

  if (num < 10) {
    return "00" + num
  } else if (num < 100) {
    return "0" + num
  } else {
    return num
  }
}



const trial_info_ = {
    textbox_input: [
        {
            question: "New blankets for the kid's beds. Costs: <b> $" + randomInt(1,9) + "," + random3digits() + "</b>" ,
            QUD: "In the textbox below, revise the expense <b>upwards</b> so that you won't loose money for next year's budget.",
            min_chars: 0
        },
        {
            question: "New medical equipment. Costs: <b> $" + randomInt(50,99) + "," + random3digits() + "</b>",
            QUD: "In the textbox below, revise the expense <b>upwards</b> so that you won't loose money for next year's budget.",
            min_chars: 0
        },
        {
            question: "Food supplier expenses. Costs: <b>$" + randomInt(10,49) + "," + random3digits() + "</b>",
            QUD: "In the textbox below, revise the expense <b>upwards</b> so that you won't loose money for next year's budget.",
            min_chars: 0
        },
        {
            question: "Salary expenses. Costs: <b>$" + randomInt(100,999) + "," + random3digits() + "</b>",
            QUD: "In the textbox below, revise the expense <b>upwards</b> so that you won't loose money for next year's budget.",
            min_chars: 0
        },
        {
            question: "Drug expenses. Costs:<b> $" + randomInt(50,99) + "," + random3digits() + "</b>",
            QUD: "In the textbox below, revise the expense <b>upwards</b> so that you won't loose money for next year's budget.",
            min_chars: 0
        },
        {
            question: "Christmas party expenses. Costs: <b>$" + randomInt(1,9) + "," + random3digits() + "</b>",
            QUD: "In the textbox below, revise the expense <b>upwards</b> so that you won't loose money for next year's budget.",
            min_chars: 0
        },
        {
            question: "Cancer research. Costs:<b> $" + randomInt(50,99) + "," + random3digits() + "</b>",
            QUD: "In the textbox below, revise the expense <b>upwards</b> so that you won't loose money for next year's budget.",
            min_chars: 0
        },
        {
            question: "Clown hired for the entertainment of the kids. Costs: <b>$" + randomInt(1,9) + "," + random3digits() + "</b>",
            QUD: "In the textbox below, revise the expense <b>upwards</b> so that you won't loose money for next year's budget.",
            min_chars: 0
        },
        {
            question: "Toys for the children's entertainment room. Costs:<b> $" + randomInt(10,49) + "," + random3digits() + "</b>",
            QUD: "In the textbox below, revise the expense <b>upwards</b> so that you won't loose money for next year's budget.",
            min_chars: 0
        }
      ]
    };

const trial_info_B = {
        textbox_input: [
            {
                question: "New blankets for the kid's beds. Costs: <b> $" + randomInt(1,9) + "," + random3digits() + "</b>" ,
                QUD: "In the textbox below, revise the expense <b>downwards</b> so that you won't loose money for next year's budget.",
                min_chars: 0
            },
            {
                question: "New medical equipment. Costs: <b> $" + randomInt(50,99) + "," + random3digits() + "</b>",
                QUD: "In the textbox below, revise the expense <b>downwards</b> so that you won't loose money for next year's budget.",
                min_chars: 0
            },
            {
                question: "Food supplier expenses. Costs: <b>$" + randomInt(10,49) + "," + random3digits() + "</b>",
                QUD: "In the textbox below, revise the expense <b>downwards</b> so that you won't loose money for next year's budget.",
                min_chars: 0
            },
            {
                question: "Salary expenses. Costs: <b>$" + randomInt(100,999) + "," + random3digits() + "</b>",
                QUD: "In the textbox below, revise the expense <b>downwards</b> so that you won't loose money for next year's budget.",
                min_chars: 0
            },
            {
                question: "Drug expenses. Costs:<b> $" + randomInt(50,99) + "," + random3digits() + "</b>",
                QUD: "In the textbox below, revise the expense <b>downwards</b> so that you won't loose money for next year's budget.",
                min_chars: 0
            },
            {
                question: "Christmas party expenses. Costs: <b>$" + randomInt(10,49) + "," + random3digits() + "</b>",
                QUD: "In the textbox below, revise the expense <b>downwards</b> so that you won't loose money for next year's budget.",
                min_chars: 0
            },
            {
                question: "Cancer research. Costs:<b> $" + randomInt(50,99) + "," + random3digits() + "</b>",
                QUD: "In the textbox below, revise the expense <b>downwards</b> so that you won't loose money for next year's budget.",
                min_chars: 0
            },
            {
                question: "Clown hired for the entertainment of the kids. Costs: <b>$" + randomInt(1,9) + "," + random3digits() + "</b>",
                QUD: "In the textbox below, revise the expense <b>downwards</b> so that you won't loose money for next year's budget.",
                min_chars: 0
            },
            {
                question: "Toys for the children's entertainment room. Costs:<b> $" + randomInt(10,49) + "," + random3digits() + "</b>",
                QUD: "In the textbox below, revise the expense <b>downwards</b> so that you won't loose money for next year's budget.",
                min_chars: 0
            }
          ]
        };
