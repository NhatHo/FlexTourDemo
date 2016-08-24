import * as React from "react";
import * as $ from "jquery";
import {createAttributeLine, attributesWithCode, tabNotice} from "./WikiUtils";

export class TourAttributesTab extends React.Component<{}, {}> {
    componentDidMount():any {
        $('html, body').animate({scrollTop: $("#tourApi").offset().top}, 'slow');
    }

    render() {
        return <div className="tab-pane active" id="tourApi">
            {this._tourAttributesBlock()}
        </div>;
    }

    private _tourAttributesBlock():JSX.Element {
        return <ul className="attributes-block-api">
            {tabNotice("Tour attributes define the general behaviors of ALL steps within the tour.")}
            <hr />
            {createAttributeLine("id: string (required)", "Each tour should have a unique id without WHITE SPACE, this is used for keeping track of which tour is being run. ")}
            {createAttributeLine("steps: Steps[]", "This attribute contains all of the steps in the tour. Each step should be an object. See Step Attributes tab for more information.")}
            <hr />
            {attributesWithCode("noButtons: boolean", ["Default: ", ". When set to true, Skip, Back, Next and Done buttons will not be shown in all steps."], ["false"])}
            {attributesWithCode("noBack: boolean", ["Default: ", ". When set to true, Back button in the entire tour will be disabled. This can be useful for unidirectional flow."], ["false"])}
            {attributesWithCode("noSkip: boolean", ["Default: ", ". When set to true, Skip button in the entire tour will NOT be showed. This can be useful for branching flow. Without setting this flag, the 'Skip' button will appear in any step that has 'skip' attribute."], ["false"])}
            {attributesWithCode("endOnOverlayClick: boolean", ["Default: ", ", enables onclick listener on overlays around target. For tour that has high chance of misclicking, you might want to disable this feature."], ["true"])}
            {attributesWithCode("endOnEsc: boolean", ["Default: ", ", enables keyboard listener on ESC key which will end the tour engine when users press ESC."], ["true"])}
            {attributesWithCode("pauseOnExit: boolean", ["Default: ", ", this feature will store your tour id and current step into localstorage (light weight). It can be quite useful if you want to resume the tour later on."], ["false"])}
            {createAttributeLine("delay: number", "The period of time that the framework has to wait for rendering the bubble in each step. A small delay at the beginning of each step can help when you use frameworks such as React, since you cannot be certain when the target will be rendered entirely.")}
            {createAttributeLine("retries: number", "The number of attempts that FlexTourJS will make to find your target. This attribute is important for element that takes time to render.")}
            {createAttributeLine("waitIntervals: number", "Have to be set with 'retries' attribute, this defines the wait time between retries.")}
            {createAttributeLine("canInteract: boolean", "Default 'false', when set to 'true', users can interact with the target: type, click around, etc. You should be sure that their interaction with the target will not cause any unexpected behavior in the app when enabling this feature.")}
            {createAttributeLine("nextButton: string", "Change the text of the Next button. It should be used for translation purposes.")}
            {createAttributeLine("backButton: string", "Change the text of the Back button. It should be used for translation purposes.")}
            {createAttributeLine("skipButton: string", "Change the text of the Skip button. It should be used for translation purposes.")}
            {createAttributeLine("doneButton: string", "Change the text of the Done button. It should be used for translation purposes.")}
            {attributesWithCode("buttons: [{name: string, style, string, onclick: string}]", ["When you think Skip, Back, Next, Done is not the correct solution for your tour, you can create your own buttons in the bubble using this attribute. The", " is the name of the function that is stored in actionsList object (More on this in next section)."], ["onclick: value"])}
            <hr />
            {createAttributeLine("buttons: [Object]", "This attribute allows you to create your own buttons for tour bubble. When set in tour attribute scope, the buttons will be applied to all steps in the current tour. However, similar to other attributes, you can specifically override in step attribute scope. The buttons will be added from left to right in the bubble (i.e: first button is on the far left, last button is on the far right).")}
            <ol>
                {createAttributeLine("name: String", "The name of the button which will be showed on the button.")}
                {createAttributeLine("style: String", "The CSS style classes that will be added to the button to style it. Here you can reuse current styles in FlexTourJS and add your own design as well.")}
                {createAttributeLine("onclick: Function | String", "The function that will be triggered when users click on this button. You can also use 1 of 4 built-in functions: 'Next', 'Back', 'Skip', 'Done' which will allow you to control the flow just like the default buttons.")}
            </ol>
        </ul>;
    }
}