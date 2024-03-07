function PracticalExperience(props) {
  //Received props destructuring
  const { label, onChange, ...inputProps } = props;

  return (
    <div className="formInput">
      <label>{label}</label>
      {/* If we write something in to the form, it stores the values */}
      <input {...inputProps} onChange={onChange} />
    </div>
  );
}

export default PracticalExperience;
