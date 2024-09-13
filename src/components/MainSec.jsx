import React from "react";

export default function Navbar(props){
    return(
        <div className="card-container">
            <div className="main-sec">
                <img src={props.img} alt="" className="img"/>
                <p>{props.location}</p>
                <h4>{props.placeName}</h4>
                <p>{props.date}</p>
                <p>{props.des}</p>
            </div>
        </div>
    )
}