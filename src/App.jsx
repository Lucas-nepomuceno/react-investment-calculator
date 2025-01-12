import UserInput from "./components/UserInput"
import Results from "./components/Results";
import { useState } from "react"

let INVESTMENT_DATA = {
  initialInvestment: 100,
  annualInvestment: 100,
  expectedReturn: 2.5,
  duration: 5
}

function App() {
  const [investmentData, setInvestmentData] = useState(INVESTMENT_DATA);

  function handleChange(e) {
    const { id, value } = e.target;
    
    // Convert to number before updating state
    const numericValue = id === "duration" || id === "expectedReturn" || id === "initialInvestment" || id === "annualInvestment" 
      ? parseFloat(value) 
      : value;
  
    setInvestmentData(prevInvestment => ({
      ...prevInvestment,
      [id]: numericValue,
    }));
  }
  
  

  return (<>
      <div id="user-input">
        <div className="input-group">
          <UserInput id="initialInvestment" label="Initial Investment" type="number" value={investmentData.initialInvestment} onChange={handleChange}/>
          <UserInput id="annualInvestment" label="Annual Investment" type="number" value={investmentData.annualInvestment} onChange={handleChange}/>
        </div>
        <div className="input-group">
          <UserInput id="expectedReturn" label="Expected Return" type="number" value={investmentData.expectedReturn} onChange={handleChange}/>
          <UserInput id="duration" label="Duration" type="number" value={investmentData.duration} onChange={handleChange}/>
        </div>
      </div>
      <Results initialInvestment={investmentData.initialInvestment} annualInvestment={investmentData.annualInvestment} expectedReturn={investmentData.expectedReturn} duration={investmentData.duration}/>
  </>
  )
}

export default App
