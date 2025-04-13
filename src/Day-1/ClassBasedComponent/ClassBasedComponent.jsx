import { Component } from "react";

class ClassBasedComponent extends Component {
    state = {
        showText: false,
        countStyle: false,
        count: 0
    }

    handleToggle = () => {
        console.log("button is clicked");

        const { showText } = this.state;

        this.setState({
            showText: !this.state.showText
        });
    }

    componentDidMount() {
        console.log("this is called first time");
        this.setState({
            showText: !this.state.showText
        });
    }

    handleCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState, this.state);
        // Only update countStyle when count reaches 10 and has not been updated before
        if (prevState.count !== this.state.count && this.state.count === 10) {
            this.setState({
                countStyle: true
            });
        }
    }

    render() {
        const { showText, count, countStyle } = this.state;
        return (
            <div className="flex flex-col items-center">
                <h1 className="font-mono text-6xl mb-10">Class based Component</h1>
                {showText ? <>Show Text</> : null}
                <div>
                    <button className="font-mono border p-2 bg-gray-50 hover:bg-gray-100 rounded-xl" onClick={this.handleToggle}>Toggle</button>
                    <button className="font-mono border p-2 bg-gray-50 hover:bg-gray-100 rounded-xl ms-2" onClick={this.handleCount}>Count</button>
                </div>
                <h4 className={countStyle ? "text-red-500" : "text-blue-700"}>Count : {count}</h4>
            </div>
        );
    }
}

export default ClassBasedComponent;
