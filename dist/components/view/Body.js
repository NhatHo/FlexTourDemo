"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Description_1 = require("./sections/Description");
var Attributes_1 = require("./sections/Attributes");
var Demo_1 = require("./sections/Demo");
var Body = (function (_super) {
    __extends(Body, _super);
    function Body() {
        _super.apply(this, arguments);
    }
    Body.prototype.render = function () {
        return React.createElement("div", {className: "bodybackground"}, React.createElement(Description_1.Description, null), React.createElement(Attributes_1.Attributes, null), React.createElement(Demo_1.Demo, null));
    };
    return Body;
}(React.Component));
exports.Body = Body;
//# sourceMappingURL=Body.js.map