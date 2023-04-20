import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

export default function TopProducts() {
  const data = [
    { name: 'Group A', value: 53 },
    { name: 'Group B', value: 31 },
    { name: 'Group C', value: 14 },
  ];
  const COLORS = ['#98D89E', '#F6DC7D', '#EE8484'];
  return (
    <div className="flex w-[450px] h-[226px] items-center justify-center bg-[#FFFFFF] rounded-[20px]">
      <PieChart width={200} height={200}>
        <Pie data={data} outerRadius={60} dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>

      <div className="flex flex-col">
        {data.map((e) => {
          return (
            <div>
              <div
                className={`w-[11px] h-[11px] bg-[COLORS[0]] rounded-full mt-2`}
              ></div>
              <div className="ml-2">
                <p className="text-[14px] font-bold">{e.name}</p>
                <span className="text-[12px] text-[#858585]">{e.value}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
