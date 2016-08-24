/**
 * Created by NhatHo on 2016-08-19.
 */
(function ($) {
    "use strict"; // Start of use strict
    var tourDesc = [{
        id: "errorcheckings-tour",
        retries: 2,
        waitIntervals: 300,
        steps: [{
            content: "Click on this button to open a bigger view of the image.",
            position: "top",
            target: "a[href='#portfolioModal1']",
            nextStepTrigger: "@target@",
            title: "Circus Icon",
            type: "action",
            noButtons: true
        }, {
            content: "This is the bigger view.<br/>After FlexTourJS found the modal to be visible, it will wait another extra 0.5 seconds then render the content bubble to compensate for any extra activities in the DOM.<br/>At the same time, it disables Back button so that users will not break the tour at all.",
            position: "left",
            target: ".modal-body",
            title: "Modal view",
            prerequisites: ["?isVisible:@target@"],
            delay: 500,
            noBack: true,
            modal: true
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
            content: "Click on this button to open a bigger view of the image.<br/>The next step will fail, so just wait a bit for FlexTourJS to do the check before skipping.",
            position: "top",
            type: "action",
            target: "a[href='#portfolioModal2']",
            title: "Cake Icon",
            nextStepTrigger: "@target@",
            noButtons: true
        }, {
            content: "This step will be skipped because the target does NOT exist.",
            position: "left",
            target: ".modal-body",
            prerequisites: ["?isVisible:@target@", "!isVisible:@target@"]
        }, {
            content: "Read the explanations for more information.",
            position: "top",
            target: ".success .container",
            type: "info"
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
        $("#portfolioModal1").css("display", "block");
    });

    $("#closemodal").on('click', function (e) {
        e.preventDefault();
        $("#portfolioModal1").css("display", "none");
    });
})(jQuery); // End of use strict