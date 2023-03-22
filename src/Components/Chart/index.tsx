
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export function Chart({data}:any){

    var options: ApexOptions = {
        series: [
        {
            name: 'Classificação',
            data:data
          }],
       
          xaxis: {
            categories: ['1', '2', '3', '4', '5'],
            
            labels: {
              
              show: false,
              style: {
                fontSize: '24px',
                // fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 700,
                colors: ['#000'],

              },
            },
          },
          yaxis: {
            // categories: ['1', '2', '3', '4', '5'],
            labels: {
              show: true,
              style: {
                fontSize: '15px',
                // fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                colors: ['#424242'],

              },
            },
          },

        stroke: {
          width: 0,
        },

        plotOptions: {
          bar: {
            horizontal: true,
            // columnWidth:'10px',


          }
        },
        
        dataLabels: {
          enabled: false,
          offsetX: 0,
          offsetY: 0,
          // style: {
          //   fontSize: '12px',
          //   fontFamily: 'Helvetica, Arial, sans-serif',
          //   fontWeight: 500,
          //   colors: ['#FFF'],
          // },
        },
        chart: {
          // height: 50,
          // height: 100,

          toolbar: {
            show: false,

          },
          animations: {
            enabled: true,
          },
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