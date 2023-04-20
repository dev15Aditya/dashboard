import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function Chart() {
  const data = [
    {
      name: 'Week 1',
      uv: 200,
      pv: 100,
      amt: 240,
    },
    {
      name: 'Week 2',
      uv: 300,
      pv: 138,
      amt: 210,
    },
    {
      name: 'Week 3',
      uv: 200,
      pv: 100,
      amt: 2290,
    },
    {
      name: 'Week 4',
      uv: 270,
      pv: 308,
      amt: 200,
    },
  ];
  return (
    <ResponsiveContainer
      className="py-7 w-[500px] bg-[#FFFFFF] rounded-[20px]"
      width="90%"
      aspect={4 / 1}
    >
      <LineChart
        width={1000}
        height={359}
        data={data}
        margin={{
          top: 5,
          right: 25,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#E9A0A0"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#9BDD7C" />
      </LineChart>
    </ResponsiveContainer>
  );
}
