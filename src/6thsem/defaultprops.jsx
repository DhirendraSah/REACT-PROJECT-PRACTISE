const  DefaultProps1 = ({var1,var2,var3}) =>(
    <button disabled={var1} style={{background:var2}}>
        {var3}
    </button>
);

DefaultProps1.defaultProps = {
        var1: false,
        var2: "blue",
        var3: "Click Me"
}
export default DefaultProps1;