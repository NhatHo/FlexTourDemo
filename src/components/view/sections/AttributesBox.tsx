import * as React from "react";

interface IAttributesBox {
    icon: string;
    leftHeader: string;
    rightHeader: string;
    leftBlock: JSX.Element;
    rightBlock: JSX.Element;
}

export class AttributesBox extends React.Component <IAttributesBox, {}> {
    render() {
        return <li>
            <div className="attributes-image fa-stack fa-4x">
                <i className={"fa fa-inverse attributes-icon " + this.props.icon}></i>
            </div>
            {this.makeAttributeBox(this.props.leftHeader, "attributes-panel", this.props.leftBlock)}
            {this.makeAttributeBox(this.props.rightHeader, "attributes-panel-inverted", this.props.rightBlock)}
        </li>
    }

    private makeAttributeBox(type: string, className: string, body: JSX.Element): JSX.Element {
        return (
            <div className={className}>
                <div className="attributes-heading">
                    <h4>{type}</h4>
                </div>
                <div className="attributes-body">
                    {body}
                </div>
            </div>
        );
    }
}