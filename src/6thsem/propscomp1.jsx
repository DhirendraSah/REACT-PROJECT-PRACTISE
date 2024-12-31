import * as React from "react";
class MyProps extends React.Component {
    render() {
        const {xyz,abc} = this.props; 
        return <button disabled ={xyz}>{abc}</button>
    }
}
export default MyProps;