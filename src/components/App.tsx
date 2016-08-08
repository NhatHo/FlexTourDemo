import * as React from "react";
import {Header} from "./view/Header";
import {Body} from "./view/Body";
import {Footer} from "./view/Footer";
import {NavBar} from "./view/NavBar";

interface IAppNavBar {
    floating:boolean;
}

export class App extends React.Component<{}, IAppNavBar> {

    constructor() {
        super();
        this.state = {floating: false};
    }

    componentDidMount():void {
        document.onscroll = this.onScrollCaller.bind(this);
    }

    render() {
        return <div className="app">
            <NavBar floating={this.state.floating}/>
            <Header />
            <Body />
            <Footer />
        </div>;
    }

    private onScrollCaller():void {
        let windowPosition = $(window).scrollTop();
        if (windowPosition > 10 && !this.state.floating) {
            this.setState({floating: true});
        } else if (windowPosition < 10 && this.state.floating) {
            this.setState({floating: false});
        }
    }
}