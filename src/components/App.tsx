import * as React from "react";

import { Header } from "./view/Header";
import { Body } from "./view/Body";
import { Footer } from "./view/Footer";

export class App extends React.Component<{}, {}> {
    render() {
        return <div>
            <Header />
            <Body />
            <Footer />
        </div>;
    }
}