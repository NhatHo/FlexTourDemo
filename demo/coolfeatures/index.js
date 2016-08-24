/*******************************************************************************
 * Copyright (c) 2016. MIT License.
 * NhatHo-nhatminhhoca@gmail.com
 ******************************************************************************/

(function ($) {
    "use strict";
    var tourDesc = [{
        id: "coolfeatures-tour",
        retries: 6,
        waitIntervals: 500,
        steps: [{
            content: "Creating a tour for static page is easy, however when your tour has a popup menu or modal things get more complicated. Click on this picture to see more.",
            target: "#cake",
            position: "bottom",
            nextStepTrigger: "@target@",
            prerequisites: ["?isVisible:@target@"],
            type: "action",
            noButtons: true
        }, {
            content: "By default the framework will re-render all its components when you scroll so that it always stay with the modal. Of course this method will take some time, but try scrolling up and down.",
            position: "left",
            target: ".img-centered[src='../img/portfolio/cake.png']",
            title: "Default Settings",
            prerequisites: ["?isVisible:@target@"],
            delay: 500,
            noBack: true,
            modal: true
        }, {
            content: "In this step 'scrollLock' attribute is set to 'true'. It means that the scrolling capability of this page is temporarily disabled in this step. This method will hugely reduce processing time since there isn't any re-rendering.",
            position: "bottom",
            target: ".img-centered[src='../img/portfolio/cake.png']",
            title: "Scroll Lock Settings",
            prerequisites: ["?isVisible:@target@"],
            noBack: true,
            modal: true,
            delay: 300,
            scrollLock: true
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
})(jQuery); // End of use strict