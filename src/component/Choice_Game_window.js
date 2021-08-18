import React from "react";


function Choice_Game_window({ Round_Num }) {
    console.log(Round_Num)
    let all_character = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33];
    let character = [];
    let num = 0;

    for (let i = 0; i < Round_Num; i++) {
        let min = Math.ceil(0);
        let max = Math.floor(33 - num);
        let n = Math.floor(Math.random() * (max - min)) + min;
        console.log(n)
        character[i] = all_character[n];
        all_character.splice(n, 1);
        num++;
    };

    console.log(character);
    return (
        <div className="Choice_box">
            <div id="img1_box">{character[0]}번</div>
            <div id="img2_box">{character[1]}번</div>
        </div>
    )
}

export default Choice_Game_window