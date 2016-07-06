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
        return React.createElement("section", {id: "attributes"}, React.createElement("div", {className: "container"}, React.createElement(SectionHeader_1.SectionHeader, {header: "How to use it?", subHeader: "Your tours will be described in form of array of JSON object. Each object will declare 1 tour."}), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-lg-12"}, React.createElement("ul", {className: "attributes-list"}, React.createElement(AttributesBox_1.AttributesBox, {icon: "fa-exclamation-circle", leftHeader: "Required Tour Attributes", rightHeader: "Required Step Attributes", leftBlock: this.makeRequiredLeftBlock(), rightBlock: this.makeRequiredRightBlock()}), React.createElement(AttributesBox_1.AttributesBox, {icon: "fa-question-circle", leftHeader: "Optional Tour Attributes", rightHeader: "Optional Step Attributes", leftBlock: this.makeOptionalLeftBlock(), rightBlock: this.makeOptionalRightBlock()}))))));
    };
    Attributes.prototype.makeRequiredLeftBlock = function () {
        return React.createElement("ul", null, this.attributeStyles("id", "Each tour should have a unique id so that they can be found easier."), this.attributeStyles("endOnEsc", "Default set to true, enable the ability to end FlexTourJS runner on pressing ESC on keyboard."), this.attributeStyles("endOnOverlayClick", "Default set to true, end FlexTourJS runner when users click on the overlay outside of target. If the target is small and users might misclick, you can disable this by setting to false."));
    };
    Attributes.prototype.makeRequiredRightBlock = function () {
        return React.createElement("ul", null, this.attributeStyles("content", ""));
    };
    Attributes.prototype.makeOptionalLeftBlock = function () {
        return React.createElement("div", null);
    };
    Attributes.prototype.makeOptionalRightBlock = function () {
        return React.createElement("div", null);
    };
    Attributes.prototype.attributeStyles = function (attribute, description) {
        return React.createElement("li", {className: "params-text"}, React.createElement("div", null, React.createElement("h5", {className: "attribute-title"}, attribute), React.createElement("p", null, description)));
    };
    return Attributes;
}(React.Component));
exports.Attributes = Attributes;
//# sourceMappingURL=Attributes.js.map