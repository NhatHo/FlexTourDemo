/**
 * Created by NhatHo on 2016-08-19.
 */
(function ($) {
    "use strict"; // Start of use strict
    var tourDesc = [{
        id: "longprocess-tour",
        retries: 6,
        waitIntervals: 1000,
        steps: [{
            content: "Click on this button to open a bigger view of the image.",
            position: "top",
            target: "a[href='#portfolioModal1']",
            nextStepTrigger: "@target@",
            title: "Circus Icon",
            type: "action",
            noButtons: true
        }, {
            content: "The modal might or might not show up. This step tells you to wait a bit, if the modal decides not to show, the framework will skip to the 5th step (the last step).",
            position: "float",
            transition: true
        }, {
            content: "Congratulations you're lucky today. If you want to see the skipping feature in action, end the tour and try again (50-50 chance).",
            position: "left",
            target: ".modal-body",
            title: "Modal view",
            prerequisites: ["?isVisible:@target@", "!isVisible:@target@"],
            delay: 500,
            noBack: true,
            modal: true,
            skip: 5,
            noSkip: true
        }, {
            content: "Click on 'Close' to get back to main page.",
            position: "right",
            type: "action",
            target: ".modal-body button",
            title: "Right position.",
            nextStepTrigger: "@target@",
            flashTarget: "@target@",
            modal: true
        }, {
            content: "Read the explanations for more information.",
            position: "top",
            target: ".success .container",
            type: "info",
            noBack: true
        }]
    }];

    var functionsList = {};

    $("#demoButton").on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var flextour = new FlexTour(tourDesc, functionsList); // A list of functions is given
        flextour.run();
    });

    $("a[href='#portfolioModal1']").on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var number = Math.floor((Math.random() * 4) + 1);
        console.log("Hello: " + number);
        if (number % 2 == 0) {
            setTimeout(function () {
                $("#portfolioModal1").css("display", "block");
            }, 5000);
        }
    });

    $("#closemodal").on('click', function (e) {
        e.preventDefault();
        $("#portfolioModal1").css("display", "none");
    });
})(jQuery); // End of use strict