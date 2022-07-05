import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({handleClick}) => {

    return (


        <>


            <div className="NavBar">


                <ul>
                    <li>
                        <Link to="/" onClick={handleClick}>Home</Link>
                    </li>

                    <li>
                        <Link to="/Quiz">Quiz</Link>
                    </li>

                    <li>
                        <Link to="/Singalong">Singalong</Link>
                    </li>
                </ul>
            </div>

            <div>

                <header>
                    <h1 className="airways">
                        Hello, World!
                    </h1>
                </header>
            </div>
        </>
    )
}

export default NavBar;




