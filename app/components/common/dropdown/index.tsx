import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

interface DropdownProps {
  placeholder: string;
}
const Dropdown: React.FC<DropdownProps> = ({ placeholder }) => {
  const [dropdownValue, setDropdownValue] = useState<string>('');
  const [dropdownStatus, setDropdownStatus] = useState<boolean>(false);

  const timezoneArray = [
    {
      title: '(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi',
      timezone: 'India Standard Time',
      id: 0,
    },
    {
      title: '(GMT+06:00) Astana, Dhaka',
      timezone: 'Central Asia Standard Time',
      id: 1,
    },
    {
      title: '(GMT+07:00) Bangkok, Hanoi, Jakarta',
      timezone: 'S.E. Asia Standard Time',
      id: 2,
    },
    {
      title: '(GMT+08:00) Irkutsk, Ulaanbaatar',
      timezone: 'North Asia East Standard Time',
      id: 3,
    },
  ];

  const setDropdown = (e: any) => {
    console.log(e.target.innerText);
    setDropdownValue(e.target.innerText);
    setDropdownStatus(false);
  };
  return (
    <main>
      <div
        className={`w-full flex items-center justify-between border solid py-3 px-3 ${
          dropdownStatus ? 'rounded-b-none rounded-t-lg' : 'rounded-lg'
        } cursor-pointer `}
        onClick={() => setDropdownStatus((prev: boolean) => !prev)}
      >
        {dropdownValue ? (
          <span className="text-gray-700  text-sm">{dropdownValue}</span>
        ) : (
          <span className="text-slate-400">{placeholder}</span>
        )}
        <span className="h-5 w-5">{dropdownStatus ? <ChevronUpIcon /> : <ChevronDownIcon />}</span>
      </div>
      <div>
        <ul
          className={`${
            dropdownStatus ? '' : 'hidden'
          } border rounded-t-none rounded-b-lg h-36 overflow-y-auto text-sm text-gray-700 dark:text-gray-200`}
          onClick={(e) => setDropdown(e)}
        >
          {timezoneArray?.map((item, index) => (
            <li key={item.id} className="flex p-3 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <label htmlFor={`checkbox-${index + 1}`}>{item.title}</label>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Dropdown;
