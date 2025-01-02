import { useState } from "react";

function StateExp() {
    const [name, setName] = useState("RKU");
    const [age, setAge] = useState(23);
    const [color, setColor] = useState("red");
    const [color2, setColor2] = useState("none");

    return (
        <div>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)} 
            />
            <h1>{name}</h1>
            <br />
            <input
                value={age}
                onChange={(e) => setAge(e.target.value)} 
            />
            <h2>{age}</h2>

            <p style={{ background: color, height: 50, textAlign: "center" }}>
                Age of the candidate is: {age}
            </p>

            <input
                type="radio"
                name="color"
                onChange={() => {
                    setColor("blue");
                }}
            /> Blue
            <input
                type="radio"
                name="color"
                onChange={() => {
                    setColor("green");
                    setName("green");
                }}
            /> Green
            <input
                type="radio"
                name="color"
                onChange={() => setColor("yellow")}
            /> Yellow

            <p>Selected Color: {color}</p>

            <input
                type="checkbox"
                name="color2"
                onChange={() => setColor2("blue")}
            /> Blue<br/>
            <input
                type="checkbox"
                name="color2"
                onChange={() => setColor2("green")}
            /> Green<br/>
            <input
                type="checkbox"
                checked="true"
                name="color2"
                onChange={() => setColor2("yellow")}
            /> Yellow<br/>

            <p>Selected Color: {color2}</p>
            <p style={{ background: color2, height: 50, lineHeight: "50px", textAlign: "center" }}>
                Background Color Preview
            </p>
        </div>
    );
}

export default StateExp;
