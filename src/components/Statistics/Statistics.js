import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
  const charts = useLoaderData();
  const allCharts = charts.data;

  console.log(allCharts)
  return (
    <div className='bg-sky-50'>
      <h1>This is Statics {allCharts.length}</h1>
      <LineChart className='bg-sky-200 container mx-auto  w-full' width={350} height={400} data={allCharts}>
      <Line type="monotone" dataKey="total" stroke="#82ca9d" />
      <Tooltip />
          <Legend />
      <XAxis dataKey="name" />
          <YAxis />
      </LineChart>
      <h1 className='bg-blue-100 p-5 m-5'>All quiz Statistics</h1>
    </div>
  );
};

export default Statistics;