import * as React from "react";

import {Description} from "./sections/Description";
import {Attributes} from "./sections/Attributes";

export class Body extends React.Component<{},{}> {
    render() {
        return <div className="bodybackground">
            <Description />
            <Attributes />
        </div>;
    }
}