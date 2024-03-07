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
    work: [
      {
        company: '',
        positionTitle: '',
        workStart: '',
        workEnd: '',
        responsibilities: '',
      },
    ],
  });

  //State for CV table. Once submitted button is clicked, we set cv table values using form input values
  const [cvTableValues, setCvTableValues] = useState({
    name: '',
    email: '',
    phone: '',
    education: [{ school: '', studyTitle: '', studyStart: '', studyEnd: '' }],
    work: [
      {
        company: '',
        positionTitle: '',
        workStart: '',
        workEnd: '',
        responsibilities: '',
      },
    ],
  });

  //We setting the value in each input field.
  const handleValueChange = (e) => {
    const { name, value } = e.target;

    if (name.includes('education') || name.includes('work')) {
      const [field, index, property] = name.split('.');
      const updatedArray = [...values[field]];
      updatedArray[index][property] = value;
      setValues({ ...values, field: updatedArray });
    } else {
      setValues({ ...values, [name]: value });
    }
  };

  const handleSubmitButton = () => {
    //TODO:WRITE LOGIC FOR CHECKING THE EMPTY STRINGS BEFORE SUBMITTING
    //FIXME: if submit button is clicked at least once - it passes the values from values to cvtable values
    //by this logic, even if i change the text in formtable.jsx, it should not change in cvtable.jsx
    //for some reason this does not apply for education and work arrays in the cvtablevalues object.
    //Things to note:
    //1. cvtablevalues does not change at all if we do not click submit button
    //2. After clicking submit button. cvtablevalues properties name email and phone stays the same and
    // updates it self only when submit button clicked again, but education and work arrays keeps changing
    // on each text change in formtable.jsx.
    // this does not make sense since it should only be updated on submit button click.
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
