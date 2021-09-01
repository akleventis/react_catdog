import React, { useState }from "react";
import AddImage from "./Images_/AddImage";
import HeaderCat from "./headers/HeaderCat";
import HeaderDog from './headers/HeaderDog'
import Footer from "./headers/Footer";
import './App.css'

const App = () => {

  const [switchFlag, setSwitchFlag] = useState(() => {
    return false
  });

  const [resetOnSwitch, setResetSwitch] = useState(() => {
    return false
  });

  const switchHandler = flag => setSwitchFlag(flag);
  
  const resetHandler = resetFlag => setResetSwitch(resetFlag);

  const renderHeader = () => {
    return (
      switchFlag===false ?  <HeaderCat onReset={resetHandler} onSwitch={switchHandler}/> : <HeaderDog onReset={resetHandler} onSwitch={switchHandler}/>
    );
  }

  return (
    <div>
      {renderHeader()}
      <AddImage resetFlag={resetOnSwitch} switchFlag={switchFlag}/>
      <Footer />
    </div>
  );
};

export default App;
