import React, { useState } from "react";

const InvestmentForm = ({ FORM_KEY_CONSTANTS, handleFormValueChange, formValues }) => {
  const CommonInputProps = {
    required: true,
    type: "number",
  };
  return (
    <div id="user-input">
      <div className="group-container">
        <div className="input-container">
          <label for="intialInvestment">Intial Investment</label>
          <input value={formValues?.INTIAL_INVESTMENT} onChange={(e) => handleFormValueChange(FORM_KEY_CONSTANTS?.INTIAL_INVESTMENT?.key, e.target.value)} {...CommonInputProps} id="intialInvestment" name="intialInvestment" />
        </div>
        <div className="input-container">
          <label for="annualInvestment">Annual Investment</label>
          <input value={formValues?.ANNUAL_INVESTMENTS} onChange={(e) => handleFormValueChange(FORM_KEY_CONSTANTS?.ANNUAL_INVESTMENTS?.key, e.target.value)} {...CommonInputProps} id="annualInvestment" name="annualInvestment" />
        </div>
      </div>
      <div className="group-container">
        <div className="input-container">
          <label for="expectedReturn">Expected Return</label>
          <input value={formValues?.EXPECTED_RETURN} onChange={(e) => handleFormValueChange(FORM_KEY_CONSTANTS?.EXPECTED_RETURN?.key, e.target.value)} {...CommonInputProps} id="expectedReturn" name="expectedReturn" />
        </div>
        <div className="input-container">
          <label for="duration">Duration</label>
          <input value={formValues?.DURATION} onChange={(e) => handleFormValueChange(FORM_KEY_CONSTANTS?.DURATION?.key, e.target.value)} {...CommonInputProps} id="duration" name="duration" />
        </div>
      </div>
    </div>
  );
};

export default InvestmentForm;
