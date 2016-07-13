"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var $ = require("jquery");
var WikiUtils_1 = require("./WikiUtils");
var FunctionsListTab = (function (_super) {
    __extends(FunctionsListTab, _super);
    function FunctionsListTab() {
        _super.apply(this, arguments);
    }
    FunctionsListTab.prototype.componentDidMount = function () {
        $('html, body').animate({ scrollTop: $("#funcsApi").offset().top }, 'slow');
    };
    FunctionsListTab.prototype.render = function () {
        return React.createElement("div", {className: "tab-pane active", id: "funcsApi"}, this._functionsListBlock());
    };
    FunctionsListTab.prototype._functionsListBlock = function () {
        return React.createElement("div", {className: "attributes-block-api non-list-block"}, WikiUtils_1.tabNotice("First you have to declare an empty object to contains the functions."), React.createElement("pre", null, 'var functionsList = {};'), React.createElement("hr", null), WikiUtils_1.tabNotice("Now you just need to create functions and attach them to the object. If you remember correctly from the Step Attributes, there are 3 types of conditions that you can use."), React.createElement("ol", null, WikiUtils_1.instruction("For type 1 (error checking), the function that you create can look like this."), React.createElement("pre", null, 'functionsList.functionName1 = function(currentStep) {\n\t// Do whatever you want in here for function 1\n\t// If you modify the currentStep object in this function, the actual step will also be modified.\n\treturn true;\n};'), WikiUtils_1.instruction("For type 2 (wait for condition) and type 3 (proceed if condition), the function is declared the same way."), React.createElement("pre", null, 'functionsList.functionName2 = function(elementList) {\n\t// Do whatever you want in here for function 2\n\t// The elementList contains an array of DOM selector string.\n\treturn false;\n};')), React.createElement("hr", null), WikiUtils_1.tabNotice("There are also 4 pre-set functions that can be useful for you:"), React.createElement("ul", null, WikiUtils_1.createAttributeLine("onStart", "This function is executed once before the whole tour get started. You can use this function to prepare for your tour."), React.createElement("pre", null, 'functionsList.onStart = function() {\n\t// Prepare for your tour.\n};'), WikiUtils_1.createAttributeLine("onExit", "This function is executed once after FlexTourJS finished cleaning up everything. You can use this function to cleanup whatever you setup before."), React.createElement("pre", null, 'functionsList.onExit = function() {\n\t// Clean up your tour.\n};'), WikiUtils_1.createAttributeLine("beforeStepRender", "This function is executed once before every step. You can use it to prepare for your all of your steps."), React.createElement("pre", null, 'functionsList.beforeStepRender = function() {\n\t// Prepare for your step.\n};'), WikiUtils_1.createAttributeLine("afterStepRender", "This function is executed once after every step. You can use it to cleanup whatever you setup in beforeStepRender"), React.createElement("pre", null, 'functionsList.afterStepRender = function() {\n\t// Clean up your step.\n};')));
    };
    return FunctionsListTab;
}(React.Component));
exports.FunctionsListTab = FunctionsListTab;
//# sourceMappingURL=FunctionsListTab.js.map