import * as React from "react";

export function createAttributeLine(code:string, desc:string):JSX.Element {
    return <li className="attribute-line">
        <span className="attr-title">{code}</span>
        <span className="attr-desc"> &rArr; {desc}</span>
    </li>;
}

export function attributesWithCode(code:string, desc:string[], attr:string[]):JSX.Element {
    let attributeBlock:JSX.Element[] = [];
    for (let i = 1; i < desc.length; i++) {
        attributeBlock.push(<span key={attr[i-1]+i}><span className="attr-code">{attr[i - 1]}</span>{desc[i]} </span>);
    }
    let fullDesc:JSX.Element = <span className="attr-desc"> &rArr; {desc[0]} {attributeBlock}</span>;
    return <li className="attribute-code-line">
        <span className="attr-title">{code}</span>
        {fullDesc}
    </li>;
}

export function tabNotice(content:string):JSX.Element {
    return <h3 className="tab-notice">
        {content}
    </h3>;
}

export function instruction(content:string):JSX.Element {
    return <li className="instruction">
        <h4>{content}</h4>
    </li>;
}