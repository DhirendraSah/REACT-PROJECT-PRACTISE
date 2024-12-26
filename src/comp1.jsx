import * as React from "react";
class MyComponent extends React.Component {
    render() {
        return <div>
            Hello world
            <h1>React</h1>
            <h2>React</h2>
            <h3>React</h3>
            <h6>React</h6>

            Name: <input type="text"></input><br />
            Gender: <input type="radio"></input>
            <hr />
            <label style={{color:"green"}}>Text label</label>
        </div>;
    }
}
export default MyComponent;
