import React, { useState } from "react";

import CreateImage from "./CreateImage";
import Buttons from '../buttons/Buttons'
import "./Images.css";


const AddImage = () => {
  
    const [images, setImage] = useState(() => {
      return []})

    const resetHandler = () => {
      setImage([]);
    };

    const moveHandler = (class_name) => {
      setImage([...images, <CreateImage className={class_name} key={Math.random()} />])
    }


    return (
        <div className="container">
          {images}
          <Buttons reset={resetHandler} move={moveHandler}/>
        </div>
    );
}

export default AddImage;
