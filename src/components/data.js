import { v4 as uuidv4 } from 'uuid';
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
