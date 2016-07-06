import * as React from "react";
import {TourDescriptions, TourDescription} from "../models/TourDescriptions";

export class Header extends React.Component<{}, {}> {
    render() {
        return <header>
            <div className="container">
                <div className="header-content">
                    <div className="header-name">Flexible Tour Framework</div>
                    <div className="header-subname">Guide your customers through your amazing application.</div>
                    <a href="#description" className="page-scroll btn btn-success btn-lg" onClick={this.onClick}>
                        <span className="glyphicon glyphicon-play-circle" aria-hidden="true"></span>
                        <span className="header-button">Take a Tour !!!</span>
                    </a>
                </div>
            </div>
        </header>;
    }

    private onClick(event: React.MouseEvent): void {
        event.stopPropagation();
        event.preventDefault();
    }

    private createTourDesc(): TourDescriptions {
        let tourDesc: TourDescription = {
            id: "demo-tour",
            title: "Here we go!",
            steps: [{
                content: "First step of the tour"
            }]
        };
        let tourDescs: TourDescriptions = {
          tours: [tourDesc]
        };
        return tourDescs;
    }
}