import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [errorOne, setError] = useState(false);
  const [errorTwo, setErrorTwo] = useState(false);
  const [jumps, setJumps] = useState();
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (!jumps) {
        throw new Error("Value cannot be null");
      }
      console.log(jumps);
      let colors = new Values(color).all(1);
      setList(colors);
      setError(false);
      setErrorTwo(false);
      console.log(colors);
    } catch (err) {
      setError(true);
      setErrorTwo(true);
      console.log(err);
    }
  };

  return (
    <>
      <section className="container">
        <h3>colors generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${errorOne ? "error" : null}`}
          ></input>
          <input
            type="text"
            value={jumps}
            onChange={(e) => setJumps(e.target.value)}
            placeholder="10"
            className={`${errorTwo ? "error" : null}`}
          ></input>
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          console.log(color);
          const hex = color.hex;
          return (
            <SingleColor key={index} {...color} index={index} hexColor={hex} />
          );
        })}
      </section>
    </>
  );
}

export default App;
