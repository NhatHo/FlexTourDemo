"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var FlexTour = require('flextourjs');
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        _super.apply(this, arguments);
    }
    Header.prototype.render = function () {
        return React.createElement("header", null, React.createElement("div", {className: "container-fluid"}, React.createElement("div", {className: "header-content"}, React.createElement("div", {className: "header-name"}, "Flexible Tour Framework"), React.createElement("div", {className: "header-subname"}, "Guide your customers through your amazing application."), React.createElement("a", {className: "page-scroll btn btn-success btn-lg", onClick: this.onClick}, React.createElement("span", {className: "glyphicon glyphicon-play-circle", "aria-hidden": "true"}), React.createElement("span", {className: "header-button"}, "Demo !")), React.createElement("div", {className: "media-block"}, React.createElement("a", {href: "https://github.com/NhatHo/FlexTourJs", target: "_blank"}, React.createElement("span", {className: "fa fa-github fa-4x"}))))));
    };
    Header.prototype.onClick = function (event) {
        event.stopPropagation();
        event.preventDefault();
        var tourDesc = {
            id: "fontpageTour",
            steps: [{
                    content: "This is the new features section",
                    title: "New Features",
                    position: "top",
                    target: "#desc"
                }, {
                    content: "You can checkout the demo codes in this section so that you can apply them in your own apps.",
                    title: "Demo",
                    position: "top",
                    target: "#attributes"
                }, {
                    content: "The API of this framework is explained in details here. This will help you greatly in writing your own tours.",
                    title: "API",
                    position: "top",
                    target: "#wiki"
                }]
        };
        var tourDescs = [tourDesc];
        var flextour = new FlexTour(tourDescs, {});
        flextour.run();
    };
    return Header;
}(React.Component));
exports.Header = Header;
//# sourceMappingURL=Header.js.map