"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var SectionHeader_1 = require("./SectionHeader");
var StepAttributesTab_1 = require("./StepAttributesTab");
var TourAttributesTab_1 = require("./TourAttributesTab");
var FunctionsListTab_1 = require("./FunctionsListTab");
var TranslationTab_1 = require("./TranslationTab");
var LOCAL_STORAGE_KEY = "flextour.demo.attrs";
var STEP = "step";
var TOUR = "tour";
var FUNCS = "funcs";
var MESS = "mess";
var TAB = "tab";
var Wiki = (function (_super) {
    __extends(Wiki, _super);
    function Wiki() {
        _super.call(this);
        this.state = { tab: this._getCurrentTab() };
    }
    Wiki.prototype.render = function () {
        var currentTabPanel;
        var activeTab;
        if (this.state.tab === TOUR) {
            activeTab = React.createElement("ul", {className: "nav nav-tabs nav-justified"}, React.createElement("li", {className: "active wiki-tab-header", id: "tourAttrTab"}, React.createElement("a", {href: "#tourApi", onClick: this._switchToTour.bind(this)}, "Tour Attributes")), React.createElement("li", {className: "wiki-tab-header", id: "stepAttrTab"}, React.createElement("a", {onClick: this._switchToStep.bind(this)}, "Step Attributes")), React.createElement("li", {className: "wiki-tab-header", id: "stepAttrTab"}, React.createElement("a", {onClick: this._switchToFuncs.bind(this)}, "Functions List")), React.createElement("li", {className: "wiki-tab-header", id: "stepAttrTab"}, React.createElement("a", {href: "#transApi", onClick: this._switchToTrans.bind(this)}, "Translation")));
            currentTabPanel = React.createElement(TourAttributesTab_1.TourAttributesTab, null);
        }
        else if (this.state.tab === STEP) {
            activeTab = React.createElement("ul", {className: "nav nav-tabs nav-justified"}, React.createElement("li", {className: "wiki-tab-header", id: "tourAttrTab"}, React.createElement("a", {onClick: this._switchToTour.bind(this)}, "Tour Attributes")), React.createElement("li", {className: "active wiki-tab-header", id: "stepAttrTab"}, React.createElement("a", {href: "#stepsApi", onClick: this._switchToStep.bind(this)}, "Step Attributes")), React.createElement("li", {className: "wiki-tab-header", id: "stepAttrTab"}, React.createElement("a", {onClick: this._switchToFuncs.bind(this)}, "Functions List")), React.createElement("li", {className: "wiki-tab-header", id: "stepAttrTab"}, React.createElement("a", {href: "#transApi", onClick: this._switchToTrans.bind(this)}, "Translation")));
            currentTabPanel = React.createElement(StepAttributesTab_1.StepAttributesTab, null);
        }
        else if (this.state.tab === FUNCS) {
            activeTab = React.createElement("ul", {className: "nav nav-tabs nav-justified"}, React.createElement("li", {className: "wiki-tab-header", id: "tourAttrTab"}, React.createElement("a", {onClick: this._switchToTour.bind(this)}, "Tour Attributes")), React.createElement("li", {className: "wiki-tab-header", id: "stepAttrTab"}, React.createElement("a", {onClick: this._switchToStep.bind(this)}, "Step Attributes")), React.createElement("li", {className: "active wiki-tab-header", id: "stepAttrTab"}, React.createElement("a", {href: "#funcsApi", onClick: this._switchToFuncs.bind(this)}, "Functions List")), React.createElement("li", {className: "wiki-tab-header", id: "stepAttrTab"}, React.createElement("a", {href: "#transApi", onClick: this._switchToTrans.bind(this)}, "Translation")));
            currentTabPanel = React.createElement(FunctionsListTab_1.FunctionsListTab, null);
        }
        else if (this.state.tab = MESS) {
            activeTab = React.createElement("ul", {className: "nav nav-tabs nav-justified"}, React.createElement("li", {className: "wiki-tab-header", id: "tourAttrTab"}, React.createElement("a", {onClick: this._switchToTour.bind(this)}, "Tour Attributes")), React.createElement("li", {className: "wiki-tab-header", id: "stepAttrTab"}, React.createElement("a", {onClick: this._switchToStep.bind(this)}, "Step Attributes")), React.createElement("li", {className: "wiki-tab-header", id: "stepAttrTab"}, React.createElement("a", {href: "#funcsApi", onClick: this._switchToFuncs.bind(this)}, "Functions List")), React.createElement("li", {className: "active wiki-tab-header", id: "stepAttrTab"}, React.createElement("a", {href: "#transApi", onClick: this._switchToTrans.bind(this)}, "Translation")));
            currentTabPanel = React.createElement(TranslationTab_1.TranslationTab, null);
        }
        return React.createElement("section", {id: "wiki"}, React.createElement(SectionHeader_1.SectionHeader, {header: "FlexTourJS API", subHeader: "You can learn more about how to write the tour description."}), React.createElement("div", {className: "container"}, activeTab, React.createElement("div", {className: "tab-content"}, currentTabPanel)));
    };
    Wiki.prototype._getCurrentTab = function () {
        var currentAttr = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (currentAttr && currentAttr.hasOwnProperty(TAB)) {
            return currentAttr[TAB];
        }
        return TOUR;
    };
    Wiki.prototype._setCurrentTab = function (tourValue) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ tab: tourValue }));
    };
    Wiki.prototype._switchToStep = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({ tab: STEP });
        this._setCurrentTab(STEP);
    };
    Wiki.prototype._switchToTour = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({ tab: TOUR });
        this._setCurrentTab(TOUR);
    };
    Wiki.prototype._switchToFuncs = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({ tab: FUNCS });
        this._setCurrentTab(FUNCS);
    };
    Wiki.prototype._switchToTrans = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({ tab: MESS });
        this._setCurrentTab(MESS);
    };
    return Wiki;
}(React.Component));
exports.Wiki = Wiki;
//# sourceMappingURL=Wiki.js.map