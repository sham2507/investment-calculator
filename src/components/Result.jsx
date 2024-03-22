import {calculateInvestmentResults , formatter} from "../util/investment.js";

function Result({input,result}){  
    let initialInterestValue = 0;  
    let initialInvestmentValue = input.initialInvestment;

    function initialInterest(interest){
        initialInterestValue = initialInterestValue+interest;
        return initialInterestValue;
    }

    function initialInvestment(interest){
        initialInvestmentValue = initialInvestmentValue+interest;
        return initialInvestmentValue;
    }


    
    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>                
            </thead> 
            <tbody>
                {result.map((item,itemIndex) => (                    
                    <tr key={itemIndex}>
                        <td>{item.year}</td>
                        <td>{formatter.format(item.valueEndOfYear)}</td>
                        <td>{formatter.format(item.interest)}</td>      
                        <td>{formatter.format(initialInterest(item.interest))}</td>
                        <td>{formatter.format(item.valueEndOfYear - initialInterestValue)}</td>                  
                    </tr>
                ))}
            </tbody>           
        </table>
    );
}


export default Result;