import * as React from "react";
class Iterable extends React.Component{
    state = {
        first: "Loading.....",
        second: "Loading.....",
        third: "Loading.....",
        fourth: "Loading.....",
        fifth: "Loading.....",
        donemsg: "Loading Complete...",
    };
    constructor(){
        super();
        setTimeout(() =>{
            this.setState({first: "done"});
        },2000);
        setTimeout(() =>{
            this.setState({second: "done"});
        },4000);
        setTimeout(() =>{
            this.setState({third: "done"});
        },6000);
        setTimeout(() =>{
            this.setState({fourth: "done"});
        },8000);
        setTimeout((state) =>{
            this.setState({fifth: state.donemsg});
        },10000);
    }
    render() {
    return (
        <ul>
            {Object.entries(this.state)
                .filter(([key]) => key !== "donemsg")
                .map(([key, value]) => (
                    <li key={key}>
                        <strong>{key}: </strong> {value}
                    </li>
                ))}
        </ul>
    );
}
    }

export default Iterable;