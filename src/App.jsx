import { useState } from "react";
import Header from "./Header.jsx";
import InvestmentForm from "./InvestmentForm.jsx";
import Table from "./Table.jsx";
import { calculateInvestmentResults } from "./util/investment";
const FORM_KEY_CONSTANTS = {
  INTIAL_INVESTMENT: {
    id: 1,
    key: "INTIAL_INVESTMENT",
  },
  ANNUAL_INVESTMENTS: {
    id: 2,
    key: "ANNUAL_INVESTMENTS",
  },
  EXPECTED_RETURN: {
    id: 3,
    key: "EXPECTED_RETURN",
  },
  DURATION: {
    id: 4,
    key: "DURATION",
  },
};
const INTIAL_FORM_VALUE = {
  INTIAL_INVESTMENT: 0,
  ANNUAL_INVESTMENTS: 0,
  EXPECTED_RETURN: 0,
  DURATION: 0,
};
const App = () => {
  const [formValues, setFormValues] = useState(INTIAL_FORM_VALUE);
  const TABLE_DATA = calculateInvestmentResults({ initialInvestment: formValues?.INTIAL_INVESTMENT, annualInvestment: formValues?.ANNUAL_INVESTMENTS, expectedReturn: formValues?.EXPECTED_RETURN, duration: formValues?.DURATION });
  console.log(TABLE_DATA);
  const handleFormValueChange = (FORM_KEY, value) => setFormValues((prevFormValues) => ({ ...prevFormValues, [FORM_KEY]: Number(value) }));

  return (
    <>
      <Header />
      <InvestmentForm FORM_KEY_CONSTANTS={FORM_KEY_CONSTANTS} handleFormValueChange={handleFormValueChange} formValues={formValues} />
      <Table formValues={formValues} TABLE_DATA={TABLE_DATA} />
    </>
  );
};

export default App;
