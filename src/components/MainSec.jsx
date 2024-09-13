import React from "react";

export default function MainSec(props){
    return(
            <div className="main-sec">
                <img src={props.img} alt={props.placeName} className="img"/>
                <p><span className="edit">Location</span> : {props.location}</p>
                <h4><span className="edit">Place Name</span> : {props.placeName}</h4>
                <p><span className="edit">Date</span> : {props.date}</p>
                <p><span className="edit">Description</span> :{props.des}</p>
            </div>
    )
}