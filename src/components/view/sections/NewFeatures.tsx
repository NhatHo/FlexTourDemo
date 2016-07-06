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
            <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className={this.getIconClass(this.props.icon)}></i>
            </span>
            <h4 className="desc-heading">{this.props.title}</h4>
            <p className="desc-content">{this.props.content}</p>
            <div className="well well-sm">
                <i className="fa fa-code">&nbsp;</i>
                &ensp;{this.props.code}&ensp;
                <i className="fa fa-code">&nbsp;</i>
            </div>
        </div>;
    }

    private getIconClass(icon: string): string {
        return "fa fa-stack-1x " + icon;
    }
}