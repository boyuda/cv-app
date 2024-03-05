import { useState } from 'react';
import FormTable from './components/FormTable';
import CVTable from './components/CVTable';

function App() {
  return (
    <div className="container">
      <div>
        <FormTable />
      </div>
      <div>
        <h1 className="header-v1">Your CV</h1>
        <CVTable />
      </div>
    </div>
  );
}

export default App;
