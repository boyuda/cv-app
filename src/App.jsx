import { useState } from 'react';
import FormTable from './components/FormTable';
import CVTable from './components/CVTable';

function App() {
  //Inputs for each section - general informationa, educational experience and practical experience
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
  });

  //State for CV table. Once submitted button is clicked, we set cv table values using form input values
  const [cvTableValues, setCvTableValues] = useState({
    name: '',
    email: '',
    phone: '',
  });

  //Each change in the input field we setting the values.
  const handleValueChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmitButton = () => {
    setCvTableValues(values);
  };

  return (
    <div className="container">
      <div>
        <FormTable
          values={values}
          onValuesChange={handleValueChange}
          onFormSubmit={handleSubmitButton}
        />
      </div>
      <div>
        <h1 className="header-v1">Your CV</h1>
        <CVTable values={cvTableValues} />
      </div>
    </div>
  );
}

export default App;
