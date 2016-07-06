"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Header_1 = require("./view/Header");
var Body_1 = require("./view/Body");
var Footer_1 = require("./view/Footer");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        return React.createElement("div", null, React.createElement(Header_1.Header, null), React.createElement(Body_1.Body, null), React.createElement(Footer_1.Footer, null));
    };
    return App;
}(React.Component));
exports.App = App;
//# sourceMappingURL=App.js.map