import React, { useState } from "react";

import CreateImage from "./CreateImage";
import Buttons from '../buttons/Buttons'
import "./Images.css";


const AddImage = () => {
    // const classNames = []
    const [images, setImage] = useState(() => {
      return []})
    
    // const [firstClick, setFirstClick] = useState(true)

    const resetHandler = () => {
      setImage([]);
      // setFirstClick(true);
    };
// State that keeps track of all the class names?

    // const addFirstImageHandler = () => {
    //     setFirstClick(false); // account for first image
    //     setImage([...images, <CreateImage key={Math.random()}/>])  
    // }

    const moveHandler = (class_name) => {
      setImage([...images, <CreateImage className={class_name} key={Math.random()} />])
    }

    // const moveDownHandler = () => {
    //   // set class name on last image in stack, set another image
    //   setImage([...images, <CreateImage className='move-down' key={Math.random()} />])
    // }
    // const moveRightHandler = () => {
    //   console.log("hello")
    //   setImage([...images, <CreateImage className='move-right' key={Math.random()} />])
    // }
    // const moveLeftHandler = () => {
    //   setImage([...images, <CreateImage className='move-left' key={Math.random()} />])
    // }

    // let buttonFunctions = [firstClick, addFirstImageHandler, moveDownHandler, moveRightHandler, moveLeftHandler, resetHandler, moveHandler]


    return (
      // <div>
        <div className="container">
          {images}
          <Buttons reset={resetHandler} move={moveHandler}/>
        </div>
        
      /* </div> */
    );
}

export default AddImage;
