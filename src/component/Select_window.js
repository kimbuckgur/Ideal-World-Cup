import React from "react";


function Select_window({Select_ON_OFF_Switch,Set_Round_Num,Round_Num}) {
    const select_choice = (e) => {
        Set_Round_Num(e.target.value)
        console.log(Round_Num)
    }
    return (
        <div className="Select_FULL">
            <div className="Select_Box">
                <div className="Select_Box_head">
                    <span id="main_text">월드컵</span>
                    <p>내가 맘에드는 숫자를 골라라</p>
                </div>
                <div className="Select">
                    <span className="Select_margin">
                        <>총 라운드 선택해 주세요.</>
                        <br></br>
                        <select onChange={select_choice} className="Select_input">
                            <option value="32">32강</option>
                            <option value="16">16강</option>
                            <option value="8">8강</option>
                            <option value="4">4강</option>
                        </select>
                    </span>
                </div>
                <div className="Select_Button_box">
                    <button id="start_button" onClick={Select_ON_OFF_Switch}>Start</button>
                </div>
            </div>
        </div>
    )
}

export default Select_window