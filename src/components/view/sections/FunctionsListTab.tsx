import * as React from "react";
import * as $ from "jquery";
import {tabNotice, instruction, createAttributeLine} from "./WikiUtils";

export class FunctionsListTab extends React.Component<{}, {}> {
    componentDidMount():any {
        $('html, body').animate({scrollTop: $("#funcsApi").offset().top}, 'slow');
    }

    render() {
        return <div className="tab-pane active" id="funcsApi">
            {this._functionsListBlock()}
        </div>;
    }

    private _functionsListBlock():JSX.Element {
        return <div className="attributes-block-api non-list-block">
            {tabNotice("First you have to declare an empty object to contains the functions.")}
            <pre>{'var functionsList = {};'}</pre>
            <hr />
            {tabNotice("Now you just need to create functions and attach them to the object. If you remember correctly from the Step Attributes, there are 3 types of conditions that you can use.")}
            <ol>
                {instruction("For type 1 (error checking), the function that you create can look like this.")}
                <pre>{'functionsList.functionName1 = function(currentStep) {\n\t// Do whatever you want in here for function 1\n\t// If you modify the currentStep object in this function, the actual step will also be modified.\n\treturn true;\n};'}</pre>
                {instruction("For type 2 (wait for condition) and type 3 (proceed if condition), the function is declared the same way.")}
                <pre>{'functionsList.functionName2 = function(elementList) {\n\t// Do whatever you want in here for function 2\n\t// The elementList contains an array of DOM selector string.\n\treturn false;\n};'}</pre>
            </ol>
            <hr />
            {tabNotice("There are also 4 pre-set functions that can be useful for you:")}
            <ul>
                {createAttributeLine("onStart", "This function is executed once before the whole tour get started. You can use this function to prepare for your tour.")}
                <pre>{'functionsList.onStart = function() {\n\t// Prepare for your tour.\n};'}</pre>
                {createAttributeLine("onExit", "This function is executed once after FlexTourJS finished cleaning up everything. You can use this function to cleanup whatever you setup before.")}
                <pre>{'functionsList.onExit = function() {\n\t// Clean up your tour.\n};'}</pre>
                {createAttributeLine("beforeStepRender", "This function is executed once before every step. You can use it to prepare for your all of your steps.")}
                <pre>{'functionsList.beforeStepRender = function() {\n\t// Prepare for your step.\n};'}</pre>
                {createAttributeLine("afterStepRender", "This function is executed once after every step. You can use it to cleanup whatever you setup in beforeStepRender")}
                <pre>{'functionsList.afterStepRender = function() {\n\t// Clean up your step.\n};'}</pre>
            </ul>
        </div>;
    }
}