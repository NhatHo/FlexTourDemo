import * as React from "react";

import { SectionHeader } from "./SectionHeader";
import { AttributesBox } from "./AttributesBox";

export class Attributes extends React.Component<{}, {}> {
    render() {
        return <section id="attributes">
            <div className="container">
                <SectionHeader
                    header="How to use it?"
                    subHeader="Your tours will be described in form of array of JSON object. Each object will declare 1 tour."/>
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="attributes-list">
                            <AttributesBox
                                icon="fa-exclamation-circle"
                                leftHeader="Required Tour Attributes"
                                rightHeader="Required Step Attributes"
                                leftBlock={this.makeRequiredLeftBlock()}
                                rightBlock={this.makeRequiredRightBlock()} />
                            <AttributesBox
                                icon="fa-question-circle"
                                leftHeader="Optional Tour Attributes"
                                rightHeader="Optional Step Attributes"
                                leftBlock={this.makeOptionalLeftBlock()}
                                rightBlock={this.makeOptionalRightBlock()} />
                        </ul>
                    </div>
                </div>
            </div>
        </section>;
    }

    private makeRequiredLeftBlock(): JSX.Element {
        return <ul>
            {this.attributeStyles("id", "Each tour should have a unique id so that they can be found easier.")}
            {this.attributeStyles("endOnEsc", "Default set to true, enable the ability to end FlexTourJS runner on pressing ESC on keyboard.")}
            {this.attributeStyles("endOnOverlayClick", "Default set to true, end FlexTourJS runner when users click on the overlay outside of target. If the target is small and users might misclick, you can disable this by setting to false.")}
        </ul>;
    }

    private makeRequiredRightBlock(): JSX.Element {
        return <ul>
            {this.attributeStyles("content", "")}
        </ul>;
    }

    private makeOptionalLeftBlock(): JSX.Element {
        return <div>

        </div>;
    }

    private makeOptionalRightBlock(): JSX.Element {
        return <div>

        </div>;
    }

    private attributeStyles(attribute: string, description: string): JSX.Element {
        return <li className="params-text">
            <div>
                <h5 className="attribute-title">{attribute}</h5>
                <p>{description}</p>
            </div>
        </li>;
    }
}