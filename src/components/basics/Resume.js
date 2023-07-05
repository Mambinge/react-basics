//Destructuring props in a class component

import { Component } from "react";

class Resume extends Component {
    render() {
        const {name} = this.props
        return <h1>This is destructuring {name}</h1>
    }
}

export default Resume