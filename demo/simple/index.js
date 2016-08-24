/**
 * Created by NhatHo on 2016-08-18.
 */

(function ($) {
    "use strict"; // Start of use strict
    var tourDesc = [{
        id: "simple-tour",
        steps: [{
            content: "Introduce the top position of the bubble.",
            position: "left",
            target: ".text-center",
            title: "Top position"
        }, {
            content: "Bubble on the left of the target.",
            position: "top",
            target: "#leftblock",
            title: "Left position"
        }, {
            content: "Bubble on the right of the target.",
            position: "bottom",
            target: "#rightblock",
            title: "Right position."
        }, {
            content: "Bubble under the target.",
            position: "right",
            target: "#bottomblock",
            title: "Bottom position."
        }, {
            content: "Read the explanations for more information.",
            position: "top",
            target: ".success .container",
            type: "info"
        }]
    }];

    $("#demoButton").on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var flextour = new FlexTour(tourDesc); // No functions list was given
        flextour.run();
    });
})(jQuery); // End of use strict