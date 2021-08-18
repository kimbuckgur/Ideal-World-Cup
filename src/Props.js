import React from "react";

function Props({name, color}){
    return (
        <div style={{color:color}}>{name||"이름없음"}</div>
    )
}
export default Props