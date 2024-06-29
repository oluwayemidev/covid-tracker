import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = ({ data }) => {
  const chartData = {
    labels: ['Cases', 'Recovered', 'Deaths'],
    datasets: [
      {
        label: 'COVID-19 Statistics',
        data: [data.cases, data.recovered, data.deaths],
        backgroundColor: ['#3e95cd', '#8e5ea2', '#c45850'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'COVID-19 Statistics',
      },
    },
  };

  return (
    <div style={{ height: '400px', width: '100%', overflowX: 'auto', marginBottom: '20px' }}>
    <div style={{ height: '400px', width: '100%', minWidth: '500px', overflowX: 'auto', }}>
      <Bar data={chartData} options={options} />
    </div>
    </div>
  );
};

export default ChartComponent;
