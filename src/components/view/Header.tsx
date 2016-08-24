import * as React from "react";
import {TourDescription} from "../models/TourDescriptions";
var FlexTour = require('flextourjs');

export class Header extends React.Component<{}, {}> {
    render() {
        return <header>
            <div className="container-fluid">
                <div className="header-content">
                    <div className="header-name">Flexible Tour Framework</div>
                    <div className="header-subname">Guide customers through your amazing application.</div>
                    <a className="page-scroll btn btn-success btn-lg" onClick={this.onClick}>
                        <span className="glyphicon glyphicon-play-circle" aria-hidden="true"></span>
                        <span className="header-button">Demo !</span>
                    </a>
                    <div className="media-block">
                        <a href="https://github.com/NhatHo/FlexTourJs" target="_blank">
                            <span className="fa fa-github fa-4x"></span>
                        </a>
                    </div>
                </div>
            </div>
        </header>;
    }

    private onClick(event: React.MouseEvent): void {
        event.stopPropagation();
        event.preventDefault();
        let tourDesc: TourDescription = {
            id: "fontpageTour",
            steps: [{
                content: "This is the new features section",
                title: "New Features",
                position: "top",
                target: "#desc"
            }, {
                content: "You can checkout the demo codes in this section so that you can apply them in your own apps.",
                title: "Demo",
                position: "top",
                target: "#attributes"
            }, {
                content: "The API of this framework is explained in details here. This will help you greatly in writing your own tours.",
                title: "API",
                position: "top",
                target: "#wiki"
            }]
        };

        let tourDescs: TourDescription[] = [tourDesc];
        let flextour = new FlexTour(tourDescs, {});
        flextour.run();
    }
}