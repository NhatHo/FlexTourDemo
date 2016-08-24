/*******************************************************************************
 * Copyright (c) 2016. MIT License.
 * NhatHo-nhatminhhoca@gmail.com
 ******************************************************************************/

(function ($) {
    "use strict";
    var tourDesc = [{
        id: "multipage-tour",
        retries: 6,
        waitIntervals: 500,
        pauseOnExit: true,
        steps: [{
            content: "Click on this icon to open a new page. In this step, 'multipage' attribute is set.",
            position: "top",
            retries: 1,
            waitIntervals: 300,
            target: "#circus",
            nextStepTrigger: "@target@",
            prerequisites: ["!doesExist:@target@"],
            title: "Multipage Feature",
            type: "action",
            noButtons: true,
            multipage: true
        }, {
            content: "Huray! The tour is continued. Now let's try the 'savePoint' feature of the framework. Click on the picture.",
            target: "#cake",
            position: "bottom",
            nextStepTrigger: "@target@",
            prerequisites: ["?isVisible:@target@"],
            title: "Save Point Feature",
            type: "action",
            noButtons: true,
            savePoint: true,
            delay: 300
        }, {
            content: "1. To explore the 'savePoint' feature, please end the tour now: press 'ESC' on your keyboard or click on the 'X' on the top right of the bubble.<br/>2. Close this modal.<br/>3. After that you should run the tour manually.",
            position: "bottom",
            target: ".img-centered[src='../img/portfolio/cake.png']",
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
        $("#portfolioModal1").css("display", "block");
    });

    $("#closemodal").on('click', function (e) {
        e.preventDefault();
        $("#portfolioModal1").css("display", "none");
    });
    var flextour = new FlexTour(tourDesc, functionsList); // A list of functions is given
    flextour.run();
})(jQuery); // End of use strict