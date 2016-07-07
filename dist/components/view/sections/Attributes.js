"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var SectionHeader_1 = require("./SectionHeader");
var AttributesBox_1 = require("./AttributesBox");
var Attributes = (function (_super) {
    __extends(Attributes, _super);
    function Attributes() {
        _super.apply(this, arguments);
    }
    Attributes.prototype.render = function () {
        return React.createElement("section", {id: "attributes"}, React.createElement("div", {className: "container"}, React.createElement(SectionHeader_1.SectionHeader, {
            header: "How to use it?",
            subHeader: "Your tours will be described in form of array of JSON object. Each object will declare 1 tour."
        }), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-lg-12"}, React.createElement("ul", {className: "attributes-list"}, React.createElement(AttributesBox_1.AttributesBox, {
            leftHeader: "Required Tour Attributes",
            rightHeader: "Required Step Attributes",
            leftBlock: this.makeRequiredLeftBlock(),
            rightBlock: this.makeRequiredRightBlock()
        }), React.createElement(AttributesBox_1.AttributesBox, {
            leftHeader: "Optional Tour Attributes",
            rightHeader: "Optional Step Attributes",
            leftBlock: this.makeOptionalLeftBlock(),
            rightBlock: this.makeOptionalRightBlock()
        }))))));
    };
    Attributes.prototype.makeRequiredLeftBlock = function () {
        return React.createElement("ul", null, this.attributeStyles("id", "Each tour should have a unique id so that they can be found easier."));
    };
    Attributes.prototype.makeRequiredRightBlock = function () {
        return React.createElement("ul", null, this.attributeStyles("content", "This is what will be showed in the bubble of each step."), this.attributeStyles("target", "The DOM Element that the step bubble will be attached to."), this.attributeStyles("position", "The relative position of the bubble to the target: top, bottom, right, left or float. When you set this attribute to float, 'target' is no longer a required attribute."));
    };
    Attributes.prototype.makeOptionalLeftBlock = function () {
        return React.createElement("ul", null, this.attributeStyles("endOnEsc: {Boolean}", "Default true, enables the ability to end FlexTourJS runner when press ESC on keyboard."), this.attributeStyles("endOnOverlayClick: {Boolean}", "Default true, end FlexTourJS runner when users click on the overlay outside of target. If the target is small and users might misclick, you can disable this by setting to false."), this.attributeStyles("noButtons: {Boolean}", "Default false, when set to true it will disable all navigation buttons in all of the steps of the tour."), this.attributeStyles("noBack: {Boolean}", "Default false, when set to true, the Back button in all steps will be disabled."), this.attributeStyles("delay: {Integer}", "The framework will wait until this period of time to pass before showing Each step bubble."), this.attributeStyles("waitIntervals: {Integer}", "Usually this is used with 'retries' attribute, this attribute defines the cool down period between retries."), this.attributeStyles("retries: {Integer}", "The total number of attempts that the framework will make before it moves on."), this.attributeStyles("canInteract: {Boolean}", "Default false, when set to true users can interact with all targets in the tour, unless it is redefined in specific step. This attribute should only be used when you are certain that users playing around with target will not break the flow."), this.attributeStyles("nextButton: {String}", "Change the text of the next button to a new text. Usually used for localization."), this.attributeStyles("backButton: {String}", "Change the text of the back button to a new text. Usually used for localization."), this.attributeStyles("skipButton: {String}", "Change the text of the skip button to a new text. Usually used for localization."), this.attributeStyles("doneButton: {String}", "Change the text of the done button to a new text. Usually used for localization."));
    };
    Attributes.prototype.makeOptionalRightBlock = function () {
        return React.createElement("ul", null, React.createElement("div", {className: "optional-subheader"}, React.createElement("b", null, "Notice:"), "All of the attributes set in tour are inherited by each step. You can override tour’s attributes or add new attribute to each step by re-defining the attribute in step object."), this.attributeStyles("type: {String}", "Default 'info', there are 2 types in FlexTourJS: 'info', 'action'. Type 'info' represents steps where users just read the information in the bubble and move on. While 'action' indicates that users have to interact with the target as described in the step content."), this.attributeStyles("nextOnTarget: {Boolean}", "This attribute enables FlexTourJS to proceed to the next step when the target of the current step is triggered."), this.attributeStyles("transition: {Boolean}", "When a step is marked as 'transition', FlexTourJS immediately proceeds to next step right after showing the bubble of current step. This attribute should only be used when you know the next step will take quite some time to render: server call, create new things, etc."), this.attributeStyles("modal: {Boolean}", "When set the true, FlexTourJS will attach a listener to scroll event, it will debounce every 200 milliseconds and re-render all components in FlexTourJS. This is to ensure that the bubble is always attached to target even when users scroll to the bottom of the page. This is usually used for floating element: popup dialogs, popup messages, etc."), this.attributeStyles("scrollLock: {Boolean}", "Similar to 'modal' attribute, this attribute is mostly used for modal element in the DOM. However, by setting this attribute to true, FlexTour will temporarily disable scolling in your app. The current scroll position will be restored when you enter the next step or end FlexTourJS. This method will cause less performance hit to your application compared to 'modal' as it does NOT re-render on scroll."), this.attributeStyles("skip: {Integer}", "This attribute enables branching to another step with given index number. Skip button will be show in this step. On click, the framework will skip to the step with the given index. This attribute is usually used hand and hand with proceed if function in 'prerequisites' attribute."), this.attributeStyles("prerequisites: {String[]}", "This attribute is the main feature of FlexTourJS. There are 3 types of prerequisites you can set: conditional functions, wait for a function to do something and proceed to next step if some conditions are met. Respectively, the syntax of each one is as follow: condFunctionName, ?functionName:params, !functionName:params. The framework loops through the array and executes 1 function at a time. Now hold on to your hat!."), React.createElement("ul", null, this.attributeStyles("condFunctionName: {Boolean}", "When a conditional function returns false, the framework will stop checking and stay at the same step. This is useful when you want to make sure users do something before they enter next step."), this.attributeStyles("waitForFunction: {Boolean}", "FlexTourJS provides isVisible (check if DOM element is visible), and doesExist (check if DOM element exists) as default function. You can also create your own function. When the function returns false, the framework will retry after a set time interval set in tour description. When it runs out of retry attempts, it will check the next function (usually proceed if function)."), this.attributeStyles("proceedIfFunctiion: {Boolean}", "It is recommended to have a skip if prerequisite after a wait for function as the last resort. When proceed if function returns false, it means that the conditions are not met and FlexTourJS will not show the next step but skip to the step you set in 'skip' attribute. If 'skip' attribute is not set, FlexTourJS will skip 2 steps ahead to avoid failure in next step.")));
    };
    Attributes.prototype.attributeStyles = function (attribute, description) {
        return React.createElement("li", {className: "params-text"}, React.createElement("div", null, React.createElement("h5", {className: "attribute-title"}, attribute), React.createElement("p", null, description)));
    };
    return Attributes;
}(React.Component));
exports.Attributes = Attributes;
//# sourceMappingURL=Attributes.js.map