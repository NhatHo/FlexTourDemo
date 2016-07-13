"use strict";
var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
var React = require("react");
var SectionHeader_1 = require("./SectionHeader");
var Demo = (function (_super) {
    __extends(Demo, _super);
    function Demo() {
        _super.apply(this, arguments);
    }

    Demo.prototype.render = function () {
        return React.createElement("section", {id: "demo"}, React.createElement("div", {className: "container"}, React.createElement(SectionHeader_1.SectionHeader, {
            header: "Action!!!",
            subHeader: "These are the components that will show you how FlexTourJS works."
        })));
    };
    return Demo;
}(React.Component));
exports.Demo = Demo;
//# sourceMappingURL=Demo.js.map