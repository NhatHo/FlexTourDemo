"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var $ = require("jquery");
var WikiUtils_1 = require("./WikiUtils");
var TranslationTab = (function (_super) {
    __extends(TranslationTab, _super);
    function TranslationTab() {
        _super.apply(this, arguments);
    }
    TranslationTab.prototype.componentDidMount = function () {
        $('html, body').animate({ scrollTop: $("#transApi").offset().top }, 'slow');
    };
    TranslationTab.prototype.render = function () {
        return React.createElement("div", {className: "tab-pane active", id: "transApi"}, this._translationBlock());
    };
    TranslationTab.prototype._translationBlock = function () {
        return React.createElement("div", {className: "attributes-block-api non-list-block"}, WikiUtils_1.tabNotice("When your application reaches Global scale, you might want to translate the UI to different languages. As a way to introduce your product, the steps in your tours should be translated as well."), WikiUtils_1.instruction("Create a tour object with attributes as explained in Tour Attributes and Step Attributes tabs. Instead of providing the full description, you just need to provide the keyword in step's content."), React.createElement("pre", null, "var tourDesc = {\n\tid: 'sample',\n\t...\n\tsteps:[{\n\t\t...\n\t\tcontent: 'coolfeature'\n\t\t...\n\t}\n}];"), React.createElement("hr", null), WikiUtils_1.instruction("Now, you need to provide an object contains translated content."), React.createElement("pre", null, "var translationObject = {\n\t...\n\tcoolFeature: 'translatedString'\n\t...\n};"), WikiUtils_1.tabNotice("FlexTourJS will automatically inject the messages into the tour description file. By doing it this way, you only need to keep 1 tour description, and multiple translated files instead of multiple translated tour description. It reduces a huge amount of effort for maintainance."), React.createElement("pre", null, "var flexTour = new FlexTour(tourDesc, functionsList, translationObject);"));
    };
    return TranslationTab;
}(React.Component));
exports.TranslationTab = TranslationTab;
//# sourceMappingURL=TranslationTab.js.map