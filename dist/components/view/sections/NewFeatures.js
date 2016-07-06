"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var NewFeatures = (function (_super) {
    __extends(NewFeatures, _super);
    function NewFeatures() {
        _super.apply(this, arguments);
    }
    NewFeatures.prototype.render = function () {
        return React.createElement("div", {className: "col-md-4"}, React.createElement("span", {className: "fa-stack fa-4x"}, React.createElement("i", {className: "fa fa-circle fa-stack-2x text-primary"}), React.createElement("i", {className: this.getIconClass(this.props.icon)})), React.createElement("h4", {className: "desc-heading"}, this.props.title), React.createElement("p", {className: "desc-content"}, this.props.content), React.createElement("div", {className: "well well-sm"}, React.createElement("i", {className: "fa fa-code"}, " "), " ", this.props.code, " ", React.createElement("i", {className: "fa fa-code"}, " ")));
    };
    NewFeatures.prototype.getIconClass = function (icon) {
        return "fa fa-stack-1x " + icon;
    };
    return NewFeatures;
}(React.Component));
exports.NewFeatures = NewFeatures;
//# sourceMappingURL=NewFeatures.js.map