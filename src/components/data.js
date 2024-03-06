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

//PracticalExperience (company name, position title, responsibilities, from till)
