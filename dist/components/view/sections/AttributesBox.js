"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var AttributesBox = (function (_super) {
    __extends(AttributesBox, _super);
    function AttributesBox() {
        _super.apply(this, arguments);
    }
    AttributesBox.prototype.render = function () {
        return React.createElement("li", null, React.createElement("div", {className: "attributes-image fa-stack fa-4x"}, React.createElement("i", {className: "fa fa-inverse attributes-icon " + this.props.icon})), this.makeAttributeBox(this.props.leftHeader, "attributes-panel", this.props.leftBlock), this.makeAttributeBox(this.props.rightHeader, "attributes-panel-inverted", this.props.rightBlock));
    };
    AttributesBox.prototype.makeAttributeBox = function (type, className, body) {
        return (React.createElement("div", {className: className}, React.createElement("div", {className: "attributes-heading"}, React.createElement("h4", null, type)), React.createElement("div", {className: "attributes-body"}, body)));
    };
    return AttributesBox;
}(React.Component));
exports.AttributesBox = AttributesBox;
//# sourceMappingURL=AttributesBox.js.map