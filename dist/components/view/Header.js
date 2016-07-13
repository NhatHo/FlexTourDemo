"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var $ = require("jquery");
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        _super.apply(this, arguments);
    }
    Header.prototype.render = function () {
        return React.createElement("header", null, React.createElement("div", {className: "container"}, React.createElement("div", {className: "header-content"}, React.createElement("div", {className: "header-name"}, "Flexible Tour Framework"), React.createElement("div", {className: "header-subname"}, "Guide your customers through your amazing application."), React.createElement("a", {className: "page-scroll btn btn-success btn-lg", onClick: this.onClick}, React.createElement("span", {className: "glyphicon glyphicon-play-circle", "aria-hidden": "true"}), React.createElement("span", {className: "header-button"}, "Demo Time!")))));
    };
    Header.prototype.onClick = function (event) {
        event.stopPropagation();
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $("#attributes").offset().top
        }, 'slow');
    };
    return Header;
}(React.Component));
exports.Header = Header;
//# sourceMappingURL=Header.js.map