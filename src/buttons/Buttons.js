import React, { useEffect } from "react";
import "./Buttons.css";
const Buttons = (props) => {

  let keyPressHandler = ((event) => {
    event.preventDefault();
    switch (event.key) {
        case "ArrowUp":
        props.move("move-up");
        break;
        case "ArrowRight":
        props.move("move-right");
        break;
        case "ArrowLeft":
        props.move("move-left");
        break;
        case "ArrowDown":
        props.move("move-down");
        break;
        case " ":
        props.reset();
        break
        default:
        break;
    }
  });
  useEffect(() => {
    document.addEventListener('keydown', keyPressHandler);
    return () => {
        document.removeEventListener('keydown', keyPressHandler)
    }
  });
      
  return (
    <div className="button-container" >
      <div>
        <button className="up" onClick={() => props.move("move-up")}>-</button>
      </div>
      <div>
        <button className="left" onClick={() => props.move("move-left")}>-</button>
        <button className="reset" onClick={props.reset}>
          Reset
        </button>
        <button className="right" onClick={() => props.move("move-right")}>-</button>
      </div>
      <div>
        <button className="down" onClick={() => props.move("move-down")}>-</button>
      </div>
      <div className="info">
          Use keyboard arrow keys (spacebar to reset), or click the buttons above for images
      </div>
    </div>
  );
};

export default Buttons;
