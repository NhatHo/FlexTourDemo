import * as React from "react";
import {SectionHeader} from "./SectionHeader";

export class Demo extends React.Component<{}, {}> {
    render() {
        return <section id="demo">
            <div className="container">
                <SectionHeader
                    header="Action!!!"
                    subHeader="These are the components that will show you how FlexTourJS works."/>
            </div>

        </section>;
    }
}