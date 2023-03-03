
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export function Chart(){

    var options: ApexOptions = {
        series: [
        {
            name: 'Series 1',
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125],

          }],
       
        yaxis: {
          labels: {
            show: false
          }
        },
        chart: {
            height: 350,
            type: 'bar'
          },
          grid: {
            show: false
          },
   
      };

    return (
        <ReactApexChart
            options={options}
            series={options.series}
            type="bar" 
            height={380}
        />
        
    )
}