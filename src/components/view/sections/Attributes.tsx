import * as React from "react";
import {SectionHeader} from "./SectionHeader";
import {AttributeBox} from "./AttributeBox";

export class Attributes extends React.Component<{}, {}> {
    render() {
        return <section id="attributes">
            <SectionHeader
                header="How to use it?"
                subHeader="Your tours will be described in form of array of JSON objects. Each object will describe 1 tour."/>
            <div className="container">
                <div className="row">
                    <AttributeBox header="Let's Start Simple"
                                  subHeader="How to create a simple tour with unidirectional flow?"
                                  content={this._regularTourRunner()}/>
                    <AttributeBox header="Error Checkings"
                                  subHeader="How to capture dynamic components successfully?"
                                  content={this._prerequisitesAndBranching()}/>
                </div>
                <div className="row">
                    <AttributeBox header="Wait For It"
                                  subHeader="How to make your tours wait for next step and setup backup route?"
                                  content={this._waitForElementAndFinalResort()}/>
                    <AttributeBox header="One Page Is Not Enough"
                                  subHeader="How to show tour in multiple pages, stop and resume current tour?"
                                  content={this._multipagePauseAndResume()}/>
                </div>
                <div className="row">
                    <AttributeBox header="Customized Triggers For Next Step"
                                  subHeader="How to allow drag and drop, trigger next step on application's button clicked?"
                                  content={this._nextTriggerDnD()}/>
                    <AttributeBox header="You Can Do Whatever You Want."
                                  subHeader="How to change color scheme, and create your own bubbles?"
                                  content={this._standaloneBubble()}/>
                </div>
                <div className="row">
                    <AttributeBox header="FlexTourJS Follows Your Cool Features"
                                  subHeader="How to always keep the tour description at your step target?"
                                  content={this._floatingElements()}/>
                    <AttributeBox header="Global Application Translation Made Easy"
                                  subHeader="How to translate your tour into multiple languages?"
                                  content={this._nlsTranslation()}/>
                </div>
            </div>
        </section>;
    }

    private _linkToDemoAndSource(demoLink:string, sourceLink:string):JSX.Element {
        return <div className="link">
            <p><a href={demoLink} className="btn btn-primary demo-button" target="_blank">
                <i className="fa fa-link"></i> Demo!</a>
                <a href={sourceLink} className="btn btn-success" target="_blank"><i className="fa fa-github"></i> Code?</a>
            </p>
        </div>
    }

    private _attributeContentBlock(body:string, buttons:JSX.Element):JSX.Element {
        return <div className="col-lg-12 attributes-content">
            <p>{body}</p>
            {buttons}
        </div>;
    }


    private _regularTourRunner():JSX.Element {
        let body:string = "In this example, FlexTourJS simply moves between steps without any fancy features. This might be used for simple applications where each step exist and are visible in the DOM when the page is loaded.";
        let buttons: JSX.Element = this._linkToDemoAndSource("../../../../demo/simple/index.html", "https://github.com/NhatHo/FlexTourDemo/tree/master/demo/simple");
        return this._attributeContentBlock(body, buttons);
    }

    private _prerequisitesAndBranching():JSX.Element {
        let body:string = "When your applications get complicated, maybe the next step in your tour is important to show, but it might not be available yet. FlexTourJS allows you to slow down the flow, and possibly skips steps entirely in case something bad happens.";
        let buttons: JSX.Element = this._linkToDemoAndSource("../../../../demo/errorcheckings/index.html", "https://github.com/NhatHo/FlexTourDemo/tree/master/demo/errorcheckings");
        return this._attributeContentBlock(body, buttons);
    }

    private _waitForElementAndFinalResort():JSX.Element {
        let body: string = "Consider this: when your application makes an AJAX call or processing something that takes up a lot of time, your tour might need to wait for the process to finish. This demo shows you how to make the tour wait, while explaining to users what is going on. Furthermore, if anything goes wrong in the process, you can setup a backup route so that your tour will not end abruptly.";
        let buttons: JSX.Element = this._linkToDemoAndSource("../../../../demo/longprocess/index.html", "https://github.com/NhatHo/FlexTourDemo/tree/master/demo/longprocess");
        return this._attributeContentBlock(body, buttons);
    }

    private _multipagePauseAndResume():JSX.Element {
        let body:string = "When your tour spans multiple pages, just set the multipage flag to true in the step that opens new page and FlexTourJS will take care of the rest. Requirement: the next page must also have FlexTourJS framework and current tour loaded. The framework will automatically continue your tour from previous page. Furthermore, you can pause and resume the tour anytime you like.";
        let buttons: JSX.Element = this._linkToDemoAndSource("../../../../demo/multipage/index.html", "https://github.com/NhatHo/FlexTourDemo/tree/master/demo/multipage");
        return this._attributeContentBlock(body, buttons);
    }

    private _nextTriggerDnD():JSX.Element {
        let body:string = "Enabling dragAndDrop flag to true in step description will allow you to drag and drop target around without breaking your current tour. Directional buttons in the bubble are not the only way to control the flow, you can make a button in your application to next step trigger. This demo will show you how.";
        let buttons: JSX.Element = this._linkToDemoAndSource("../../../../demo/customizedtriggers/index.html", "https://github.com/NhatHo/FlexTourDemo/tree/master/demo/customizedtriggers");
        return this._attributeContentBlock(body, buttons);
    }

    private _standaloneBubble():JSX.Element {
        let body:string = "You don't think FlexTourJS bubble is good enough for you? No problem, you can just create your own version with functional buttons. This demo will show you how to do that. You don't like the default color and styles? Just import the less file and override the variables with your own selections.";
        let buttons: JSX.Element = this._linkToDemoAndSource("../../../../demo/customizedstyles/index.html", "https://github.com/NhatHo/FlexTourDemo/tree/master/demo/customizedstyles");
        return this._attributeContentBlock(body, buttons);
    }

    private _floatingElements():JSX.Element {
        let body:string = "More often that not your application has a floating element which never stays still. FlexTourJS has 2 ways to handle this scenario, either you block scrolling when this step is showed, or you let the framework re-render every 200 milliseconds.";
        let buttons: JSX.Element = this._linkToDemoAndSource("../../../../demo/coolfeatures/index.html", "https://github.com/NhatHo/FlexTourDemo/tree/master/demo/coolfeatures");
        return this._attributeContentBlock(body, buttons);
    }

    private _nlsTranslation():JSX.Element {
        let body:string = "Your application can go global and you might need to translate the instruction in the tour. FlexTourJS offers an easy way out so that you do not need to create and maintain multiple tour description JSON objects. Step description will be injected automatically.";
        let buttons: JSX.Element = this._linkToDemoAndSource("../../../../demo/translation/index.html", "https://github.com/NhatHo/FlexTourDemo/tree/master/demo/translation");
        return this._attributeContentBlock(body, buttons);
    }
}