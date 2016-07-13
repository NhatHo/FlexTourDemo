"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var $ = require("jquery");
var WikiUtils_1 = require("./WikiUtils");
var TourAttributesTab = (function (_super) {
    __extends(TourAttributesTab, _super);
    function TourAttributesTab() {
        _super.apply(this, arguments);
    }
    TourAttributesTab.prototype.componentDidMount = function () {
        $('html, body').animate({ scrollTop: $("#tourApi").offset().top }, 'slow');
    };
    TourAttributesTab.prototype.render = function () {
        return React.createElement("div", {className: "tab-pane active", id: "tourApi"}, this._tourAttributesBlock());
    };
    TourAttributesTab.prototype._tourAttributesBlock = function () {
        return React.createElement("ul", {className: "attributes-block-api"}, WikiUtils_1.tabNotice("Tour attributes define the general behaviors of ALL steps within the tour."), React.createElement("hr", null), WikiUtils_1.createAttributeLine("id: string (required)", "Each tour should have a unique id without WHITE SPACE, this is used for keeping track of which tour is being run. "), WikiUtils_1.createAttributeLine("steps: Steps[]", "This attribute contains all of the steps in the tour. Each step should be an object. See Step Attributes tab for more information."), React.createElement("hr", null), WikiUtils_1.attributesWithCode("noButtons: boolean", ["Default: ", ". When set to true, Skip, Back, Next and Done buttons will not be shown in all steps."], ["false"]), WikiUtils_1.attributesWithCode("noBack: boolean", ["Default: ", ". When set to true, Back button in the entire tour will be disabled. This can be useful for unidirectional flow."], ["false"]), WikiUtils_1.attributesWithCode("endOnOverlayClick: boolean", ["Default: ", ", enables onclick listener on overlays around target. For tour that has high chance of misclicking, you might want to disable this feature."], ["true"]), WikiUtils_1.attributesWithCode("endOnEsc: boolean", ["Default: ", ", enables keyboard listener on ESC key which will end the tour engine when users press ESC."], ["true"]), WikiUtils_1.attributesWithCode("pauseOnExit: boolean", ["Default: ", ", this feature will store your tour id and current step into localstorage (light weight). It can be quite useful if you want to resume the tour later on."], ["false"]), WikiUtils_1.createAttributeLine("delay: number", "The period of time that the framework has to wait for rendering the bubble in each step. A small delay at the beginning of each step can help when you use frameworks such as React, since you cannot be certain when the target will be rendered entirely."), WikiUtils_1.createAttributeLine("retries: number", "The number of attempts that FlexTourJS will make to find your target. This attribute is important for element that takes time to render."), WikiUtils_1.createAttributeLine("waitIntervals: number", "Have to be set with 'retries' attribute, this defines the wait time between retries."), WikiUtils_1.createAttributeLine("canInteract: boolean", "Default 'false', when set to 'true', users can interact with the target: type, click around, etc. You should be sure that their interaction with the target will not cause any unexpected behavior in the app when enabling this feature."), WikiUtils_1.createAttributeLine("nextButton: string", "Change the text of the Next button. It should be used for translation purposes."), WikiUtils_1.createAttributeLine("backButton: string", "Change the text of the Back button. It should be used for translation purposes."), WikiUtils_1.createAttributeLine("skipButton: string", "Change the text of the Skip button. It should be used for translation purposes."), WikiUtils_1.createAttributeLine("doneButton: string", "Change the text of the Done button. It should be used for translation purposes."), WikiUtils_1.attributesWithCode("buttons: [{name: string, style, string, onclick: string}]", ["When you think Skip, Back, Next, Done is not the correct solution for your tour, you can create your own buttons in the bubble using this attribute. The", " is the name of the function that is stored in actionsList object (More on this in next section)."], ["onclick: value"]));
    };
    return TourAttributesTab;
}(React.Component));
exports.TourAttributesTab = TourAttributesTab;
//# sourceMappingURL=TourAttributesTab.js.map