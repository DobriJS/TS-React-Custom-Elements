import { useState } from 'react';
import Dropdown from '../components/Dropdown';
import { DropdownOption } from '../interfaces';

const DropdownPage: React.FC = () => {
  const [selection, setSelection] = useState<DropdownOption | null>(null);
  const handleSelect = (option: DropdownOption) => setSelection(option);

  const options: DropdownOption[] = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' }
  ];

  return (
    <div>
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
};

export default DropdownPage;