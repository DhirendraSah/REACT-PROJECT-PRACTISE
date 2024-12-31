import * as React from "react";
class MyPropList extends React.Component {
    render() {
        const {items} = this.props;
        return(
            <ul>
                {items.map((i) => (
                    <li key={i}>{i}</li>
                ))}
            </ul>
        );
    }
}
export default MyPropList;