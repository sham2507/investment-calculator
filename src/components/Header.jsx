import game_logo from "../assets/investment-calculator-logo.png";
import {useState} from "react";

function Header(){

    let [showInfo,setShowInfo] = useState(false);
    function handleMouseOver(){
        setShowInfo((showInfo) =>{
            return showInfo ? false : true;
        });
    }
    return(
        <header id="header">
            <img  src={game_logo}/>
            <h1>Investment Calculator <span onClick = {handleMouseOver} className="showInfo">&#9432;</span></h1>            
            <article>                
                {showInfo ? <div className="info"><span className="content"></span></div> : null}
            </article>
        </header>
    );
} 


export default Header;