/*******************************************************************************
 * Copyright (c) 2016. MIT License.
 * NhatHo-nhatminhhoca@gmail.com
 ******************************************************************************/

(function ($) {
    "use strict";
    var tourDesc = [{
        id: "customized-style-tour",
        steps: [{
            content: "This step has 'type: \"number\"' attribute which shows current step number instead of icons.",
            position: "left",
            target: ".text-center",
            type: "number"
        }, {
            content: "In this step the 'buttons: Array[Object]' is used which create customized buttons in the bubble.",
            position: "top",
            target: "#leftblock",
            buttons: [{
                name: "Alert",
                style: "flextour-skip-button alert-button",
                onclick: function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    alert("Just showing you this");
                }
            }, {
                name: "Go Back",
                style: "flextour-back-button",
                onclick: "Back"
            }, {
                name: "Next Step",
                style: "flextour-next-button",
                onclick: "Next"
            }]
        }, {
            content: "Just a normal step with no special attribute set.",
            position: "bottom",
            target: "#rightblock"
        }, {
            content: "Similar to step 1, this step has 'type: \"number\" attribute.",
            position: "right",
            target: "#bottomblock",
            type: "number"
        }, {
            content: "Read the explanations for more information.",
            position: "top",
            target: ".success .container",
            type: "info",
            buttons: [{
                name: "Alert",
                style: "flextour-skip-button alert-button",
                onclick: function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    alert("This is the end of the tour.");
                }
            }, {
                name: "Go Back",
                style: "flextour-back-button",
                onclick: "Back"
            }, {
                name: "Hurah!",
                style: "flextour-next-button",
                onclick: "Done"
            }]
        }]
    }];

    var functionsList = {};

    $("#demoButton").on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var flextour = new FlexTour(tourDesc, functionsList); // A list of functions is given
        flextour.run();
    });
})(jQuery); // End of use strict