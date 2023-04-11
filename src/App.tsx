import Dropdown from './components/Dropdown';
import { DropdownOption } from './interfaces';

const App: React.FC = () => {
  const options: DropdownOption[] = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' }
  ];

  return (
    <div>
      <Dropdown options={options} />
    </div>
  );
};

export default App;
