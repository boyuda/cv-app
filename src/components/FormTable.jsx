import { useState } from 'react';
import GeneralInformation from './GeneralInformation';
import { GeneralInformationInputs } from './data';

//Storing all of the form data in to an object.
function FormTable({ values, onValuesChange }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO:When submit button clicked transfer everything to the CVTable
  };

  return (
    <div>
      <h1 className="header-v1">General Information</h1>
      <div className="formInputTable">
        {GeneralInformationInputs.map((input) => (
          <GeneralInformation
            key={input.id}
            label={input.label}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            value={values[input.name]}
            onChange={onValuesChange}
          />
        ))}
      </div>
      <h1 className="header-v1">Educational Experience</h1>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default FormTable;
