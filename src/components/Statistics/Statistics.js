import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
  const charts = useLoaderData();
  const allCharts = charts.data;

  console.log(allCharts)
  return (
    <div>
      <h1>This is Statics {allCharts.length}</h1>
      <LineChart className='bg-sky-100 container mx-auto m-10' width={600} height={500} data={allCharts}>
      <Line type="monotone" dataKey="total" stroke="#82ca9d" />
      <Tooltip />
          <Legend />
      <XAxis dataKey="name" />
          <YAxis />
      </LineChart>
      <h1 className='bg-blue-100'>All quiz Number</h1>
    </div>
  );
};

export default Statistics;