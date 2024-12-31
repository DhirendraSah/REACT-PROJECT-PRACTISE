import * as React from "react";
import MyProps from "./propscomp1";
import MyPropList from "./propscomp2";
class MyPropsEx extends React.Component {
    state = {
        var1:true,
        var2:"Hello, world",
        var4:[1,2,3,4,5],
    };
    render() {
        const{var1,var2,var4} = this.state;
        return(
            <div>
            <MyProps xyz={var1} abc={var2}/>
            <MyPropList items = {var4}/>
            </div>
        );
    }
    
}
export default MyPropsEx;