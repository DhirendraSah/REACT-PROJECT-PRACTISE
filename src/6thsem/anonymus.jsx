export default ({var1,var2,var3,var4}) =>(
    <button disabled = {var1}
style={{background: var3},{color:var4}}>
    {var3}
</button>
);

// It is very bad way to write code 
//<Anonymus  var1={true} var2={"hello"} var3={"green"} var4={"white"}/>