import * as React from "react";

interface NewFeaturesProps {
    title: string;
    content: string;
    icon: string;
    code: string;
}

export class NewFeatures extends React.Component<NewFeaturesProps,{}> {
    render() {
        return <div className="col-md-4">
            <span className="fa-stack fa-4x feature-icon">
                <i className={this.getIconClass(this.props.icon)}></i>
            </span>
            <h4 className="desc-heading">{this.props.title}</h4>
            <p className="desc-content">{this.props.content}</p>
            <div className="well well-sm">
                {this.props.code}
            </div>
        </div>;
    }

    private getIconClass(icon: string): string {
        return "fa fa-stack-1x " + icon;
    }
}