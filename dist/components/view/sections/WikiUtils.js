"use strict";
var React = require("react");
function createAttributeLine(code, desc) {
    return React.createElement("li", {className: "attribute-line"}, React.createElement("span", {className: "attr-title"}, code), React.createElement("span", {className: "attr-desc"}, " ⇒ ", desc));
}
exports.createAttributeLine = createAttributeLine;
function attributesWithCode(code, desc, attr) {
    var attributeBlock = [];
    for (var i = 1; i < desc.length; i++) {
        attributeBlock.push(React.createElement("span", {key: attr[i - 1] + i}, React.createElement("span", {className: "attr-code"}, attr[i - 1]), desc[i], " "));
    }
    var fullDesc = React.createElement("span", {className: "attr-desc"}, " ⇒ ", desc[0], " ", attributeBlock);
    return React.createElement("li", {className: "attribute-code-line"}, React.createElement("span", {className: "attr-title"}, code), fullDesc);
}
exports.attributesWithCode = attributesWithCode;
function tabNotice(content) {
    return React.createElement("h3", {className: "tab-notice"}, content);
}
exports.tabNotice = tabNotice;
function instruction(content) {
    return React.createElement("li", {className: "instruction"}, React.createElement("h4", null, content));
}
exports.instruction = instruction;
//# sourceMappingURL=WikiUtils.js.map