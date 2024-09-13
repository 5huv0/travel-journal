import React from "react";

export default function Navbar(){
    return(
        <nav className="nav-bar">
            <img src="./public/images/travel-logo1.webp" alt="nav-logo" className="nav-logo"/>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About me</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Catagory
                    </a>
                    <ul className="dropdown-menu">
                        <li>
                            <a className="dropdown-item" href="#">Solo Travel</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">Mount Travel</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">Ocean Travel</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">Foreign Travel</a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Blog</a>
                </li>
            </ul>
        </nav>
    )
}