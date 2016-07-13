import * as React from "react";
import {SectionHeader} from "./SectionHeader";

export class Wiki extends React.Component<{}, {}> {
    render() {
        return <section id="wiki">
            <SectionHeader
                header="FlexTourJS API"
                subHeader="You can learn more about how to write the tour description."/>
            <div className="container">
                <ul className="nav nav-tabs nav-justified">
                    <li className="active wiki-tab-header" id="tourAttrTab"><a href="#tourApi"
                                                                               onClick={this._switchToTour.bind(this)}>Tour Attributes</a>
                    </li>
                    <li className="wiki-tab-header" id="stepAttrTab"><a href="#stepApi"
                                                                        onClick={this._switchToStep.bind(this)}>Step Attributes</a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane active" id="tourApi">
                        {this._tourAttributesBlock()}
                    </div>
                    <div className="tab-pane" id="stepApi">
                        {this._stepAttributesBlock()}
                    </div>
                </div>
            </div>
        </section>;
    }

    private _switchToStep(event:React.MouseEvent):void {
        event.preventDefault();
        event.stopPropagation();
        $("#stepAttrTab").addClass("active");
        $("#tourAttrTab").removeClass("active");
    }

    private _switchToTour(event:React.MouseEvent):void {
        event.preventDefault();
        event.stopPropagation();
        $("#tourAttrTab").addClass("active");
        $("#stepAttrTab").removeClass("active");
    }

    private _createAttributeLine(code:string, desc:string):JSX.Element {
        return <li>
            <span className="attr-title">{code}</span>
            <span className="attr-desc">: {desc}</span>
        </li>
    }

    private _tourAttributesBlock():JSX.Element {
        return <ul className="attributes-block-api">
            {this._createAttributeLine("id (required)", "Each tour should have a unique id without WHITE SPACE, this is used for keeping track of which tour is being run. ")}
            <hr />
            {this._createAttributeLine("", "")}
        </ul>;
    }

    private _stepAttributesBlock():JSX.Element {
        return <ul className="attributes-block-api">

        </ul>;
    }
}