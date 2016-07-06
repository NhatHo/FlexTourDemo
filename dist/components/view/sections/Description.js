"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var NewFeatures_1 = require("./NewFeatures");
var SectionHeader_1 = require("./SectionHeader");
var Description = (function (_super) {
    __extends(Description, _super);
    function Description() {
        _super.apply(this, arguments);
    }
    Description.prototype.render = function () {
        return (React.createElement("section", {id: "desc"}, React.createElement("div", {className: "container"}, React.createElement(SectionHeader_1.SectionHeader, {header: "What's New?", subHeader: "The developers now can fully control the flow of the tour to compensate for application's performance."}), React.createElement("div", {className: "row text-center"}, React.createElement(NewFeatures_1.NewFeatures, {title: "Shall you pass?", content: "You can check if the next step should be showed or not. FlexTourJS will not show the next step until all prerequisites are met.", icon: "fa-check-square", code: "prerequisites: ['condition1','condition2', ...]"}), React.createElement(NewFeatures_1.NewFeatures, {title: "Are you ready?", content: "Processing might take some time, FlexTourJs ensures that the next step will be displayed after your application has completed rendering.", icon: "fa-clock-o", code: "prerequisites: ['?isVisible:$el', ...]"}), React.createElement(NewFeatures_1.NewFeatures, {title: "Uh oh!", content: "When the target of your next step does not show or it is conditional, you can set up a back up route and FlexTourJS will flow to it. Without skip attribute, FlexTourJS will just skip ahead 1 step.", icon: "fa-meh-o", code: "skip: {branch-step-number}, prerequisites: ['!skipCondition:$el', ...]"})), React.createElement("div", {className: "row text-center"}, React.createElement(NewFeatures_1.NewFeatures, {title: "Power!!!", content: "The power is in your hands, you can create new bubble styles, add new buttons and attach functionalities to them. Let your imagination run wild.", icon: "fa-unlock", code: "buttons: ['buttonName: buttonStyle: buttonOnClick: buttonOnMouseUp: buttonOnMouseDown: buttonMouseOver: buttonMouseOut', ...]"}), React.createElement(NewFeatures_1.NewFeatures, {title: "Show off features?", content: "FlexTourJS will not limit your application in any way, you can do drag and drop, popup menu, dropdown menu, etc. without breaking your flow.", icon: "fa-arrows", code: "dragAndDrop: true, modal: true, ..."}), React.createElement(NewFeatures_1.NewFeatures, {title: "Everyone can use it!", content: "Yes, everyone can use it because FlexTourJS comes with NLS ready as well as fully accessible using keyboard, and even screen reader (coming soon).", icon: "fa-universal-access", code: "nextButton:{newName}, backButton:{newName}, skipButton:{newName}, doneButton:{newName}, ..."})))));
    };
    return Description;
}(React.Component));
exports.Description = Description;
//# sourceMappingURL=Description.js.map