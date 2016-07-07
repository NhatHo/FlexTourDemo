import * as React from "react";
import {Description} from "./sections/Description";
import {Attributes} from "./sections/Attributes";
import {Demo} from "./sections/Demo";

export class Body extends React.Component<{},{}> {
    render() {
        return <div className="bodybackground">
            <Description />
            <Attributes />
            <Demo />
        </div>;
    }
}