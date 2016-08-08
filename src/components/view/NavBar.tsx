import * as React from "react";
import * as $ from "jquery";

interface INavBarProps {
    floating:boolean;
}

export class NavBar extends React.Component<INavBarProps, {}> {
    constructor(INavBarProps:any) {
        super(INavBarProps);
    }

    render() {
        if (this.props.floating) {
            $('.app').addClass("menu-padding");
            return <div className="sticky">
                <ul className="floating-nav">
                    <li><a onClick={this.scrollTop.bind(this)}><span className="glyphicon glyphicon-home"></span>
                        Top</a></li>
                    <li><a onClick={this.scrollToDesc.bind(this)}><span
                        className="glyphicon glyphicon-plus-sign"></span> Features</a></li>
                    <li><a onClick={this.scrollToAttributes.bind(this)}><span
                        className="glyphicon glyphicon-play"></span> Demo</a></li>
                    <li><a onClick={this.scrollToWiki.bind(this)}><span className="glyphicon glyphicon-book"></span> Api</a>
                    </li>
                </ul>
            </div>;
        } else {
            $('.app').removeClass("menu-padding");
            return <nav className="navbar navbar-inverse navbar-static-top" id="navbar">
                <div className="container">
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><a onClick={this.scrollTop.bind(this)}><span
                                className="glyphicon glyphicon-home"></span> Top</a></li>
                            <li><a onClick={this.scrollToDesc.bind(this)}><span
                                className="glyphicon glyphicon-plus-sign"></span> Features</a></li>
                            <li><a onClick={this.scrollToAttributes.bind(this)}><span
                                className="glyphicon glyphicon-play"></span> Demo</a></li>
                            <li><a onClick={this.scrollToWiki.bind(this)}><span
                                className="glyphicon glyphicon-book"></span> Api</a></li>
                        </ul>
                    </div>
                </div>
            </nav>;
        }
    }

    private prevent(event:React.MouseEvent):void {
        event.preventDefault();
        event.stopPropagation();
    }

    private scrollTop(event:React.MouseEvent):void {
        this.prevent(event);
        $('html, body').animate({scrollTop: 0}, 'slow');
    }

    private scrollToDesc(event:React.MouseEvent):void {
        this.prevent(event);
        $('html, body').animate({scrollTop: $("#desc").offset().top}, 'slow');
    }

    private scrollToAttributes(event:React.MouseEvent):void {
        this.prevent(event);
        $('html, body').animate({scrollTop: $("#attributes").offset().top}, 'slow');
    }

    private scrollToWiki(event:React.MouseEvent):void {
        this.prevent(event);
        $('html, body').animate({scrollTop: $("#wiki").offset().top}, 'slow');
    }
}