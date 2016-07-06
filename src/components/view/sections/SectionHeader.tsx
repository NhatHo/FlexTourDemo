import * as React from "react";

interface ISectionHeader {
    header: string;
    subHeader: string;
}

export class SectionHeader extends React.Component<ISectionHeader, {}> {
    render() {
        return <div className="row">
            <div className="col-lg-12 text-center">
                <h2 className="section-heading">{this.props.header}</h2>
                <h3 className="section-subheading">{this.props.subHeader}</h3>
            </div>
        </div>;
    }
}