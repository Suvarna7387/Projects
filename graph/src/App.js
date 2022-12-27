import './App.css';
import Chart from 'react-apexcharts';
import { useState } from 'react';

function App() {
  const [state, setState] = useState({
    options: {
      colors: ['#F44336', '#9C27B0'],
      chart: {
        id: 'basic-bar'
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: 'Suvarna Marks',
        data: [30, 40, 35, 100, 49, 60, 70, 91, 125]
      },
      {
        name: 'Namrata Marks',
        data: [20, 50, 90, 80, 60, 65, 60, 85, 130]
      }
    ]
  }
  );
  return (
    <div className='container-fuild'>
    <h1 className='text-center mt-3'>React charts</h1>
      <div className='row'>
        <div className='col-md-4'>
        <Chart
                options={state.options}
                series={state.series}
                type="bar"
                width="450" 
                />
        </div>
        <div className='col-md-4'>
        <Chart
                options={state.options}
                series={state.series}
                type="line"
                width="450" />
        </div>
            <div className='col-md-4'>
              <Chart
                options={state.options}
                series={state.series}
                type="area"
                width="450" />
            </div>
            <div className='col-md-4'>
              <Chart
                options={state.options}
                series={state.series}
                type="radar"
                width="450" />
            </div>
            <div className='col-md-4'>
              <Chart
                options={state.options}
                series={state.series}
                type="histogram"
                width="450" />
            </div>
            <div className='col-md-4'>
              <Chart
                options={state.options}
                series={state.series}
                type="scatter"
                width="450" />
            </div>
            <div className='col-md-4'>
              <Chart
                options={state.options}
                series={state.series}
                type="heatmap"
                width="450" />
            </div>
          </div>
        </div>
  );
}
export default App;
