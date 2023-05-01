import React, { useEffect, useState } from 'react';
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
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://api.github.com/repos/facebook/react/languages'
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  const sortedData = Object.entries(data)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4);

  const chartData = sortedData.map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <ResponsiveContainer
      className="py-7 w-[500px] bg-[#FFFFFF] rounded-[20px]"
      width="90%"
      aspect={4 / 1}
    >
      <LineChart
        width={1000}
        height={359}
        data={chartData}
        margin={{
          top: 5,
          right: 25,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="" />
        <XAxis dataKey="name" />
        <YAxis
          tick={{
            fontSize: 12,
            fill: '#333',
          }}
          axisLine={{
            stroke: '#333',
          }}
        />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#E9A0A0" />
      </LineChart>
    </ResponsiveContainer>
  );
}
