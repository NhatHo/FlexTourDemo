import * as React from "react";
import * as $ from "jquery";
import {tabNotice, instruction} from "./WikiUtils";

export class TranslationTab extends React.Component<{}, {}> {
    componentDidMount():any {
        $('html, body').animate({scrollTop: $("#transApi").offset().top}, 'slow');
    }

    render() {
        return <div className="tab-pane active" id="transApi">
            {this._translationBlock()}
        </div>;
    }

    private _translationBlock():JSX.Element {
        return <div className="attributes-block-api non-list-block">
            {tabNotice("When your application reaches Global scale, you might want to translate the UI to different languages. As a way to introduce your product, the steps in your tours should be translated as well.")}
            {instruction("Create a tour object with attributes as explained in Tour Attributes and Step Attributes tabs. Instead of providing the full description, you just need to provide the keyword in step's content.")}
            <pre>{"var tourDesc = {\n\tid: 'sample',\n\t...\n\tsteps:[{\n\t\t...\n\t\tcontent: 'coolfeature'\n\t\t...\n\t}\n}];"}</pre>
            <hr/>
            {instruction("Now, you need to provide an object contains translated object.")}
            <pre>{"var translationObject = {\n\t...\n\tcoolFeature: 'translatedString'\n\t...\n};"}</pre>
            {tabNotice("FlexTourJS will automatically inject the messages into the tour description file. By doing it this way, you only need to keep 1 tour description, and multiple translated files instead of multiple translated tour description. It reduces a huge amount of effort for maintainance.")}
            <pre>{"var flexTour = new FlexTour('tourDesc', 'functionsList|{}', 'translationObject);"}</pre>
        </div>;
    }
}