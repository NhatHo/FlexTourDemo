/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var $ = __webpack_require__(3);
	var App_1 = __webpack_require__(4);
	ReactDOM.render(React.createElement(App_1.App, null), $("#root")[0]);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Header_1 = __webpack_require__(5);
	var Body_1 = __webpack_require__(6);
	var Footer_1 = __webpack_require__(12);
	var App = (function (_super) {
	    __extends(App, _super);
	    function App() {
	        _super.apply(this, arguments);
	    }
	    App.prototype.render = function () {
	        return React.createElement("div", null, React.createElement(Header_1.Header, null), React.createElement(Body_1.Body, null), React.createElement(Footer_1.Footer, null));
	    };
	    return App;
	}(React.Component));
	exports.App = App;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Header = (function (_super) {
	    __extends(Header, _super);
	    function Header() {
	        _super.apply(this, arguments);
	    }
	    Header.prototype.render = function () {
	        return React.createElement("header", null, React.createElement("div", {className: "container"}, React.createElement("div", {className: "header-content"}, React.createElement("div", {className: "header-name"}, "Flexible Tour Framework"), React.createElement("div", {className: "header-subname"}, "Guide your customers through your amazing application."), React.createElement("a", {href: "#description", className: "page-scroll btn btn-success btn-lg", onClick: this.onClick}, React.createElement("span", {className: "glyphicon glyphicon-play-circle", "aria-hidden": "true"}), React.createElement("span", {className: "header-button"}, "Take a Tour !!!")))));
	    };
	    Header.prototype.onClick = function (event) {
	        event.stopPropagation();
	        event.preventDefault();
	    };
	    Header.prototype.createTourDesc = function () {
	        var tourDesc = {
	            id: "demo-tour",
	            title: "Here we go!",
	            steps: [{
	                    content: "First step of the tour"
	                }]
	        };
	        var tourDescs = {
	            tours: [tourDesc]
	        };
	        return tourDescs;
	    };
	    return Header;
	}(React.Component));
	exports.Header = Header;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Description_1 = __webpack_require__(7);
	var Attributes_1 = __webpack_require__(10);
	var Body = (function (_super) {
	    __extends(Body, _super);
	    function Body() {
	        _super.apply(this, arguments);
	    }
	    Body.prototype.render = function () {
	        return React.createElement("div", {className: "bodybackground"}, React.createElement(Description_1.Description, null), React.createElement(Attributes_1.Attributes, null));
	    };
	    return Body;
	}(React.Component));
	exports.Body = Body;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var NewFeatures_1 = __webpack_require__(8);
	var SectionHeader_1 = __webpack_require__(9);
	var Description = (function (_super) {
	    __extends(Description, _super);
	    function Description() {
	        _super.apply(this, arguments);
	    }
	    Description.prototype.render = function () {
	        return (React.createElement("section", {id: "desc"}, React.createElement("div", {className: "container"}, React.createElement(SectionHeader_1.SectionHeader, {header: "What's New?", subHeader: "The developers now can fully control the flow of the tour to compensate for application's performance."}), React.createElement("div", {className: "row text-center"}, React.createElement(NewFeatures_1.NewFeatures, {title: "Shall you pass?", content: "You can check if the next step should be showed or not. FlexTourJS will not show the next step until all prerequisites are met.", icon: "fa-check-square", code: "prerequisites: ['condition1','condition2', ...]"}), React.createElement(NewFeatures_1.NewFeatures, {title: "Are you ready?", content: "Processing might take some time, FlexTourJs ensures that the next step will be displayed after your application has completed rendering.", icon: "fa-clock-o", code: "prerequisites: ['?isVisible:$el', ...]"}), React.createElement(NewFeatures_1.NewFeatures, {title: "Uh oh!", content: "When the target of your next step does not show or it is conditional, you can set up a back up route and FlexTourJS will flow to it. Without skip attribute, FlexTourJS will just skip ahead 1 step.", icon: "fa-meh-o", code: "skip: {branch-step-number}, prerequisites: ['!skipCondition:$el', ...]"})), React.createElement("div", {className: "row text-center"}, React.createElement(NewFeatures_1.NewFeatures, {title: "Power!!!", content: "The power is in your hands, you can create new bubble styles, add new buttons and attach functionalities to them. Let your imagination run wild.", icon: "fa-unlock", code: "buttons: ['buttonName: buttonStyle: buttonOnClick: buttonOnMouseUp: buttonOnMouseDown: buttonMouseOver: buttonMouseOut', ...]"}), React.createElement(NewFeatures_1.NewFeatures, {title: "Show off features?", content: "FlexTourJS will not limit your application in any way, you can do drag and drop, popup menu, dropdown menu, etc. without breaking your flow.", icon: "fa-arrows", code: "dragAndDrop: true, modal: true, ..."}), React.createElement(NewFeatures_1.NewFeatures, {title: "Everyone can use it!", content: "Yes, everyone can use it because FlexTourJS comes with NLS ready as well as fully accessible using keyboard, and even screen reader (coming soon).", icon: "fa-universal-access", code: "nextButton:{newName}, backButton:{newName}, skipButton:{newName}, doneButton:{newName}, ..."})))));
	    };
	    return Description;
	}(React.Component));
	exports.Description = Description;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var NewFeatures = (function (_super) {
	    __extends(NewFeatures, _super);
	    function NewFeatures() {
	        _super.apply(this, arguments);
	    }
	    NewFeatures.prototype.render = function () {
	        return React.createElement("div", {className: "col-md-4"}, React.createElement("span", {className: "fa-stack fa-4x"}, React.createElement("i", {className: "fa fa-circle fa-stack-2x text-primary"}), React.createElement("i", {className: this.getIconClass(this.props.icon)})), React.createElement("h4", {className: "desc-heading"}, this.props.title), React.createElement("p", {className: "desc-content"}, this.props.content), React.createElement("div", {className: "well well-sm"}, React.createElement("i", {className: "fa fa-code"}, " "), " ", this.props.code, " ", React.createElement("i", {className: "fa fa-code"}, " ")));
	    };
	    NewFeatures.prototype.getIconClass = function (icon) {
	        return "fa fa-stack-1x " + icon;
	    };
	    return NewFeatures;
	}(React.Component));
	exports.NewFeatures = NewFeatures;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var SectionHeader = (function (_super) {
	    __extends(SectionHeader, _super);
	    function SectionHeader() {
	        _super.apply(this, arguments);
	    }
	    SectionHeader.prototype.render = function () {
	        return React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-lg-12 text-center"}, React.createElement("h2", {className: "section-heading"}, this.props.header), React.createElement("h3", {className: "section-subheading"}, this.props.subHeader)));
	    };
	    return SectionHeader;
	}(React.Component));
	exports.SectionHeader = SectionHeader;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var SectionHeader_1 = __webpack_require__(9);
	var AttributesBox_1 = __webpack_require__(11);
	var Attributes = (function (_super) {
	    __extends(Attributes, _super);
	    function Attributes() {
	        _super.apply(this, arguments);
	    }
	    Attributes.prototype.render = function () {
	        return React.createElement("section", {id: "attributes"}, React.createElement("div", {className: "container"}, React.createElement(SectionHeader_1.SectionHeader, {header: "How to use it?", subHeader: "Your tours will be described in form of array of JSON object. Each object will declare 1 tour."}), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-lg-12"}, React.createElement("ul", {className: "attributes-list"}, React.createElement(AttributesBox_1.AttributesBox, {icon: "fa-exclamation-circle", leftSideHeader: "", leftSideBody: "", rightSideHeader: "", rightSideBody: ""}), React.createElement(AttributesBox_1.AttributesBox, {icon: "fa-question-circle", leftSideHeader: "", leftSideBody: "", rightSideHeader: "", rightSideBody: ""}))))));
	    };
	    return Attributes;
	}(React.Component));
	exports.Attributes = Attributes;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var AttributesBox = (function (_super) {
	    __extends(AttributesBox, _super);
	    function AttributesBox() {
	        _super.apply(this, arguments);
	    }
	    AttributesBox.prototype.render = function () {
	        return React.createElement("li", null, React.createElement("div", {className: "attributes-image"}, React.createElement("img", {className: "img-circle img-responsive", src: this.props.icon, alt: ""})), this.makeAttributeBox("Tour", "attributes-heading", this.props.leftSideHeader, this.props.leftSideBody), this.makeAttributeBox("Steps", "attributes-panel-inverted", this.props.rightSideHeader, this.props.rightSideBody));
	    };
	    AttributesBox.prototype.makeAttributeBox = function (type, className, heading, body) {
	        return (React.createElement("div", {className: className}, React.createElement("div", {className: "attributes-heading"}, React.createElement("h4", null, type), React.createElement("h4", {className: "subheading"}, heading)), React.createElement("div", {className: "attributes-body"}, React.createElement("p", {className: "params-text"}, body))));
	    };
	    return AttributesBox;
	}(React.Component));
	exports.AttributesBox = AttributesBox;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Footer = (function (_super) {
	    __extends(Footer, _super);
	    function Footer() {
	        _super.apply(this, arguments);
	    }
	    Footer.prototype.render = function () {
	        return React.createElement("div", null);
	    };
	    return Footer;
	}(React.Component));
	exports.Footer = Footer;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map