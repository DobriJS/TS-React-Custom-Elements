import { useState, useEffect, useRef } from 'react';
import Panel from './Panel';
import { GoChevronDown } from 'react-icons/go';
import { DropdownOption, DropdownOptions } from '../interfaces';

const Dropdown: React.FC<DropdownOptions> = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (divEl.current && !divEl.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handler, true);
    return () => document.removeEventListener('click', handler, true);
  }, []);

  const handleClick = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: DropdownOption) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className='hover:bg-sky-100 rounded cursor-pointer p-1'
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className='w-48 relative'>
      <Panel className='flex justify-between items-center cursor-pointer' onClick={handleClick}>
        {value?.label || 'Select...'}
        <GoChevronDown className='text-lg' />
      </Panel>
      {isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
    </div>
  );
};

export default Dropdown;
