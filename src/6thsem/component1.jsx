import * as React from "react";
class Component1 extends React.Component {
            render() {
                return(

                   
                    <div>
                        <Component3></Component3>
                         <br /> hello world !
                         <h1>This is componemt 1</h1>
                   
                    <Component2></Component2>
                    </div>
                );
            }
}
export default Component1;

class Component2 extends React.Component {
    render(){
        return(
            <div>
                 <h1>React this is component 2</h1>
           
            </div>

        );
    }
}

class Component3 extends React.Component {
    render(){
        return(
            <div> <h1>React this is component 3</h1></div>

        );
    }
}
