import * as React from "react";

import { NewFeatures } from "./NewFeatures";
import { SectionHeader } from "./SectionHeader";

export class Description extends React.Component<{},{}> {
    render() {
        return (
            <section id="desc">
                <div className="container">
                    <SectionHeader header="What's New?"
                                   subHeader="The developers now can fully control the flow of the tour to compensate for application's performance." />
                    <div className="row text-center">
                        <NewFeatures
                            title="Shall you pass?"
                            content="You can check if the next step should be showed or not. FlexTourJS will not show the next step until all prerequisites are met."
                            icon="fa-check-square"
                            code="prerequisites: ['condition1','condition2', ...]"/>
                        <NewFeatures
                            title="Are you ready?"
                            content="Processing might take some time, FlexTourJs ensures that the next step will be displayed after your application has completed rendering."
                            icon="fa-clock-o"
                            code="prerequisites: ['?isVisible:$el', ...]"/>
                        <NewFeatures
                            title="Uh oh!"
                            content="When the target of your next step does not show or it is conditional, you can set up a back up route and FlexTourJS will flow to it. Without skip attribute, FlexTourJS will just skip ahead 1 step."
                            icon="fa-meh-o"
                            code="skip: {branch-step-number}, prerequisites: ['!skipCondition:$el', ...]"/>
                    </div>
                    <div className="row text-center">
                        <NewFeatures
                            title="Power!!!"
                            content="The power is in your hands, you can create new bubble styles, add new buttons and attach functionalities to them. Let your imagination run wild."
                            icon="fa-unlock"
                            code="buttons: ['buttonName: buttonStyle: buttonOnClick: buttonOnMouseUp: buttonOnMouseDown: buttonMouseOver: buttonMouseOut', ...]" />
                        <NewFeatures
                            title="Show off features?"
                            content="FlexTourJS will not limit your application in any way, you can do drag and drop, popup menu, dropdown menu, etc. without breaking your flow."
                            icon="fa-arrows"
                            code="dragAndDrop: true, modal: true, ..."/>
                        <NewFeatures
                            title="Everyone can use it!"
                            content="Yes, everyone can use it because FlexTourJS comes with NLS ready as well as fully accessible using keyboard, and even screen reader (coming soon)."
                            icon="fa-universal-access"
                            code="nextButton:{newName}, backButton:{newName}, skipButton:{newName}, doneButton:{newName}, ..."/>
                    </div>
                </div>
            </section>
        );
    }
}