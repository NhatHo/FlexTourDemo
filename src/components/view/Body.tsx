import * as React from "react";
import {Description} from "./sections/Description";
import {Attributes} from "./sections/Attributes";
import {Wiki} from "./sections/Wiki";

export class Body extends React.Component<{},{}> {
    render() {
        return <div className="bodybackground">
            <Description />
            <Attributes />
            <Wiki />
        </div>;
    }
}