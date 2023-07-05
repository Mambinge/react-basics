import { Component } from "react";

class ClassEvent extends Component {
    handleEvent() {
        console.log('button clicked')
    }

    render() {
        return (
            <div>
                <h1>This class component</h1>
                <button onClick={this.handleEvent}>Click</button>
            </div>
        )
    }
}

export default ClassEvent;