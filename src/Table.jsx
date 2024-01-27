import React from "react";
import { formatter } from "./util/investment.js";
const Table = (props) => {
  const { formValues, TABLE_DATA } = props;
  return (
    <div>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Invested Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested capital</th>
          </tr>
        </thead>
        <tbody>
          {TABLE_DATA?.map((tableItem) => {
            const totalInterest = formatter.format(tableItem?.valueEndOfYear - tableItem?.annualInvestment * tableItem?.year - formValues?.INTIAL_INVESTMENT);
            const toalAmountInvested = formatter.format(tableItem?.valueEndOfYear - tableItem?.interest);
            return (
              <tr key={tableItem?.year}>
                <td>{tableItem?.year}</td>
                <td>{formatter.format(tableItem?.valueEndOfYear)}</td>
                <td>{formatter.format(tableItem?.interest)}</td>
                <td>{totalInterest}</td>
                <td>{toalAmountInvested}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
