"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var SectionHeader_1 = require("./SectionHeader");
var AttributeBox_1 = require("./AttributeBox");
var Attributes = (function (_super) {
    __extends(Attributes, _super);
    function Attributes() {
        _super.apply(this, arguments);
    }
    Attributes.prototype.render = function () {
        return React.createElement("section", {id: "attributes"}, React.createElement(SectionHeader_1.SectionHeader, {header: "How to use it?", subHeader: "Your tours will be described in form of array of JSON objects. Each object will describe 1 tour."}), React.createElement("div", {className: "container"}, React.createElement("div", {className: "row"}, React.createElement(AttributeBox_1.AttributeBox, {header: "Let's Start Simple", subHeader: "How to create a simple tour with unidirectional flow?", content: this._regularTourRunner()}), React.createElement(AttributeBox_1.AttributeBox, {header: "Error Checkings", subHeader: "How to capture dynamic components successfully?", content: this._prerequisitesAndBranching()})), React.createElement("div", {className: "row"}, React.createElement(AttributeBox_1.AttributeBox, {header: "Wait For It", subHeader: "How to make your tours wait for next step and setup backup route?", content: this._waitForElementAndFinalResort()}), React.createElement(AttributeBox_1.AttributeBox, {header: "One Page Is Not Enough", subHeader: "How to show tour in multiple pages, stop and resume current tour?", content: this._multipagePauseAndResume()})), React.createElement("div", {className: "row"}, React.createElement(AttributeBox_1.AttributeBox, {header: "Customized Triggers For Next Step", subHeader: "How to allow drag and drop, trigger next step on application's button clicked?", content: this._nextTriggerDnD()}), React.createElement(AttributeBox_1.AttributeBox, {header: "You Can Do Whatever You Want.", subHeader: "How to change color scheme, and create your own bubbles?", content: this._standaloneBubble()})), React.createElement("div", {className: "row"}, React.createElement(AttributeBox_1.AttributeBox, {header: "FlexTourJS Follows Your Cool Features", subHeader: "How to always keep the tour description at your step target?", content: this._floatingElements()}), React.createElement(AttributeBox_1.AttributeBox, {header: "Global Application Translation Made Easy", subHeader: "How to translate your tour into multiple languages?", content: this._nlsTranslation()}))));
    };
    Attributes.prototype._linkToDemoAndSource = function (demoLink, sourceLink) {
        return React.createElement("div", {className: "link"}, React.createElement("p", null, React.createElement("a", {
            href: demoLink,
            className: "btn btn-primary demo-button",
            target: "_blank"
        }, React.createElement("i", {className: "fa fa-link"}), " Demo!"), React.createElement("a", {
            href: sourceLink,
            className: "btn btn-success",
            target: "_blank"
        }, React.createElement("i", {className: "fa fa-github"}), " Code?")));
    };
    Attributes.prototype._attributeContentBlock = function (body, buttons) {
        return React.createElement("div", {className: "col-lg-12 attributes-content"}, React.createElement("p", null, body), buttons);
    };
    Attributes.prototype._regularTourRunner = function () {
        var body = "In this example, FlexTourJS simply moves between steps without any fancy features. This might be used for simple applications where each step exist and are visible in the DOM when the page is loaded.";
        var buttons = this._linkToDemoAndSource("regular", "regular");
        return this._attributeContentBlock(body, buttons);
    };
    Attributes.prototype._prerequisitesAndBranching = function () {
        var body = "When your applications get complicated, maybe the next step in your tour is important to show, but it might not be available yet. FlexTourJS allows you to slow down the flow, and possibly skips steps entirely in case something bad happens.";
        var buttons = this._linkToDemoAndSource("prerequisite", "prerequisite");
        return this._attributeContentBlock(body, buttons);
    };
    Attributes.prototype._waitForElementAndFinalResort = function () {
        var body = "Consider this: when your application makes an AJAX call or processing something that takes up a lot of time, your tour might need to wait for it to be done. This demo shows you how to make the tour wait, while explaining to users what is going on. Furthermore, if anything goes wrong in the process, you can setup a backup route so that your tour will not end abruptly.";
        var buttons = this._linkToDemoAndSource("wait", "wait");
        return this._attributeContentBlock(body, buttons);
    };
    Attributes.prototype._multipagePauseAndResume = function () {
        var body = "When your tour spans multiple pages, just set the multipage flag to true in the step that opens new page and FlexTourJS will take care of the rest. Requirement: the next page must also have FlexTourJS framework and current tour loaded. The framework will automatically continue your tour from previous page. Furthermore, you can pause and resume the tour anytime you like.";
        var buttons = this._linkToDemoAndSource("multipage", "multipage");
        return this._attributeContentBlock(body, buttons);
    };
    Attributes.prototype._nextTriggerDnD = function () {
        var body = "Enabling dragAndDrop flag to true in step description will allow you to drag and drop target around without breaking your current tour. Directional buttons in the bubble are not the only way to control the flow, you can make a button in your application to next step trigger. This demo will show you how.";
        var buttons = this._linkToDemoAndSource("trigger", "trigger");
        return this._attributeContentBlock(body, buttons);
    };
    Attributes.prototype._standaloneBubble = function () {
        var body = "You don't think FlexTourJS bubble is good enough for you? No problem, you can just create your own version with functional buttons. This demo will show you how to do that. You don't like the default color and styles? Just import the less file and override the variables with your own selections.";
        var buttons = this._linkToDemoAndSource("standalone", "standalone");
        return this._attributeContentBlock(body, buttons);
    };
    Attributes.prototype._floatingElements = function () {
        var body = "More often that not your application has a floating element which never stays still. FlexTourJS has 2 ways to handle this scenario, either you block scrolling when this step is showed, or you let the framework re-render every 200 milliseconds.";
        var buttons = this._linkToDemoAndSource("floating", "floating");
        return this._attributeContentBlock(body, buttons);
    };
    Attributes.prototype._nlsTranslation = function () {
        var body = "Your application can go global and you might need to translate the instruction in the tour. FlexTourJS offers an easy way out so that you do not need to create and maintain multiple tour description JSON objects. Step description will be injected automatically.";
        var buttons = this._linkToDemoAndSource("floating", "floating");
        return this._attributeContentBlock(body, buttons);
    };
    return Attributes;
}(React.Component));
exports.Attributes = Attributes;
//# sourceMappingURL=Attributes.js.map