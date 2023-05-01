import React, { useState } from 'react';

export default function CalenderDrop() {
  const [selectedRange, setSelectedRange] = useState('May-June 2021');

  const handleRangeChange = (e) => {
    setSelectedRange(e.target.value);
  };

  const getRangeOptions = () => {
    const today = new Date();
    const options = [];
    for (
      let year = today.getFullYear();
      year >= today.getFullYear() - 1;
      year--
    ) {
      const endMonth = year === today.getFullYear() ? today.getMonth() : 11;
      for (let month = endMonth; month >= 0; month -= 2) {
        const end = new Date(year, month);
        const start = new Date(year, month - 1);
        const range = `${start.toLocaleString('default', {
          month: 'short',
        })}-${end.toLocaleString('default', { month: 'short' })} ${year}`;
        options.push(
          <option key={range} value={range}>
            {range}
          </option>
        );
      }
    }
    return options;
  };

  return (
    <div className="text-[#858585] text-[14px] ml-5 flex justify-between">
      <select value={selectedRange} onChange={handleRangeChange}>
        {getRangeOptions()}
      </select>

      {/* <div className="flex items-center pr-16">
        <div className="bg-[#9BDD7C] h-[10px] w-[10px] rounded-full mr-3"></div>
        <p className="text-[14px] text-[#000000]">User</p>
      </div> */}
    </div>
  );
}
