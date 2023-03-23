
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export function Chart({data}:any){

    var options: ApexOptions = {
      series: [
        {
          name: 'Classificação',
          data: data
        }
      ],
    
      xaxis: {
        categories: ['1', '2', '3', '4', '5'],
        labels: {
          show: false,
          style: {
            fontSize: '24px',
            fontWeight: 700,
            colors: ['#000'],
          },
        },
      },
    
      yaxis: {
        labels: {
          show: true,
          style: {
            fontSize: '15px',
            fontWeight: 400,
            colors: ['#424242'],
          },
        },
      },
    
      stroke: {
        width: 0,
        dashArray: 2,
        

      },
    
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight:'60px', 
          columnWidth:"100px", 
          rangeBarGroupRows:false, 
          rangeBarOverlap: true,

          // columnWidth:'10px'
          // columnWidth:"10px"
            
        },
      },
    
      dataLabels: {
        enabled: false,
        offsetX: 0,
        offsetY: 0,
      },
    
      chart: {
        toolbar: {
          show: false,
          
        },
        animations: {
          enabled: true,
        },
      },
    
      grid: {
        show: false,
      },
      };

    return (
        <ReactApexChart
            options={options}
            series={options.series}
            type="bar" 
            height={200}
            width={600}
        />
        
    )
}