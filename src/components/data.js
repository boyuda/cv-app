import { v4 as uuidv4 } from 'uuid';

//GeneralInformation (name, email, phone number)
export const GeneralInformationInputs = [
  {
    id: uuidv4(),
    name: 'name',
    type: 'text',
    placeholder: 'First and Last Name',
    label: 'Name',
  },
  {
    id: uuidv4(),
    name: 'email',
    type: 'text',
    placeholder: 'Email',
    label: 'Email',
  },
  {
    id: uuidv4(),
    name: 'phone',
    type: 'text',
    placeholder: 'Phone',
    label: 'Phone',
  },
];

//EducationalExperience (school name, title of study and date of study)
export const EducationalExperienceInputs = [
  {
    id: uuidv4(),
    name: 'school',
    type: 'text',
    placeholder: 'School',
    label: 'School',
  },

  {
    id: uuidv4(),
    name: 'studyTitle',
    type: 'text',
    placeholder: 'Title',
    label: 'Title of Study',
  },

  {
    id: uuidv4(),
    name: 'studyStart',
    type: 'date',
    placeholder: 'Start Date',
    label: 'Start Date',
  },

  {
    id: uuidv4(),
    name: 'studyEnd',
    type: 'date',
    placeholder: 'End Date',
    label: 'End Date',
  },
];

export const PracticalExperienceInputs = [
  {
    id: uuidv4(),
    name: 'company',
    type: 'text',
    placeholder: 'Company Name',
    label: 'Company',
  },

  {
    id: uuidv4(),
    name: 'positionTitle',
    type: 'text',
    placeholder: 'Position',
    label: 'Position Title',
  },

  {
    id: uuidv4(),
    name: 'workStart',
    type: 'date',
    placeholder: 'Start Date',
    label: 'Start Date',
  },

  {
    id: uuidv4(),
    name: 'workEnd',
    type: 'date',
    placeholder: 'End Date',
    label: 'End Date',
  },

  {
    id: uuidv4(),
    name: 'responsibilities',
    type: 'text',
    placeholder: 'Responsibilities',
    label: 'Responsibilities',
  },
];

//PracticalExperience (company name, position title, responsibilities, from till)
