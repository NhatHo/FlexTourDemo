import * as React from "react";

interface IAttributesBox {
    leftHeader: string;
    rightHeader: string;
    leftBlock: JSX.Element;
    rightBlock: JSX.Element;
}

export class AttributesBox extends React.Component <IAttributesBox, {}> {
    render() {
        return <li>
            {this.makeAttributeBox(this.props.leftHeader, "attributes-panel", this.props.leftBlock)}
            {this.makeAttributeBox(this.props.rightHeader, "attributes-panel-inverted", this.props.rightBlock)}
        </li>
    }

    private makeAttributeBox(type: string, className: string, body: JSX.Element): JSX.Element {
        return (
            <div className={className}>
                <div className="attributes-heading">
                    <h3><u className="attributes-heading-colorful">{type}</u></h3>
                </div>
                <div className="attributes-body">
                    {body}
                </div>
            </div>
        );
    }
}