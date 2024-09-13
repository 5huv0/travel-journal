import React from "react";

export default function Footer(){
    return(
        <div className="footer">
            <div className="footer-right">
                <p>@2024 5huv0 All Right Reserved</p>
            </div>

            <div className="footer-link">
                <ul>
                    <li className="list-item">
                        <a href="#">Contact</a>
                    </li>

                    <li className="list-item">
                        <a href="#">Privacy</a>
                    </li>

                    <li className="list-item">
                        <a href="#">Terms</a>
                    </li>

                    <li className="list-item">
                        <a href="#">About</a>
                    </li>
                </ul>
            </div>

            <div className="footer-linking">
               <a href="">
                <img src="" alt="" />
               </a>

               <a href="">
                <img src="" alt="" />
               </a>

               <a href="">
                <img src="" alt="" />
               </a>
            </div>
        </div>
    )
}