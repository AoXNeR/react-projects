import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [iterations, setIterations] = useState();
  const [half, setHalf] = useState(10);
  const [error, setError] = useState(false);
  const [errorTwo, setErrorTwo] = useState(false);
  const [list, setList] = useState(new Values("#ff0f10").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(iterations);
      let colors = new Values(color).all(iterations);
      setHalf(iterations / 2);
      console.log(colors);
      setList(colors);
      setError(false);
      setErrorTwo(false);
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
            placeholder="#ff0f10"
            className={`${error ? "error" : null}`}
          ></input>
          <input
            type="text"
            value={iterations}
            onChange={(e) => setIterations(parseInt(e.target.value))}
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
          const hex = color.hex;
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={hex}
              iterations={half}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
