import * as React from "react";

interface IAttributeBox {
    header:string;
    subHeader:string;
    content:JSX.Element;
}

export class AttributeBox extends React.Component<IAttributeBox, {}> {
    render() {
        return <div className="col-lg-6 attributes-block">
            <div className="col-lg-12 text-center attribute-title">
                <h4>{this.props.header}</h4>
                <h5>{this.props.subHeader}</h5>
            </div>
            {this.props.content}
        </div>;
    }
}