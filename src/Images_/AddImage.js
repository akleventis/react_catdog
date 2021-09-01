import React, { useState } from "react";

import CreateImage from "./CreateImage";
import Buttons from '../buttons/Buttons'
import "./Images.css";


const AddImage = (props) => {
  
    const [images, setImage] = useState(() => {
      return []})
  

    let url = props.switchFlag === true ? 'https://api.thedogapi.com/v1/images/search' : 'https://api.thecatapi.com/v1/images/search'

    const moveHandler = (class_name) => {
        setImage([...images, <CreateImage url={url} className={class_name} key={Math.random()} />])
      }
          
    const resetHandler = () => {
      setImage([]);
    };

    const reset = () => {
      return () => props.onReset(false);
    }
    
    if (props.resetFlag===true) {
      reset();
      resetHandler();
    }

    return (
        <div className="container">
          {images}
          <Buttons reset={resetHandler} move={moveHandler}/>
        </div>
    );
}

export default AddImage;
