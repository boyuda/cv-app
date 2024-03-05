import { useState } from 'react';
import GeneralInformation from './GeneralInformation';

//Storing all of the form data in to an object.
function FormTable() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
  });

  //Possible inputs in each section
  const GeneralInformationInputs = [
    {
      id: 1,
      name: 'name',
      type: 'text',
      placeholder: 'First and Last Name',
      label: 'Name',
    },
    {
      id: 2,
      name: 'email',
      type: 'text',
      placeholder: 'Email',
      label: 'Email',
    },
    {
      id: 3,
      name: 'phone',
      type: 'text',
      placeholder: 'Phone',
      label: 'Phone',
    },
  ];

  const handleChangeValues = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(values);
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
