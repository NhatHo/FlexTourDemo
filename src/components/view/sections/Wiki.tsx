import * as React from "react";
import {SectionHeader} from "./SectionHeader";
import {StepAttributesTab} from "./StepAttributesTab";
import {TourAttributesTab} from "./TourAttributesTab";
import {FunctionsListTab} from "./FunctionsListTab";
import {TranslationTab} from "./TranslationTab";

interface IWikiState {
    tab:string;
}

let LOCAL_STORAGE_KEY:string = "flextour.demo.attrs";
let STEP:string = "step";
let TOUR:string = "tour";
let FUNCS:string = "funcs";
let MESS:string = "mess";
let TAB:string = "tab";

export class Wiki extends React.Component<{}, IWikiState> {
    constructor() {
        super();
        this.state = {tab: this._getCurrentTab()};
    }

    render() {
        let currentTabPanel:JSX.Element;
        let activeTab:JSX.Element;
        if (this.state.tab === TOUR) {
            activeTab = <ul className="nav nav-tabs nav-justified">
                <li className="active wiki-tab-header" id="tourAttrTab">
                    <a href="#tourApi" onClick={this._switchToTour.bind(this)}>Tour Attributes</a>
                </li>
                <li className="wiki-tab-header" id="stepAttrTab">
                    <a onClick={this._switchToStep.bind(this)}>Step Attributes</a>
                </li>
                <li className="wiki-tab-header" id="stepAttrTab">
                    <a onClick={this._switchToFuncs.bind(this)}>Functions List</a>
                </li>
                <li className="wiki-tab-header" id="stepAttrTab">
                    <a href="#transApi" onClick={this._switchToTrans.bind(this)}>Translation</a>
                </li>
            </ul>;

            currentTabPanel = <TourAttributesTab />;
        } else if (this.state.tab === STEP) {
            activeTab = <ul className="nav nav-tabs nav-justified">
                <li className="wiki-tab-header" id="tourAttrTab">
                    <a onClick={this._switchToTour.bind(this)}>Tour Attributes</a>
                </li>
                <li className="active wiki-tab-header" id="stepAttrTab">
                    <a href="#stepsApi" onClick={this._switchToStep.bind(this)}>Step Attributes</a>
                </li>
                <li className="wiki-tab-header" id="stepAttrTab">
                    <a onClick={this._switchToFuncs.bind(this)}>Functions List</a>
                </li>
                <li className="wiki-tab-header" id="stepAttrTab">
                    <a href="#transApi" onClick={this._switchToTrans.bind(this)}>Translation</a>
                </li>
            </ul>;

            currentTabPanel = <StepAttributesTab />;
        } else if (this.state.tab === FUNCS) {
            activeTab = <ul className="nav nav-tabs nav-justified">
                <li className="wiki-tab-header" id="tourAttrTab">
                    <a onClick={this._switchToTour.bind(this)}>Tour Attributes</a>
                </li>
                <li className="wiki-tab-header" id="stepAttrTab">
                    <a onClick={this._switchToStep.bind(this)}>Step Attributes</a>
                </li>
                <li className="active wiki-tab-header" id="stepAttrTab">
                    <a href="#funcsApi" onClick={this._switchToFuncs.bind(this)}>Functions List</a>
                </li>
                <li className="wiki-tab-header" id="stepAttrTab">
                    <a href="#transApi" onClick={this._switchToTrans.bind(this)}>Translation</a>
                </li>
            </ul>;

            currentTabPanel = <FunctionsListTab />;
        } else if (this.state.tab = MESS) {
            activeTab = <ul className="nav nav-tabs nav-justified">
                <li className="wiki-tab-header" id="tourAttrTab">
                    <a onClick={this._switchToTour.bind(this)}>Tour Attributes</a>
                </li>
                <li className="wiki-tab-header" id="stepAttrTab">
                    <a onClick={this._switchToStep.bind(this)}>Step Attributes</a>
                </li>
                <li className="wiki-tab-header" id="stepAttrTab">
                    <a href="#funcsApi" onClick={this._switchToFuncs.bind(this)}>Functions List</a>
                </li>
                <li className="active wiki-tab-header" id="stepAttrTab">
                    <a href="#transApi" onClick={this._switchToTrans.bind(this)}>Translation</a>
                </li>
            </ul>;

            currentTabPanel = <TranslationTab />;
        }
        return <section id="wiki">
            <SectionHeader
                header="FlexTourJS API"
                subHeader="You can learn more about how to write the tour description."/>
            <div className="container">
                {activeTab}
                <div className="tab-content">
                    {currentTabPanel}
                </div>
            </div>
        </section>;
    }

    private _getCurrentTab():string {
        let currentAttr = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (currentAttr && currentAttr.hasOwnProperty(TAB)) {
            return currentAttr[TAB];
        }
        return TOUR;
    }

    private _setCurrentTab(tourValue:string):void {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({tab: tourValue}));
    }

    private _switchToStep(event:React.MouseEvent):void {
        event.preventDefault();
        event.stopPropagation();
        this.setState({tab: STEP});
        this._setCurrentTab(STEP);
    }

    private _switchToTour(event:React.MouseEvent):void {
        event.preventDefault();
        event.stopPropagation();
        this.setState({tab: TOUR});
        this._setCurrentTab(TOUR);
    }

    private _switchToFuncs(event:React.MouseEvent):void {
        event.preventDefault();
        event.stopPropagation();
        this.setState({tab: FUNCS});
        this._setCurrentTab(FUNCS);
    }

    private _switchToTrans(event:React.MouseEvent):void {
        event.preventDefault();
        event.stopPropagation();
        this.setState({tab: MESS});
        this._setCurrentTab(MESS);
    }
}