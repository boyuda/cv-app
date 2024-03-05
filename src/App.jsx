import { useState } from 'react';
import FormTable from './components/FormTable';
import CVTable from './components/CVTable';

function App() {
  //Possible inputs in each section
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleValueChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div>
        <FormTable values={values} onValuesChange={handleValueChange} />
      </div>
      <div>
        <h1 className="header-v1">Your CV</h1>
        <CVTable values={values} />
      </div>
    </div>
  );
}

export default App;
