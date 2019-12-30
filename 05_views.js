// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  title: 'Welcome, nice to see you!',
  text: `<br> Thank you for participating in my experiment! <br>
	<br>
	You will need around <b>7 minutes</b> to complete the experiment. Please make sure that you will not be distracted.
  Switch off all messaging systems, your phone, any background music etc., and try to concentrate as much as possible on the task at hand.
  <br>
	<br>
	Click on the button below to receive your instructions.
    `,
  buttonText: 'Show instructions'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `   <br />
            <b>Imagine that</b> you are the head of the Sacred Heart Hospital and responsible for the financial
            matters. For the child cancer treatment section you have a budget of $1,000,000 per year.
            The government has decided to shorten your budget for the next year
            by the amount of money that you have not spent in the last year. So if you spent
            just $800,000 of the one million dollar, you will only get $800,000 for the next
            year.
            <br />
            Unfortunately, you have not managed to spend the whole $1,000,000 for this year, but you know that in the
            next year you will need all the money you can get, because most of the medical
            devices for cancer surgery need to be maintained or even replaced.
            With a heavy heart but thinking about the sick children you decide that there is
            no other way than forging some of the hospital's expenses, in order to let them
            appear higher.
            <br />
            In the following you will see some of the expenses and what they are for.
            Your task is to revise the expenses <b>upwards</b>, so that you won't loose money for
            next year's budget.`,
  buttonText: 'go to trials'
});

const instructions2 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions2',
  title: 'General Instructions',
  text: `   <br />
            <b>Imagine that</b> you are the head of the Sacred Heart Hospital and responsible for the financial
            matters. For the child cancer treatment section you have a budget of $1,000,000 per year.
            Unfortunately, you have already spent all the money for this year, but you still have
            to pay the maintenance costs for the medical devices for cancer surgery.
            <br />
            If the government sees in the annual report that you spent more money than you were allowed to,
            they will shorten your budget for the next year by the amount of money exceeding the $1,000,000.
            This means, if you spent $1,300,000 this year, you will only get $700,000 next year.
            You know that next year you will need all the money you can get, because you want
            to test the new, promising cancer treatment method that one of your doctors has developed.
            <br />
            With a heavy heart but thinking about the sick children who have no chance of curing
            without the new treatment, you decide that there is no other way than forging
            some of the hospital's expenses, in order to let them appear lower.
            <br />
            <br />
            In the following you will see some of the expenses and what they are for.
            Your task is to revise the expenses <b>downwards</b>, so that you won't loose money for
            next year's budget.`,
  buttonText: 'go to trials'
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/





const textbox_input_2A = magpieViews.view_generator("textbox_input", {
  // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
  trials: trial_info_.textbox_input.length,
  // name should be identical to the variable name
  name: 'textbox_input_2A',
  data: _.shuffle(trial_info_.textbox_input)
},
{
  stimulus_container_generator: function (config, CT) {
    return `<div class='magpie-view'>
    <h1 class='magpie-view-title'>${config.title}</h1>
    <p class='magpie-view-question magpie-view-qud'>${config.data[CT].QUD}</p>
     </div>`
  }
}
);




const textbox_input_2B = magpieViews.view_generator("textbox_input", {
  // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
  trials: trial_info_B.textbox_input.length,
  // name should be identical to the variable name
  name: 'textbox_input_2B',
  data: _.shuffle(trial_info_B.textbox_input)
},
 {
  stimulus_container_generator: function (config, CT) {
       return `<div class='magpie-view'>
    <h1 class='magpie-view-title'>${config.title}</h1>
    <p class='magpie-view-question magpie-view-qud'>${config.data[CT].QUD}</p>
     </div>`;
 }
}
);


// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
