import GeneralInformation from './GeneralInformation';
import EducationalExperience from './EducationalExperience';
import PracticalExperience from './PracticalExperience';
import { GeneralInformationInputs } from './data';
import { EducationalExperienceInputs } from './data';
import { PracticalExperienceInputs } from './data';

//Storing all of the form data in to an object.
function FormTable({
  values,
  onValuesChange,
  onFormSubmit,
  onAddMoreClick,
  onDelete,
}) {
  //TODO: How Exactly does hit callback function work?
  const handleSubmit = () => {
    onFormSubmit();
  };

  const handleAddMore = (e) => {
    onAddMoreClick(e);
  };

  const handleDelete = (e) => {
    onDelete(e);
  };

  return (
    <div>
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
              onChange={onValuesChange}
            />
          ))}
        </div>
      </div>
      <div>
        <h1 className="header-v1">Educational Experience</h1>
        <div className="formDateInputTable">
          {/* Loop through education to check how many array items exists in it */}
          {values.education.map((education, index) => (
            <div key={index}>
              {EducationalExperienceInputs.map((input) => (
                <EducationalExperience
                  key={input.id}
                  label={input.label}
                  name={`education.${index}.${input.name}`}
                  type={input.type}
                  placeholder={input.placeholder}
                  // Value applies to appropriate education array index
                  value={education[input.name]}
                  onChange={onValuesChange}
                />
              ))}
              {/* Button will be skipped on 1st item */}
              {index > 0 ? (
                <button id={index} onClick={handleDelete}>
                  Delete
                </button>
              ) : null}
            </div>
          ))}
        </div>
        <button name="addEducation" onClick={handleAddMore}>
          Add more
        </button>
      </div>
      <div>
        <h1 className="header-v1">Work Experience</h1>
        <div className="formDateInputTable">
          {/* Loop through education to check how many array items exists in it */}
          {values.work.map((work, index) => (
            <div key={index}>
              {PracticalExperienceInputs.map((input) => (
                <PracticalExperience
                  key={input.id}
                  label={input.label}
                  name={`work.${index}.${input.name}`}
                  type={input.type}
                  placeholder={input.placeholder}
                  // Value applies to appropriate education array index
                  value={work[input.name]}
                  onChange={onValuesChange}
                />
              ))}
              {/* Button will be skipped on 1st item */}
              {index > 0 ? (
                <button id={index} onClick={handleDelete}>
                  Delete
                </button>
              ) : null}
            </div>
          ))}
        </div>
        <button name="addWork" onClick={handleAddMore}>
          Add more
        </button>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default FormTable;
