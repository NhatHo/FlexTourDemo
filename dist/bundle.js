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
		var Footer_1 = __webpack_require__(18);
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
			}), React.createElement("span", {className: "header-button"}, "Demo Time!")), React.createElement("a", {className: "btn btn-block btn-social btn-github header-icon"}, React.createElement("span", {className: "fa fa-github fa-4x fa-stack"})))));
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
			return (React.createElement("section", {id: "desc"}, React.createElement(SectionHeader_1.SectionHeader, {
				header: "What's New?",
				subHeader: "The developers now can fully control the flow of the tour to compensate for application's performance."
			}), React.createElement("div", {className: "container"}, React.createElement("div", {className: "row text-center"}, React.createElement(NewFeatures_1.NewFeatures, {
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
				content: "When the target of your next step does not show or it is conditional, you can set up a back up route and FlexTourJS will flow to it.",
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
				content: "Yes, everyone can use it because FlexTourJS comes with NLS ready as well as fully accessible using keyboard.",
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
			return React.createElement("div", {className: "section-header"}, React.createElement("div", {className: "container"}, React.createElement("div", {className: "col-lg-12 text-center"}, React.createElement("h2", {className: "section-heading"}, this.props.header), React.createElement("hr", null), React.createElement("h3", {className: "section-subheading"}, this.props.subHeader))));
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
			return React.createElement("section", {id: "attributes"}, React.createElement(SectionHeader_1.SectionHeader, {
				header: "How to use it?",
				subHeader: "Your tours will be described in form of array of JSON objects. Each object will describe 1 tour."
			}), React.createElement("div", {className: "container"}, React.createElement("div", {className: "row"}, React.createElement(AttributeBox_1.AttributeBox, {
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
				return React.createElement("div", {className: "col-lg-6 attributes-block"}, React.createElement("div", {className: "col-lg-12 text-center attribute-title"}, React.createElement("h4", null, this.props.header), React.createElement("h5", null, this.props.subHeader)), this.props.content);
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
		var StepAttributesTab_1 = __webpack_require__(13);
		var TourAttributesTab_1 = __webpack_require__(15);
		var FunctionsListTab_1 = __webpack_require__(16);
		var TranslationTab_1 = __webpack_require__(17);
		var LOCAL_STORAGE_KEY = "flextour.demo.attrs";
		var STEP = "step";
		var TOUR = "tour";
		var FUNCS = "funcs";
		var MESS = "mess";
		var TAB = "tab";
		var Wiki = (function (_super) {
			__extends(Wiki, _super);
			function Wiki() {
				_super.call(this);
				this.state = {tab: this._getCurrentTab()};
			}

			Wiki.prototype.render = function () {
				var currentTabPanel;
				var activeTab;
				if (this.state.tab === TOUR) {
					activeTab = React.createElement("ul", {className: "nav nav-tabs nav-justified"}, React.createElement("li", {
						className: "active wiki-tab-header",
						id: "tourAttrTab"
					}, React.createElement("a", {
						href: "#tourApi",
						onClick: this._switchToTour.bind(this)
					}, "Tour Attributes")), React.createElement("li", {
						className: "wiki-tab-header",
						id: "stepAttrTab"
					}, React.createElement("a", {onClick: this._switchToStep.bind(this)}, "Step Attributes")), React.createElement("li", {
						className: "wiki-tab-header",
						id: "stepAttrTab"
					}, React.createElement("a", {onClick: this._switchToFuncs.bind(this)}, "Functions List")), React.createElement("li", {
						className: "wiki-tab-header",
						id: "stepAttrTab"
					}, React.createElement("a", {
						href: "#transApi",
						onClick: this._switchToTrans.bind(this)
					}, "Translation")));
					currentTabPanel = React.createElement(TourAttributesTab_1.TourAttributesTab, null);
				}
				else if (this.state.tab === STEP) {
					activeTab = React.createElement("ul", {className: "nav nav-tabs nav-justified"}, React.createElement("li", {
						className: "wiki-tab-header",
						id: "tourAttrTab"
					}, React.createElement("a", {onClick: this._switchToTour.bind(this)}, "Tour Attributes")), React.createElement("li", {
						className: "active wiki-tab-header",
						id: "stepAttrTab"
					}, React.createElement("a", {
						href: "#stepsApi",
						onClick: this._switchToStep.bind(this)
					}, "Step Attributes")), React.createElement("li", {
						className: "wiki-tab-header",
						id: "stepAttrTab"
					}, React.createElement("a", {onClick: this._switchToFuncs.bind(this)}, "Functions List")), React.createElement("li", {
						className: "wiki-tab-header",
						id: "stepAttrTab"
					}, React.createElement("a", {
						href: "#transApi",
						onClick: this._switchToTrans.bind(this)
					}, "Translation")));
					currentTabPanel = React.createElement(StepAttributesTab_1.StepAttributesTab, null);
				}
				else if (this.state.tab === FUNCS) {
					activeTab = React.createElement("ul", {className: "nav nav-tabs nav-justified"}, React.createElement("li", {
						className: "wiki-tab-header",
						id: "tourAttrTab"
					}, React.createElement("a", {onClick: this._switchToTour.bind(this)}, "Tour Attributes")), React.createElement("li", {
						className: "wiki-tab-header",
						id: "stepAttrTab"
					}, React.createElement("a", {onClick: this._switchToStep.bind(this)}, "Step Attributes")), React.createElement("li", {
						className: "active wiki-tab-header",
						id: "stepAttrTab"
					}, React.createElement("a", {
						href: "#funcsApi",
						onClick: this._switchToFuncs.bind(this)
					}, "Functions List")), React.createElement("li", {
						className: "wiki-tab-header",
						id: "stepAttrTab"
					}, React.createElement("a", {
						href: "#transApi",
						onClick: this._switchToTrans.bind(this)
					}, "Translation")));
					currentTabPanel = React.createElement(FunctionsListTab_1.FunctionsListTab, null);
				}
				else if (this.state.tab = MESS) {
					activeTab = React.createElement("ul", {className: "nav nav-tabs nav-justified"}, React.createElement("li", {
						className: "wiki-tab-header",
						id: "tourAttrTab"
					}, React.createElement("a", {onClick: this._switchToTour.bind(this)}, "Tour Attributes")), React.createElement("li", {
						className: "wiki-tab-header",
						id: "stepAttrTab"
					}, React.createElement("a", {onClick: this._switchToStep.bind(this)}, "Step Attributes")), React.createElement("li", {
						className: "wiki-tab-header",
						id: "stepAttrTab"
					}, React.createElement("a", {
						href: "#funcsApi",
						onClick: this._switchToFuncs.bind(this)
					}, "Functions List")), React.createElement("li", {
						className: "active wiki-tab-header",
						id: "stepAttrTab"
					}, React.createElement("a", {
						href: "#transApi",
						onClick: this._switchToTrans.bind(this)
					}, "Translation")));
					currentTabPanel = React.createElement(TranslationTab_1.TranslationTab, null);
				}
				return React.createElement("section", {id: "wiki"}, React.createElement(SectionHeader_1.SectionHeader, {
					header: "FlexTourJS API",
					subHeader: "You can learn more about how to write the tour description."
				}), React.createElement("div", {className: "container"}, activeTab, React.createElement("div", {className: "tab-content"}, currentTabPanel)));
			};
			Wiki.prototype._getCurrentTab = function () {
				var currentAttr = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
				if (currentAttr && currentAttr.hasOwnProperty(TAB)) {
					return currentAttr[TAB];
				}
				return TOUR;
			};
			Wiki.prototype._setCurrentTab = function (tourValue) {
				localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({tab: tourValue}));
			};
			Wiki.prototype._switchToStep = function (event) {
				event.preventDefault();
				event.stopPropagation();
				this.setState({tab: STEP});
				this._setCurrentTab(STEP);
			};
			Wiki.prototype._switchToTour = function (event) {
				event.preventDefault();
				event.stopPropagation();
				this.setState({tab: TOUR});
				this._setCurrentTab(TOUR);
			};
			Wiki.prototype._switchToFuncs = function (event) {
				event.preventDefault();
				event.stopPropagation();
				this.setState({tab: FUNCS});
				this._setCurrentTab(FUNCS);
			};
			Wiki.prototype._switchToTrans = function (event) {
				event.preventDefault();
				event.stopPropagation();
				this.setState({tab: MESS});
				this._setCurrentTab(MESS);
			};
			return Wiki;
		}(React.Component));
		exports.Wiki = Wiki;


		/***/
	},
	/* 13 */
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
		var $ = __webpack_require__(3);
		var WikiUtils_1 = __webpack_require__(14);
		var StepAttributesTab = (function (_super) {
			__extends(StepAttributesTab, _super);
			function StepAttributesTab() {
				_super.apply(this, arguments);
			}

			StepAttributesTab.prototype.componentDidMount = function () {
				$('html, body').animate({scrollTop: $("#stepsApi").offset().top}, 'slow');
			};
			StepAttributesTab.prototype.render = function () {
				return React.createElement("div", {
					className: "tab-pane active",
					id: "stepsApi"
				}, this._stepAttributesBlock());
			};
			StepAttributesTab.prototype._stepAttributesBlock = function () {
				return React.createElement("ul", {className: "attributes-block-api"}, WikiUtils_1.tabNotice("Step attributes define the behavior of the current step only. Each step inherits all of the attributes of the tour, however, by re-declare the same attributes, you will override the pre-defined attributes in the tour."), React.createElement("hr", null), WikiUtils_1.createAttributeLine("content: string (required)", "The introduction, or direction you want to show the users in this current step."), WikiUtils_1.attributesWithCode("position: string (required)", ["Default: '", "', this is the position of the bubble relative to the target. The other options are: '", "', '", "', '", "' and '", "'. When you set it to float, the bubble will not be attached to any target, instead it will just FLOAT in the middle of the screen."], ["bottom", "top", "left", "right", "float"]), WikiUtils_1.attributesWithCode("target: string (required unless float)", ["Unless the position is set to", " you must set a target for each step. The target is the only thing that is visible to users, the rest of the application will be greyed out. The bubble will be attached to the target in the given position."], ["float"]), React.createElement("hr", null), WikiUtils_1.attributesWithCode("type: string", ["Default '", "'.", " step will have 'i' icon indicating that users just need to read the info and click on directional button. ", "step will have 'action' icon indicating that users have to interact with the target before proceeding to next step."], ["info", "info", "action"]), WikiUtils_1.createAttributeLine("title: string", "The title will appear on top of the content block."), WikiUtils_1.attributesWithCode("nextStepTrigger: string", ["This is another way for you to trigger the next step in your tour. FlexTourJS will attach an onclick listener to the element corresponds to the DOM selector string. If you set ", ", the framework will use the step ", " as the trigger."], ["nextStepTrigger:'@target@'", "target"]), WikiUtils_1.attributesWithCode("flashTarget: string", ["Similar to ", " the value of this attribute is a DOM selector string. When set, the framework will put an flashing border around the element to indicate that user should do something with that element. You can also set ", " to put the flashing border around step target."], ["nextStepTrigger", "flashTarget:'@target@'"]), React.createElement("hr", null), WikiUtils_1.tabNotice("You should use the below attributes with care. These attributes can be very powerful if used correctly."), WikiUtils_1.attributesWithCode("modal: boolean", ["Default: ", ", when set to ", " FlexTourJS will attach a listener to the window scroll event. It will debounce every 200 milliseconds on scroll event and re-render everything FlexTourJS contains. This is extremely useful when you have a floating element: modal, popup dialog, etc. because they move as you scroll. If the target is a stationary element, you should NOT use this attribute because it is a waste of rendering effort."], ["false", "true"]), WikiUtils_1.attributesWithCode("scrollLock: boolean", ["Default: ", ", when set to ", " the framework will disable page scrolling to keep the element in place. The lock will be released when you move onto the next step or end the tour so it will not alter your application behavior. This attribute also targets the moving element as ", " attribute, however, by locking scrolling, FlexTourJS does NOT need to re-render thus improve performance."], ["false", "true", "modal"]), WikiUtils_1.attributesWithCode("transition: boolean", ["Default: ", ", when set to ", " the framework will immediately proceed to the next step. Why is it useful? When your next step takes a long period of time (several seconds to minutes), you can use this step as a notification to ask users to wait, otherwise they would thing the system is hung. This feature is usually used to compensate for the slow processing speed in production environment. You should only use this feature if the next step has the ", " condition."], ["false", "true", "waitFor"]), WikiUtils_1.attributesWithCode("skip: number", ["If you want to let users skip to a specific step, set the index number of the destination step here. However, you have to make sure that the destination step's target exists and is visible in the DOM. Furthermore, this attribute can be used as backup route for", " attribute."], ["prerequisites: proceedIf"]), WikiUtils_1.attributesWithCode("dragAndDrop: boolean", ["Default: ", ", when set to ", " the framework will attach dragstart and dragend event onto the step's target. When the target is dragged, the tour engine will be paused. When the target is dropped, the tour will be resumed to the next step. Developers must check to see if users drop the target at correct location, if it is not, they can revert the flow to the previous step."], ["false", "true"]), WikiUtils_1.attributesWithCode("multipage: boolean", ["Default: ", ", when set to ", " FlexTourJS will automatically store the current tour id and current step index into localstorage. The framework assumes that the next step will be in another page. This is most useful to be used with ", " attribute. Developers have to ensure that the next page has FlexTourJS and the tour objects loaded so that it can continue the tour automatically."], ["false", "true", "nextStepTrigger"]), WikiUtils_1.attributesWithCode("savePoint: boolean", ["Default: ", ", when you resume the tour, occassionaly the target of your step is not visible or doesn not exist: target is in a modal that users have to click on a button to get to. FlexTourJS will at first check to see if your paused step's target is available, when it is not, it will loop back to find the closest step that has ", ". As in the example, the button that open the modal should be your savePoint as it sets up the application for the following steps."], ["false", "savePoint:true"]), React.createElement("hr", null), WikiUtils_1.createAttributeLine("prerequisites: string[]", "This is the most complicated as well as the most powerful attribute in FlexTourJS. There are 3 types of conditions that you can use to make sure the next/previous/branch step is safe for the tour engine to proceed. All of these conditions will be executed before FlexTourJS create/modify the overlays, content bubble, buttons, etc. Furthermore, you can also dynamically modify the step description on the fly which is extremely useful for dynamically created element that does not exist until the current step."), React.createElement("ol", null, WikiUtils_1.attributesWithCode("prerequisites: ['function1', 'function2']", ["Type 1: error checking. Each element in the array is the name of a function in ", ". See FunctionsList construction section below for more information. Each function will be executed in order, and at any point that the function returns ", " the next step will NOT be allowed. The framework will still show the current step until all prerequisites of the next step return ", ". Bonus: FlexTourJS will pass the step object to your function so that you can modify it on the fly: ", "."], ["functionsList", "false/undefined", "true", "functionsList.function1 = function(currentStep) {// Do what you want with the step object here};"]), WikiUtils_1.attributesWithCode("prerequisites: ['?waitForFuncName:param1,param2,...']", ["Type 2: wait for condition. Similarly, the ", " is the name of a function in ", ". The parameters (DOM element selector) will be passed to you in the form of array string. This function uses ", " and ", " to continuously check until either function returns ", " or it runs out of attempts. This function has to return ", " for the framework to continue to next step. If the step runs out of retries, it will check the backup route as describe in option 3, so you should set a backup route if your step target might or might not be available."], ["waitForFuncName", "functionsList", "retries", "waitIntervals", "true", "true"]), WikiUtils_1.attributesWithCode("prerequisites: ['!proceedIfFuncName:param1,param2,...']", ["Type 3: proceed if condition. The ", " corresponds to a function in ", ". The parameters (DOM element selector) will be passed to you in the form of array string. This condition is your backup route. This is where you decide whether you should end the tour now since the next step will never be available. Logic: proceedIfFuncName should return ", " if you are absolutely sure that the next step is available and safe. On the other hand, the function must return ", " for the framework to skip ahead 1 step if your tour is moving forward, and skip back 1 step if your tour is moving backward. Furthermore, if you use this condition with ", " attribute set in the step object, FlexTourJS will skip ahead to that pre-set step. Notice: as this is the backup route, you should set it at the end of ", " array."], ["proceedIfFuncName", "functionsList", "true", "false", "skip", "prerequisites"]), WikiUtils_1.attributesWithCode("isVisible, doesExist", ["These are the 2 built-in functions that you can use for your prerequisites. I.e: ", " which will continuously check until both step's target and $el1 are visible. Similarly, ", " will check continuously until both step's target and $el1 exist in the DOM. To use these 2 functions in option 3: ", " check for the visibility of those elements for the last time, if they are still not visible, the framework will skip the next step. Similarly for ", " which check for the last time if elements exist in the DOM."], ["'?isVisible:@target@,$el1'", "?doesExist:@target@,$el1", "'!isVisible:@target@,$el1'", "!doesExist:@target@,$el1"])));
			};
			return StepAttributesTab;
		}(React.Component));
		exports.StepAttributesTab = StepAttributesTab;


		/***/
	},
	/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
		var React = __webpack_require__(1);

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


		/***/
	},
	/* 15 */
	/***/ function (module, exports, __webpack_require__) {

		"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
		var $ = __webpack_require__(3);
		var WikiUtils_1 = __webpack_require__(14);
		var TourAttributesTab = (function (_super) {
			__extends(TourAttributesTab, _super);
			function TourAttributesTab() {
				_super.apply(this, arguments);
			}

			TourAttributesTab.prototype.componentDidMount = function () {
				$('html, body').animate({scrollTop: $("#tourApi").offset().top}, 'slow');
			};
			TourAttributesTab.prototype.render = function () {
				return React.createElement("div", {
					className: "tab-pane active",
					id: "tourApi"
				}, this._tourAttributesBlock());
			};
			TourAttributesTab.prototype._tourAttributesBlock = function () {
				return React.createElement("ul", {className: "attributes-block-api"}, WikiUtils_1.tabNotice("Tour attributes define the general behaviors of ALL steps within the tour."), React.createElement("hr", null), WikiUtils_1.createAttributeLine("id: string (required)", "Each tour should have a unique id without WHITE SPACE, this is used for keeping track of which tour is being run. "), WikiUtils_1.createAttributeLine("steps: Steps[]", "This attribute contains all of the steps in the tour. Each step should be an object. See Step Attributes tab for more information."), React.createElement("hr", null), WikiUtils_1.attributesWithCode("noButtons: boolean", ["Default: ", ". When set to true, Skip, Back, Next and Done buttons will not be shown in all steps."], ["false"]), WikiUtils_1.attributesWithCode("noBack: boolean", ["Default: ", ". When set to true, Back button in the entire tour will be disabled. This can be useful for unidirectional flow."], ["false"]), WikiUtils_1.attributesWithCode("endOnOverlayClick: boolean", ["Default: ", ", enables onclick listener on overlays around target. For tour that has high chance of misclicking, you might want to disable this feature."], ["true"]), WikiUtils_1.attributesWithCode("endOnEsc: boolean", ["Default: ", ", enables keyboard listener on ESC key which will end the tour engine when users press ESC."], ["true"]), WikiUtils_1.attributesWithCode("pauseOnExit: boolean", ["Default: ", ", this feature will store your tour id and current step into localstorage (light weight). It can be quite useful if you want to resume the tour later on."], ["false"]), WikiUtils_1.createAttributeLine("delay: number", "The period of time that the framework has to wait for rendering the bubble in each step. A small delay at the beginning of each step can help when you use frameworks such as React, since you cannot be certain when the target will be rendered entirely."), WikiUtils_1.createAttributeLine("retries: number", "The number of attempts that FlexTourJS will make to find your target. This attribute is important for element that takes time to render."), WikiUtils_1.createAttributeLine("waitIntervals: number", "Have to be set with 'retries' attribute, this defines the wait time between retries."), WikiUtils_1.createAttributeLine("canInteract: boolean", "Default 'false', when set to 'true', users can interact with the target: type, click around, etc. You should be sure that their interaction with the target will not cause any unexpected behavior in the app when enabling this feature."), WikiUtils_1.createAttributeLine("nextButton: string", "Change the text of the Next button. It should be used for translation purposes."), WikiUtils_1.createAttributeLine("backButton: string", "Change the text of the Back button. It should be used for translation purposes."), WikiUtils_1.createAttributeLine("skipButton: string", "Change the text of the Skip button. It should be used for translation purposes."), WikiUtils_1.createAttributeLine("doneButton: string", "Change the text of the Done button. It should be used for translation purposes."), WikiUtils_1.attributesWithCode("buttons: [{name: string, style, string, onclick: string}]", ["When you think Skip, Back, Next, Done is not the correct solution for your tour, you can create your own buttons in the bubble using this attribute. The", " is the name of the function that is stored in actionsList object (More on this in next section)."], ["onclick: value"]));
			};
			return TourAttributesTab;
		}(React.Component));
		exports.TourAttributesTab = TourAttributesTab;


		/***/
	},
	/* 16 */
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
		var $ = __webpack_require__(3);
		var WikiUtils_1 = __webpack_require__(14);
		var FunctionsListTab = (function (_super) {
			__extends(FunctionsListTab, _super);
			function FunctionsListTab() {
				_super.apply(this, arguments);
			}

			FunctionsListTab.prototype.componentDidMount = function () {
				$('html, body').animate({scrollTop: $("#funcsApi").offset().top}, 'slow');
			};
			FunctionsListTab.prototype.render = function () {
				return React.createElement("div", {
					className: "tab-pane active",
					id: "funcsApi"
				}, this._functionsListBlock());
			};
			FunctionsListTab.prototype._functionsListBlock = function () {
				return React.createElement("div", {className: "attributes-block-api non-list-block"}, WikiUtils_1.tabNotice("First you have to declare an empty object to contains the functions."), React.createElement("pre", null, 'var functionsList = {};'), React.createElement("hr", null), WikiUtils_1.tabNotice("Now you just need to create functions and attach them to the object. If you remember correctly from the Step Attributes, there are 3 types of conditions that you can use."), React.createElement("ol", null, WikiUtils_1.instruction("For type 1 (error checking), the function that you create can look like this."), React.createElement("pre", null, 'functionsList.functionName1 = function(currentStep) {\n\t// Do whatever you want in here for function 1\n\t// If you modify the currentStep object in this function, the actual step will also be modified.\n\treturn true;\n};'), WikiUtils_1.instruction("For type 2 (wait for condition) and type 3 (proceed if condition), the function is declared the same way."), React.createElement("pre", null, 'functionsList.functionName2 = function(elementList) {\n\t// Do whatever you want in here for function 2\n\t// The elementList contains an array of DOM selector string.\n\treturn false;\n};')), React.createElement("hr", null), WikiUtils_1.tabNotice("There are also 4 pre-set functions that can be useful for you:"), React.createElement("ul", null, WikiUtils_1.createAttributeLine("onStart", "This function is executed once before the whole tour get started. You can use this function to prepare for your tour."), React.createElement("pre", null, 'functionsList.onStart = function() {\n\t// Prepare for your tour.\n};'), WikiUtils_1.createAttributeLine("onExit", "This function is executed once after FlexTourJS finished cleaning up everything. You can use this function to cleanup whatever you setup before."), React.createElement("pre", null, 'functionsList.onExit = function() {\n\t// Clean up your tour.\n};'), WikiUtils_1.createAttributeLine("beforeStepRender", "This function is executed once before every step. You can use it to prepare for your all of your steps."), React.createElement("pre", null, 'functionsList.beforeStepRender = function() {\n\t// Prepare for your step.\n};'), WikiUtils_1.createAttributeLine("afterStepRender", "This function is executed once after every step. You can use it to cleanup whatever you setup in beforeStepRender"), React.createElement("pre", null, 'functionsList.afterStepRender = function() {\n\t// Clean up your step.\n};')));
			};
			return FunctionsListTab;
		}(React.Component));
		exports.FunctionsListTab = FunctionsListTab;


		/***/
	},
	/* 17 */
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
		var $ = __webpack_require__(3);
		var WikiUtils_1 = __webpack_require__(14);
		var TranslationTab = (function (_super) {
			__extends(TranslationTab, _super);
			function TranslationTab() {
				_super.apply(this, arguments);
			}

			TranslationTab.prototype.componentDidMount = function () {
				$('html, body').animate({scrollTop: $("#transApi").offset().top}, 'slow');
			};
			TranslationTab.prototype.render = function () {
				return React.createElement("div", {
					className: "tab-pane active",
					id: "transApi"
				}, this._translationBlock());
			};
			TranslationTab.prototype._translationBlock = function () {
				return React.createElement("div", {className: "attributes-block-api non-list-block"}, WikiUtils_1.tabNotice("When your application reaches Global scale, you might want to translate the UI to different languages. As a way to introduce your product, the steps in your tours should be translated as well."), WikiUtils_1.instruction("Create a tour object with attributes as explained in Tour Attributes and Step Attributes tabs. Instead of providing the full description, you just need to provide the keyword in step's content."), React.createElement("pre", null, "var tourDesc = {\n\tid: 'sample',\n\t...\n\tsteps:[{\n\t\t...\n\t\tcontent: 'coolfeature'\n\t\t...\n\t}\n}];"), React.createElement("hr", null), WikiUtils_1.instruction("Now, you need to provide an object contains translated object."), React.createElement("pre", null, "var translationObject = {\n\t...\n\tcoolFeature: 'translatedString'\n\t...\n};"), WikiUtils_1.tabNotice("FlexTourJS will automatically inject the messages into the tour description file. By doing it this way, you only need to keep 1 tour description, and multiple translated files instead of multiple translated tour description. It reduces a huge amount of effort for maintainance."), React.createElement("pre", null, "var flexTour = new FlexTour('tourDesc', 'functionsList|{}', 'translationObject);"));
			};
			return TranslationTab;
		}(React.Component));
		exports.TranslationTab = TranslationTab;


		/***/
	},
	/* 18 */
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
	var Footer = (function (_super) {
	    __extends(Footer, _super);
	    function Footer() {
	        _super.apply(this, arguments);
	    }
	    Footer.prototype.render = function () {
			return React.createElement("footer", {className: "footer-style"}, React.createElement("div", {className: "container"}, React.createElement("h4", null, "Created by Nhat Ho - nhatminhhoca@gmail.com - Copyright 2016")));
	    };
	    return Footer;
	}(React.Component));
	exports.Footer = Footer;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map