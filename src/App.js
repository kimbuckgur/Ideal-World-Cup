import React, { useState } from "react";
import Select_window from "./component/Select_window";
import Choice_Game_window from "./component/Choice_Game_window";
import "./App.css";

function App() {
  const [Select_ON_OFF,Set_Select_ON_OFF] = useState(true);
  const [Round_Num,Set_Round_Num] = useState(0);
  const Select_ON_OFF_Switch = () => {
    Set_Select_ON_OFF(false)
  }
  return (
    <div> 
      {Select_ON_OFF?<Select_window Select_ON_OFF_Switch={Select_ON_OFF_Switch} Set_Round_Num={Set_Round_Num} Round_Num={Round_Num}/>
      :
      <div><Choice_Game_window Round_Num={Round_Num}/></div>}
    </div>
   
  )
}

export default App;