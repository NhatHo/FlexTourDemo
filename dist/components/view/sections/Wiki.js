"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var SectionHeader_1 = require("./SectionHeader");
var Wiki = (function (_super) {
    __extends(Wiki, _super);
    function Wiki() {
        _super.apply(this, arguments);
    }
    Wiki.prototype.render = function () {
        return React.createElement("section", {id: "wiki"}, React.createElement(SectionHeader_1.SectionHeader, {header: "FlexTourJS API", subHeader: "You can learn more about how to write the tour description."}), React.createElement("div", {className: "container"}, React.createElement("ul", {className: "nav nav-tabs nav-justified"}, React.createElement("li", {className: "active wiki-tab-header", id: "tourAttrTab"}, React.createElement("a", {href: "#tourApi", onClick: this._switchToTour.bind(this)}, "Tour Attributes")), React.createElement("li", {className: "wiki-tab-header", id: "stepAttrTab"}, React.createElement("a", {href: "#stepApi", onClick: this._switchToStep.bind(this)}, "Step Attributes"))), React.createElement("div", {className: "tab-content"}, React.createElement("div", {className: "tab-pane active", id: "tourApi"}, this._tourAttributesBlock()), React.createElement("div", {className: "tab-pane", id: "stepApi"}, this._stepAttributesBlock()))));
    };
    Wiki.prototype._switchToStep = function (event) {
        event.preventDefault();
        event.stopPropagation();
        $("#stepAttrTab").addClass("active");
        $("#tourAttrTab").removeClass("active");
    };
    Wiki.prototype._switchToTour = function (event) {
        event.preventDefault();
        event.stopPropagation();
        $("#tourAttrTab").addClass("active");
        $("#stepAttrTab").removeClass("active");
    };
    Wiki.prototype._createAttributeLine = function (code, desc) {
        return React.createElement("li", null, React.createElement("span", {className: "attr-title"}, code), React.createElement("span", {className: "attr-desc"}, ": ", desc));
    };
    Wiki.prototype._tourAttributesBlock = function () {
        return React.createElement("ul", {className: "attributes-block-api"}, this._createAttributeLine("id (required)", "Each tour should have a unique id without WHITE SPACE, this is used for keeping track of which tour is being run. "), React.createElement("hr", null), this._createAttributeLine("", ""));
    };
    Wiki.prototype._stepAttributesBlock = function () {
        return React.createElement("ul", {className: "attributes-block-api"});
    };
    return Wiki;
}(React.Component));
exports.Wiki = Wiki;
//# sourceMappingURL=Wiki.js.map