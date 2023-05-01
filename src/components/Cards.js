import React, { useState, useEffect } from 'react';

export default function Cards() {
  const [topLanguage, setTopLanguage] = useState('');
  const [leastUsedLanguage, setLeastUsedLanguage] = useState('');

  const [highValue, setHighValue] = useState(0);
  const [lowValue, setLowValue] = useState(0);

  useEffect(() => {
    fetch('https://api.github.com/repos/facebook/react/languages')
      .then((response) => response.json())
      .then((data) => {
        const languages = Object.entries(data);

        // Find the most popular language
        const sortedLanguages = languages.sort((a, b) => b[1] - a[1]);
        setTopLanguage(sortedLanguages[0][0]);

        setHighValue(sortedLanguages[0][1]);

        // Find the least popular language
        setLeastUsedLanguage(
          languages.reduce((acc, cur) => {
            if (acc[1] > cur[1]) {
              return cur;
            } else {
              return acc;
            }
          })[0]
        );

        setLowValue(
          languages.reduce((acc, cur) => {
            if (acc[1] > cur[1]) {
              return cur;
            } else {
              return acc;
            }
          })[1]
        );
      });
  }, []);
  return (
    <div className="flex flex-wrap justify-center md:ml-[250px]">
      <div className="bg-[#DDEFE0] w-[90%] md:w-[221.05px] h-[200px] md:h-[120px] rounded-[20px] flex items-start justify-between p-6 m-2">
        <div className="pt-6">
          <p className="text-[14px]">Top Language</p>
          <p className="text-[24px] font-bold">{topLanguage}</p>
        </div>
        <img src="/Vector1.png" alt="" />
      </div>

      <div className="bg-[#F4ECDD] w-[90%] md:w-[221.05px] h-[200px] md:h-[120px] rounded-[20px] flex items-start justify-between p-6 m-2">
        <div className="pt-6">
          <p className="text-[14px]">Least used Lang</p>
          <p className="text-[24px] font-bold">{leastUsedLanguage}</p>
        </div>
        <img src="/Vector2.png" alt="" />
      </div>
      <div className="bg-[#EFDADA] w-[90%] md:w-[221.05px] h-[200px] md:h-[120px] rounded-[20px] flex items-start justify-between p-6 m-2">
        <div className="pt-6">
          <p className="text-[14px]">{topLanguage} User</p>
          <p className="text-[24px] font-bold">{highValue}</p>
        </div>
        <img src="/Vector3.png" alt="" />
      </div>

      <div className="bg-[#DEE0EF] w-[90%] md:w-[221.05px] h-[200px] md:h-[120px] rounded-[20px] flex items-start justify-between p-6 m-2">
        <div className="pt-6">
          <p className="text-[14px]">{leastUsedLanguage} Users</p>
          <p className="text-[24px] font-bold">{lowValue}</p>
        </div>
        <img src="/Vector4.png" alt="" />
      </div>
    </div>
  );
}
