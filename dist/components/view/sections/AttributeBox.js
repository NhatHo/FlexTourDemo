"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var AttributeBox = (function (_super) {
    __extends(AttributeBox, _super);
    function AttributeBox() {
        _super.apply(this, arguments);
    }
    AttributeBox.prototype.render = function () {
        return React.createElement("div", {className: "col-lg-6 attributes-block"}, React.createElement("div", {className: "col-lg-12 text-center attribute-title"}, React.createElement("h4", null, this.props.header), React.createElement("h5", null, this.props.subHeader)), this.props.content);
    };
    return AttributeBox;
}(React.Component));
exports.AttributeBox = AttributeBox;
//# sourceMappingURL=AttributeBox.js.map