import { useState } from 'react';

function GeneralInformation(props) {
  //Received props destructuring
  const { label, onChange, id, ...inputProps } = props;

  return (
    <div>
      <label>{id}</label>
      <label>{label}</label>
      {/* If we write something in to the form, it stores the values */}
      <input {...inputProps} onChange={onChange} />
    </div>
  );
}

export default GeneralInformation;
