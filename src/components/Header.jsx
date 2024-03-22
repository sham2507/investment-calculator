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
                {showInfo ? <div className="info"><span className="content">Hello Folks, this is a investment calculator application that accepts several inputs and serves you a set of information like interest value alone at the end of every year, and total captial amount that you have invested without interest amount based on your expected returns.</span></div> : null}
            </article>
        </header>
    );
} 


export default Header;