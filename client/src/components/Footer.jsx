import React from "react";
import { Link } from "react-router-dom";
import "./styles/footer.css"




function Footer (){
 
    return(
    <div className="footer">
        <div className="rutasFooterContainer">

            <Link to ="" className = "rutasFooter">
            <div>About</div>
            </Link>

            <Link to ="" className = "rutasFooter">
            <div>Linkedin</div>
            </Link>
            
        </div>

    </div>
    )
}

export {Footer};    