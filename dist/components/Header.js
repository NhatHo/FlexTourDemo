"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        _super.apply(this, arguments);
    }
    Header.prototype.render = function () {
        return React.createElement("header", null, React.createElement("div", {className: "container"}, React.createElement("div", {className: "header-content"}, React.createElement("div", {className: "header-name"}, "Flexible Tour Framework"), React.createElement("div", {className: "header-subname"}, "Guide your customers through your amazing application."), React.createElement("a", {href: "#description", className: "page-scroll btn btn-info btn-lg", onClick: this.onClick}, React.createElement("i", {className: "glyphicons glyphicons-play-button", "aria-hidden": "true"}), "Take a Tour!"))));
    };
    Header.prototype.onClick = function (event) {
        event.stopPropagation();
        event.preventDefault();
    };
    return Header;
}(React.Component));
exports.Header = Header;
//# sourceMappingURL=Header.js.map