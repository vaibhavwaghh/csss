import React, { useState } from "react";
import { PositionContext } from "./Wagh";

export function Div({ key1 }) {
  const { leftPosition } = React.useContext(PositionContext);
  const { topPosition } = React.useContext(PositionContext);
  const [topPosition1, set2] = useState([]);
  const [leftPosition1, set1] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  React.useEffect(() => {
    console.log("topPosition changed:", topPosition);
    set2((k) => [...k, topPosition]);
  }, [topPosition]);

  React.useEffect(() => {
    set1((k) => [...k, leftPosition]);
  }, [leftPosition]);

  let val2 = topPosition1[(currentIndex % topPosition1.length) + 1] + "px";
  let val1 =
    leftPosition1[(currentIndex % leftPosition1.length) + 1] + 1 + "px";
  console.log(leftPosition1, topPosition1);
  console.log(leftPosition, topPosition);
  console.log(val1, val2);
  const fontvalue = "3rem";
  const componentstyle = {
    top: "830px",
    left: val1,
    height: "130px",
    width: "180px",
    textAlign: "center",
    border: "2px solid black",
    position: "absolute",
    display: "flex",
    fontSize: fontvalue,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <>
      <div className="conti">
        <div style={componentstyle} className="boxxx">
          <span className="arrow">↓</span>
          <span className="nnnn">{key1}</span>
        </div>
      </div>
    </>
  );
}
