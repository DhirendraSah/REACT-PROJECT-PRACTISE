import * as React from "react";
class StateManipulation extends React.Component {
    state = {
        first: false,
        second: true,
        txt: "Initial value",
        clr: "red", // Initial color red for the label and input box
    };
    constructor(){
        super();
        setTimeout(() => {
            this.setState({first: true, second:false, txt: "updated value", clr:"blue"});
             },5000);

        setTimeout(() => {
            this.setState({first: true, second:false, txt: "updated value2", clr:"red"});
            },10000);
       
    }
    render() {
        const { first, second, txt, clr } = this.state;
        return (
            <div>
                <br/>
               <button disabled={first}>Button1</button>
               <button disabled={second}>Button1</button>
               <label style={{color:clr}}>{txt}</label>
               <input value={txt}/>
            </div>
        );
    }
}
export default StateManipulation;