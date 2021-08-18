import axios from "axios";
import React, { useState } from "react";


function Choice_Game_window({Round_Num}){
    console.log(Round_Num)
    const [all_Character,Set_all_Character] = useState([1,2,3,4,5,6,7,8,9]);
    const [Character,Set_Character] = useState([]);
    const [random_num,Set_random_num] = useState(0);
    let copy_Character = [];
    let copy_all_Character = [...all_Character];
    for(let i = 0;i < Round_Num;i++){
        let min = Math.ceil(1);
        let max = Math.floor(9);
        let n = Math.floor(Math.random() * (max - min)) + min;
        copy_Character[i] = all_Character[n];
        copy_all_Character.splice(n)
        Set_Character(copy_Character);
        Set_all_Character(copy_all_Character);
    }
    console.log(all_Character)
    console.log(Character)
    
    return(
        <div className="Choice_box">
            <div id="img1_box">{all_Character[random_num]}번</div>
            <div id="img2_box">2번</div>
        </div>
    )
}   

export default Choice_Game_window