import {useState,Fragment} from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";

import {calculateInvestmentResults , formatter} from "./util/investment.js";

function App() {

  let [userInput,setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleChange(inputIdentifier, newValue){        
      setUserInput((details) => {            
          return({
              ...details,
              [inputIdentifier]:newValue
          });        
      });
  }

  let resultData = calculateInvestmentResults(userInput);
  
  
  return (
    <Fragment>
      <Header />      
      <UserInput userInput = {userInput} onSelect={handleChange}/>
      {userInput.duration > 0 ? <Result input={userInput} result={resultData}/> : <header className="center">Cannot Output data as number of years is inappropriate</header>}
    </Fragment>    
  );
}

export default App
