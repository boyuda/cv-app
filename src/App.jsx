import { useState } from 'react';
import FormTable from './components/FormTable';
import CVTable from './components/CVTable';

function App() {
  //Inputs for each section - general informationa, educational experience and practical experience
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    education: [{ school: '', studyTitle: '', studyStart: '', studyEnd: '' }],
  });

  //State for CV table. Once submitted button is clicked, we set cv table values using form input values
  const [cvTableValues, setCvTableValues] = useState({
    name: '',
    email: '',
    phone: '',
    education: [{ school: '', studyTitle: '', studyStart: '', studyEnd: '' }],
  });

  //We setting the value in each input field.
  const handleValueChange = (e) => {
    const { name, value } = e.target;

    //Education
    if (name.includes('education')) {
      const [, index, property] = name.split('.');
      const updatedEducation = [...values.education];
      updatedEducation[index][property] = value;
      setValues({ ...values, education: updatedEducation });
    } else {
      setValues({ ...values, [name]: value });
    }

    //Work Experience
    //TODO:
  };

  const handleSubmitButton = () => {
    setCvTableValues(values);
  };

  const handleAddMoreClick = (e) => {
    const { name, value } = e.target;
    if (name === 'addEducation') {
      // Updating the state adding new education
      setValues({
        ...values,
        education: [
          ...values.education,
          { school: '', studyTitle: '', studyStart: '', studyEnd: '' },
        ],
      });
    }
  };

  const handleDelete = (e) => {
    //Receiving button id and according to it, filtering the education array
    const button = e.target;
    if (button.id >= 0) {
      const filteredArray = values.education.filter((_, i) => i !== +button.id);
      setValues({ ...values, education: filteredArray });
    }
  };

  return (
    <div className="container">
      <div>
        <FormTable
          values={values}
          onValuesChange={handleValueChange}
          onFormSubmit={handleSubmitButton}
          onAddMoreClick={handleAddMoreClick}
          onDelete={handleDelete}
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
