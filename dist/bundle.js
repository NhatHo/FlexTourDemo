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
		var Footer_1 = __webpack_require__(13);
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
		var $ = __webpack_require__(3);
	var Header = (function (_super) {
	    __extends(Header, _super);
	    function Header() {
	        _super.apply(this, arguments);
	    }
	    Header.prototype.render = function () {
			return React.createElement("header", null, React.createElement("div", {className: "container"}, React.createElement("div", {className: "header-content"}, React.createElement("div", {className: "header-name"}, "Flexible Tour Framework"), React.createElement("div", {className: "header-subname"}, "Guide your customers through your amazing application."), React.createElement("a", {
				className: "page-scroll btn btn-success btn-lg",
				onClick: this.onClick
			}, React.createElement("span", {
				className: "glyphicon glyphicon-play-circle",
				"aria-hidden": "true"
			}), React.createElement("span", {className: "header-button"}, "Demo Time!")))));
	    };
	    Header.prototype.onClick = function (event) {
	        event.stopPropagation();
	        event.preventDefault();
			$('html,body').animate({
				scrollTop: $("#attributes").offset().top
			}, 'slow');
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
		var Wiki_1 = __webpack_require__(12);
	var Body = (function (_super) {
	    __extends(Body, _super);
	    function Body() {
	        _super.apply(this, arguments);
	    }
	    Body.prototype.render = function () {
			return React.createElement("div", {className: "bodybackground"}, React.createElement(Description_1.Description, null), React.createElement(Attributes_1.Attributes, null), React.createElement(Wiki_1.Wiki, null));
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
			return (React.createElement("section", {id: "desc"}, React.createElement("div", {className: "container"}, React.createElement(SectionHeader_1.SectionHeader, {
				header: "What's New?",
				subHeader: "The developers now can fully control the flow of the tour to compensate for application's performance."
			}), React.createElement("div", {className: "row text-center"}, React.createElement(NewFeatures_1.NewFeatures, {
				title: "Shall you pass?",
				content: "You can check if the next step should be showed or not. FlexTourJS will not show the next step until all prerequisites are met.",
				icon: "fa-check-square",
				code: "prerequisites: ['condition1','condition2', ...]"
			}), React.createElement(NewFeatures_1.NewFeatures, {
				title: "Are you ready?",
				content: "Processing might take some time, FlexTourJs ensures that the next step will be displayed after your application has completed rendering.",
				icon: "fa-clock-o",
				code: "prerequisites: ['?isVisible:params', ...]"
			}), React.createElement(NewFeatures_1.NewFeatures, {
				title: "Uh oh!",
				content: "When the target of your next step does not show or it is conditional, you can set up a back up route and FlexTourJS will flow to it. Without skip attribute, FlexTourJS will just skip ahead 1 step.",
				icon: "fa-meh-o",
				code: "skip: {branch-step-number}, prerequisites: ['!proceedCondition:params', ...]"
			})), React.createElement("div", {className: "row text-center"}, React.createElement(NewFeatures_1.NewFeatures, {
				title: "Power!!!",
				content: "The power is in your hands, you can create new bubble styles, add new buttons and attach functionalities to them. Let your imagination run wild.",
				icon: "fa-unlock",
				code: "buttons:['buttonName:buttonStyle:buttonOnClick']"
			}), React.createElement(NewFeatures_1.NewFeatures, {
				title: "Show off features?",
				content: "FlexTourJS will not limit your application in any way, you can do drag and drop, popup menu, dropdown menu, etc. without breaking your flow.",
				icon: "fa-arrows",
				code: "dragAndDrop:true, modal:true, ..."
			}), React.createElement(NewFeatures_1.NewFeatures, {
				title: "Everyone can use it!",
				content: "Yes, everyone can use it because FlexTourJS comes with NLS ready as well as fully accessible using keyboard, and even screen reader (coming soon).",
				icon: "fa-universal-access",
				code: "nextButton:{newName}, backButton:{newName}, skipButton:{newName}, doneButton:{newName}, ..."
			})))));
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
			return React.createElement("div", {className: "col-md-4"}, React.createElement("span", {className: "fa-stack fa-4x feature-icon"}, React.createElement("i", {className: this.getIconClass(this.props.icon)})), React.createElement("h4", {className: "desc-heading"}, this.props.title), React.createElement("p", {className: "desc-content"}, this.props.content), React.createElement("div", {className: "well well-sm"}, this.props.code));
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
			return React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-lg-12 text-center"}, React.createElement("h2", {className: "section-heading"}, this.props.header), React.createElement("hr", null), React.createElement("h3", {className: "section-subheading"}, this.props.subHeader)));
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
		var AttributeBox_1 = __webpack_require__(11);
	var Attributes = (function (_super) {
	    __extends(Attributes, _super);
	    function Attributes() {
	        _super.apply(this, arguments);
	    }
	    Attributes.prototype.render = function () {
			return React.createElement("section", {id: "attributes"}, React.createElement("div", {className: "container"}, React.createElement(SectionHeader_1.SectionHeader, {
				header: "How to use it?",
				subHeader: "Your tours will be described in form of array of JSON objects. Each object will describe 1 tour."
			}), React.createElement("div", {className: "row"}, React.createElement(AttributeBox_1.AttributeBox, {
				header: "Let's Start Simple",
				subHeader: "How to create a simple tour with unidirectional flow?",
				content: this._regularTourRunner()
			}), React.createElement(AttributeBox_1.AttributeBox, {
				header: "Error Checkings",
				subHeader: "How to capture dynamic components successfully?",
				content: this._prerequisitesAndBranching()
			})), React.createElement("div", {className: "row"}, React.createElement(AttributeBox_1.AttributeBox, {
				header: "Wait For It",
				subHeader: "How to make your tours wait for next step and setup backup route?",
				content: this._waitForElementAndFinalResort()
			}), React.createElement(AttributeBox_1.AttributeBox, {
				header: "One Page Is Not Enough",
				subHeader: "How to show tour in multiple pages, stop and resume current tour?",
				content: this._multipagePauseAndResume()
			})), React.createElement("div", {className: "row"}, React.createElement(AttributeBox_1.AttributeBox, {
				header: "Customized Triggers For Next Step",
				subHeader: "How to allow drag and drop, trigger next step on application's button clicked?",
				content: this._nextTriggerDnD()
			}), React.createElement(AttributeBox_1.AttributeBox, {
				header: "You Can Do Whatever You Want.",
				subHeader: "How to change color scheme, and create your own bubbles?",
				content: this._standaloneBubble()
			})), React.createElement("div", {className: "row"}, React.createElement(AttributeBox_1.AttributeBox, {
				header: "FlexTourJS Follows Your Cool Features",
				subHeader: "How to always keep the tour description at your step target?",
				content: this._floatingElements()
			}), React.createElement(AttributeBox_1.AttributeBox, {
				header: "Global Application Translation Made Easy",
				subHeader: "How to translate your tour into multiple languages?",
				content: this._nlsTranslation()
			}))));
	    };
		Attributes.prototype._linkToDemoAndSource = function (demoLink, sourceLink) {
			return React.createElement("div", {className: "link"}, React.createElement("p", null, React.createElement("a", {
				href: demoLink,
				className: "btn btn-primary demo-button",
				target: "_blank"
			}, React.createElement("i", {className: "fa fa-link"}), " Demo!"), React.createElement("a", {
				href: sourceLink,
				className: "btn btn-success",
				target: "_blank"
			}, React.createElement("i", {className: "fa fa-github"}), " Code?")));
		};
		Attributes.prototype._attributeContentBlock = function (body, buttons) {
			return React.createElement("div", {className: "col-lg-12 attributes-content"}, React.createElement("p", null, body), buttons);
		};
		Attributes.prototype._regularTourRunner = function () {
			var body = "In this example, FlexTourJS simply moves between steps without any fancy features. This might be used for simple applications where each step exist and are visible in the DOM when the page is loaded.";
			var buttons = this._linkToDemoAndSource("regular", "regular");
			return this._attributeContentBlock(body, buttons);
		};
		Attributes.prototype._prerequisitesAndBranching = function () {
			var body = "When your applications get complicated, maybe the next step in your tour is important to show, but it might not be available yet. FlexTourJS allows you to slow down the flow, and possibly skips steps entirely in case something bad happens.";
			var buttons = this._linkToDemoAndSource("prerequisite", "prerequisite");
			return this._attributeContentBlock(body, buttons);
		};
		Attributes.prototype._waitForElementAndFinalResort = function () {
			var body = "Consider this: when your application makes an AJAX call or processing something that takes up a lot of time, your tour might need to wait for it to be done. This demo shows you how to make the tour wait, while explaining to users what is going on. Furthermore, if anything goes wrong in the process, you can setup a backup route so that your tour will not end abruptly.";
			var buttons = this._linkToDemoAndSource("wait", "wait");
			return this._attributeContentBlock(body, buttons);
		};
		Attributes.prototype._multipagePauseAndResume = function () {
			var body = "When your tour spans multiple pages, just set the multipage flag to true in the step that opens new page and FlexTourJS will take care of the rest. Requirement: the next page must also have FlexTourJS framework and current tour loaded. The framework will automatically continue your tour from previous page. Furthermore, you can pause and resume the tour anytime you like.";
			var buttons = this._linkToDemoAndSource("multipage", "multipage");
			return this._attributeContentBlock(body, buttons);
		};
		Attributes.prototype._nextTriggerDnD = function () {
			var body = "Enabling dragAndDrop flag to true in step description will allow you to drag and drop target around without breaking your current tour. Directional buttons in the bubble are not the only way to control the flow, you can make a button in your application to next step trigger. This demo will show you how.";
			var buttons = this._linkToDemoAndSource("trigger", "trigger");
			return this._attributeContentBlock(body, buttons);
		};
		Attributes.prototype._standaloneBubble = function () {
			var body = "You don't think FlexTourJS bubble is good enough for you? No problem, you can just create your own version with functional buttons. This demo will show you how to do that. You don't like the default color and styles? Just import the less file and override the variables with your own selections.";
			var buttons = this._linkToDemoAndSource("standalone", "standalone");
			return this._attributeContentBlock(body, buttons);
		};
		Attributes.prototype._floatingElements = function () {
			var body = "More often that not your application has a floating element which never stays still. FlexTourJS has 2 ways to handle this scenario, either you block scrolling when this step is showed, or you let the framework re-render every 200 milliseconds.";
			var buttons = this._linkToDemoAndSource("floating", "floating");
			return this._attributeContentBlock(body, buttons);
		};
		Attributes.prototype._nlsTranslation = function () {
			var body = "Your application can go global and you might need to translate the instruction in the tour. FlexTourJS offers an easy way out so that you do not need to create and maintain multiple tour description JSON objects. Step description will be injected automatically.";
			var buttons = this._linkToDemoAndSource("floating", "floating");
			return this._attributeContentBlock(body, buttons);
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
		var AttributeBox = (function (_super) {
			__extends(AttributeBox, _super);
			function AttributeBox() {
	        _super.apply(this, arguments);
	    }

			AttributeBox.prototype.render = function () {
				return React.createElement("div", {className: "col-lg-5 attributes-block"}, React.createElement("div", {className: "col-lg-12 text-center attribute-title"}, React.createElement("h4", null, this.props.header), React.createElement("h5", null, this.props.subHeader)), this.props.content);
	    };
			return AttributeBox;
	}(React.Component));
		exports.AttributeBox = AttributeBox;


/***/ },
/* 12 */
	/***/ function (module, exports, __webpack_require__) {

		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
				for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
				function __() {
					this.constructor = d;
				}

				d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
			};
		var React = __webpack_require__(1);
		var SectionHeader_1 = __webpack_require__(9);
		var Wiki = (function (_super) {
			__extends(Wiki, _super);
			function Wiki() {
				_super.apply(this, arguments);
			}

			Wiki.prototype.render = function () {
				return React.createElement("section", {id: "demo"}, React.createElement("div", {className: "container"}, React.createElement(SectionHeader_1.SectionHeader, {
					header: "FlexTourJS API",
					subHeader: "You can learn more about how to write the tour description."
				}), React.createElement("ul", {className: "nav nav-pills nav-justified"}, React.createElement("li", {className: "active"}, React.createElement("a", {href: "#tourApi"}, "Tour Attributes")), React.createElement("li", null, React.createElement("a", {href: "#stepApi"}, "Step Attributes"))), React.createElement("div", {className: "tab-content"}, React.createElement("div", {
					className: "tab-pane active",
					id: "tourApi"
				}), React.createElement("div", {className: "tab-pane", id: "stepApi"}))));
			};
			return Wiki;
		}(React.Component));
		exports.Wiki = Wiki;


		/***/
	},
	/* 13 */
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