// In this file you initialize and configure your experiment using magpieInit

$("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };
    // first group revises numbers upwards, second downwards
    var groups = [instructions, instructions2];
    // sample one group randomly
    var group = [instructions, instructions2][Math.floor(Math.random() * 2)];
    //var group = _.sample([instructions, instructions2]);
    var index = groups.indexOf(group);
    // use the trials fitting to the specific group
    var trials = [textbox_input_2A, textbox_input_2B];
    var trial = trials[index];

    // calls magpieInit
    // in debug mode this returns the magpie-object, which you can access in the console of your browser
    // e.g. >> window.magpie_monitor or window.magpie_monitor.findNextView()
    // in all other modes null will be returned
    window.magpie_monitor = magpieInit({
        // You have to specify all views you want to use in this experiment and the order of them

        views_seq: [
            intro,
            general_instructions,
            group, // instructions for sampled group
            trial, // trials for sampled group
            post_test,
            thanks,
        ],

        // Here, you can specify all information for the deployment
        deploy: {
            experimentID: "INSERT_A_NUMBER",
            serverAppURL: "https://magpie-demo.herokuapp.com/api/submit_experiment/",
            // Possible deployment methods are:
            // "debug" and "directLink"
            // As well as "MTurk", "MTurkSandbox" and "Prolific"
            deployMethod: "debug",
            contact_email: "YOUREMAIL@wherelifeisgreat.you",
            prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
        },
        // Here, you can specify how the progress bar should look like
        progress_bar: {
            in: [
                // list the view-names of the views for which you want a progress bar
                //textbox_input_2A.name,
                //textbox_input_2B.name,
                trial.name,
            ],
             // Possible styles are "default", "separate" and "chunks"
            style: "separate",
            width: 100
        }
    });
});
