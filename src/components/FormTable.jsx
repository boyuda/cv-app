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
      placeholder: 'name',
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
  console.log(values);
  return (
    <div>
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
      <button>Submit</button>
    </div>
  );
}

export default FormTable;
