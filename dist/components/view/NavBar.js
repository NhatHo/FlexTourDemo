"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var $ = require("jquery");
var NavBar = (function (_super) {
    __extends(NavBar, _super);
    function NavBar(INavBarProps) {
        _super.call(this, INavBarProps);
    }
    NavBar.prototype.render = function () {
        if (this.props.floating) {
            $('.app').addClass("menu-padding");
            return React.createElement("div", {className: "sticky"}, React.createElement("ul", {className: "floating-nav"}, React.createElement("li", null, React.createElement("a", {onClick: this.scrollTop.bind(this)}, React.createElement("span", {className: "glyphicon glyphicon-home"}), "Top")), React.createElement("li", null, React.createElement("a", {onClick: this.scrollToDesc.bind(this)}, React.createElement("span", {className: "glyphicon glyphicon-plus-sign"}), " Features")), React.createElement("li", null, React.createElement("a", {onClick: this.scrollToAttributes.bind(this)}, React.createElement("span", {className: "glyphicon glyphicon-play"}), " Demo")), React.createElement("li", null, React.createElement("a", {onClick: this.scrollToWiki.bind(this)}, React.createElement("span", {className: "glyphicon glyphicon-book"}), " Api"))));
        }
        else {
            $('.app').removeClass("menu-padding");
            return React.createElement("nav", {className: "navbar navbar-inverse navbar-static-top", id: "navbar"}, React.createElement("div", {className: "container"}, React.createElement("div", {className: "collapse navbar-collapse"}, React.createElement("ul", {className: "nav navbar-nav"}, React.createElement("li", null, React.createElement("a", {onClick: this.scrollTop.bind(this)}, React.createElement("span", {className: "glyphicon glyphicon-home"}), " Top")), React.createElement("li", null, React.createElement("a", {onClick: this.scrollToDesc.bind(this)}, React.createElement("span", {className: "glyphicon glyphicon-plus-sign"}), " Features")), React.createElement("li", null, React.createElement("a", {onClick: this.scrollToAttributes.bind(this)}, React.createElement("span", {className: "glyphicon glyphicon-play"}), " Demo")), React.createElement("li", null, React.createElement("a", {onClick: this.scrollToWiki.bind(this)}, React.createElement("span", {className: "glyphicon glyphicon-book"}), " Api"))))));
        }
    };
    NavBar.prototype.prevent = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    NavBar.prototype.scrollTop = function (event) {
        this.prevent(event);
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    };
    NavBar.prototype.scrollToDesc = function (event) {
        this.prevent(event);
        $('html, body').animate({ scrollTop: $("#desc").offset().top }, 'slow');
    };
    NavBar.prototype.scrollToAttributes = function (event) {
        this.prevent(event);
        $('html, body').animate({ scrollTop: $("#attributes").offset().top }, 'slow');
    };
    NavBar.prototype.scrollToWiki = function (event) {
        this.prevent(event);
        $('html, body').animate({ scrollTop: $("#wiki").offset().top }, 'slow');
    };
    return NavBar;
}(React.Component));
exports.NavBar = NavBar;
//# sourceMappingURL=NavBar.js.map