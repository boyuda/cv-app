import { useState } from 'react';
import GeneralInformation from './GeneralInformation';
import { GeneralInformationInputs } from './data';

//Storing all of the form data in to an object.
function FormTable() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
  });

  //Possible inputs in each section

  //////////////////////////////////
  ////////Handlers
  /////////////////////////////////
  const handleChangeValues = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

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
            onChange={handleChangeValues}
          />
        ))}
      </div>
      <h1 className="header-v1">Educational Experience</h1>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default FormTable;
