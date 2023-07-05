import { Component } from "react";

class Binding extends Component {

    constructor() {
        super();
        this.state = {
            counter: 0
        };
        // this.increment = this.increment.bind(this);
    }

    //Arrow function
    increment = () => {
        console.log(this)
        this.setState({
            counter: this.state.counter + 1
        })
    }

    // increment() {
    //     //to change a state use the setState to get access to the state
    //     console.log(this)
    //     this.setState({
    //         counter: this.state.counter + 1
    //     })
    // }


    render() {
        return (
            <div>
                <h1>Counter is: {this.state.counter}</h1>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}

export default Binding;