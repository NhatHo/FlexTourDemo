import * as React from "react";
import * as $ from "jquery";

export class Header extends React.Component<{}, {}> {
    render() {
        return <header>
            <div className="container">
                <div className="header-content">
                    <div className="header-name">Flexible Tour Framework</div>
                    <div className="header-subname">Guide your customers through your amazing application.</div>
                    <a className="page-scroll btn btn-success btn-lg" onClick={this.onClick}>
                        <span className="glyphicon glyphicon-play-circle" aria-hidden="true"></span>
                        <span className="header-button">Demo Time!</span>
                    </a>
                </div>
            </div>
        </header>;
    }

    private onClick(event: React.MouseEvent): void {
        event.stopPropagation();
        event.preventDefault();
        $('html,body').animate({
                scrollTop: $("#attributes").offset().top
            },
            'slow');
    }
}