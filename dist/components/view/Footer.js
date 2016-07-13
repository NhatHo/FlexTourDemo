"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Footer = (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        _super.apply(this, arguments);
    }
    Footer.prototype.render = function () {
        return React.createElement("footer", {className: "footer-style"}, React.createElement("div", {className: "container"}, React.createElement("h4", null, "Created by Nhat Ho - nhatminhhoca@gmail.com - Copyright 2016")));
    };
    return Footer;
}(React.Component));
exports.Footer = Footer;
//# sourceMappingURL=Footer.js.map