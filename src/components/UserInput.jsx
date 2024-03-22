import {useState} from "react";


function UserInput({userInput,onSelect}){

    

    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>INITIAL INVESTMENT($)</label>
                    <input value={userInput.initialInvestment} type="number" required onChange={(event) => onSelect("initialInvestment",Number(event.target.value))}/>
                </p>
                <p>
                    <label>ANNUAL INVESTMENT($)</label>
                    <input value={userInput.annualInvestment} type="number" required onChange={(event) => onSelect("annualInvestment",Number(event.target.value))}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>EXPECTED RETURN($)</label>
                    <input value={userInput.expectedReturn}type="number" required onChange={(event) => onSelect("expectedReturn",Number(event.target.value))}/>
                </p>
                <p>
                    <label>DURATION(Years)</label>
                    <input value={userInput.duration} type="number" required onChange={(event) => onSelect("duration",Number(event.target.value))}/>
                </p>
            </div>
        </section>
    );

}

export default UserInput