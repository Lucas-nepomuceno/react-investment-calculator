import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });

  console.log(expectedReturn);

  return (
    <>
      {duration < 1 ? (
        <h3 className="center">Invalid Duration</h3>
      ) : (
        <div className="center">
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
              {annualData.map((yearData, yearIndex) => {return(
                <tr key={yearIndex}>
                  <td>{yearData.year}</td>
                  <td>{formatter.format(yearData.valueEndOfYear)}</td>
                  <td>{formatter.format(yearData.interest)}</td>
                  <td>
                    {formatter.format(
                      yearData.valueEndOfYear -
                        (initialInvestment +
                        annualInvestment * yearData.year)
                    )}
                  </td>
                  <td>
                    {formatter.format(
                      initialInvestment + annualInvestment * yearData.year
                    )}
                  </td>
                </tr>)
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
