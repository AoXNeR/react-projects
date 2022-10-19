import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, index, weight, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hexValue = `#${hexColor}`;
  //const hex = rgbToHex(...rgb);

  const handleClick = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
      return clearTimeout(timeout);
    }, 3000);
  }, [alert]);

  return (
    <article
      className={`${index > 10 && "color-light"} color`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={handleClick}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
