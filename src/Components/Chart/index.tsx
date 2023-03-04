
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export function Chart({data}:any){

    var options: ApexOptions = {
        series: [
        {
            name: 'Classificação',
            data:data
          }],
       
        yaxis: {
          labels: {
            show: false
          }
        },
        xaxis:{
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