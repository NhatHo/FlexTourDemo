"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var SectionHeader = (function (_super) {
    __extends(SectionHeader, _super);
    function SectionHeader() {
        _super.apply(this, arguments);
    }
    SectionHeader.prototype.render = function () {
        return React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-lg-12 text-center"}, React.createElement("h2", {className: "section-heading"}, this.props.header), React.createElement("h3", {className: "section-subheading"}, this.props.subHeader)));
    };
    return SectionHeader;
}(React.Component));
exports.SectionHeader = SectionHeader;
//# sourceMappingURL=SectionHeader.js.map