/**
 * Created by NhatHo on 2016-08-19.
 */
(function ($) {
    "use strict"; // Start of use strict
    var tourDesc = [{
        id: "coolfeatures-tour",
        retries: 6,
        waitIntervals: 1000,
        steps: [{
            content: "<b>First Try:</b> Drag this image and drop it on anywhere outside Destination panel.<br /><b>Second Try:</b> Drag this image to the destination panel",
            position: "bottom",
            target: "#circus",
            title: "DND Feature",
            type: "action",
            noButtons: true,
            dragAndDrop: true
        }, {
            content: "Nice job!!! In this step you won't be able to drag and drop this icon anymore.",
            position: "bottom",
            target: "#circus",
            delay: 100,
            type: "info",
            prerequisites: ["successDrop"],
            noBack: true
        }, {
            content: "Click on this button to go to the next step.",
            position: "left",
            target: "#revert",
            nextStepTrigger: "@target@",
            title: "Customized Trigger Feature",
            type: "action",
            noButtons: true
        }, {
            content: "Read the explanations for more information.",
            position: "top",
            target: ".success .container",
            type: "info",
            noBack: true
        }]
    }];

    var functionsList = {};
    functionsList.successDrop = function () {
        return $("#dropZone").find("#circus").length > 0;
    };

    $("#demoButton").on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var flextour = new FlexTour(tourDesc, functionsList); // A list of functions is given
        flextour.run();
    });

    $("#revert").on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $("#circus").detach().appendTo('#srcZone');
    });
})(jQuery); // End of use strict

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}