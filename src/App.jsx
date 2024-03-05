import { useState } from 'react';
import FormTable from './components/FormTable';

function App() {
  return (
    <div className="container">
      <div className="container-grid">
        <FormTable />
        <div>
          <h1 className="header-v1">Your CV</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
