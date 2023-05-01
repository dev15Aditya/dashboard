import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import CalenderDrop from './CalenderDrop';

const COLORS = ['#98D89E', '#F6DC7D', '#EE8484'];

export default function TopProducts() {
  const [languages, setLanguages] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/repos/facebook/react/languages'
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const totalBytes = Object.values(data).reduce(
          (accumulator, currentValue) => accumulator + currentValue
        );

        const chartData = Object.keys(data)
          .map((language, index) => ({
            name: language,
            value: (data[language] / totalBytes) * 100,
            color: COLORS[index % COLORS.length],
          }))
          .sort((a, b) => b.value - a.value)
          .slice(0, 3);

        console.log('Chart data:', chartData);

        setLanguages(chartData);
      } catch (error) {
        console.error('Error fetching language data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-[450px] h-[270px] bg-[#FFFFFF] rounded-[20px]">
      <div className="flex justify-between px-14 pt-8">
        <p className="text-[18px] font-bold text-[#000000]">Top products</p>
        <CalenderDrop />
      </div>
      <div className="flex items-center justify-center bg-[#FFFFFF]">
        {languages ? (
          <PieChart width={200} height={200}>
            <Pie data={languages} outerRadius={60} dataKey="value">
              {languages.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        ) : (
          <p>Loading...</p>
        )}

        <div className="flex flex-col">
          {languages &&
            languages.map((lang) => (
              <div className="flex" key={lang.name}>
                <div
                  className="w-[11px] h-[11px] rounded-full mr-2 mt-2"
                  style={{ backgroundColor: lang.color }}
                ></div>
                <div className="ml-2">
                  <p className="text-[14px] font-bold">{lang.name}</p>
                  <span className="text-[12px] text-[#858585]">
                    {lang.value.toFixed(2)}%
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
