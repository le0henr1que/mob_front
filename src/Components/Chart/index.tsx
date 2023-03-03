
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export function Chart(){

    var options: ApexOptions = {
        series: [
        {
          // series: [{
            name: 'Series 1',
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
            

          }],
        //   name: 'Actual',
      //     data: [
      //       {
      //         x: '1',
      //         y: 1,
      //         goals: [
      //           {
      //           //   name: 'Expected',
      //             value: 6,
      //           //   strokeHeight: 5,
      //           //   strokeColor: '#775DD0'
      //           }
      //         ]
      //       },
      //       {
      //         x: '2',
      //         y: 2,
      //         goals: [
      //           {
      //           //   name: 'Expected',
      //             value: 2,
      //           //   strokeHeight: 5,
      //           //   strokeColor: '#775DD0'
      //           }
      //         ]
      //       },
      //       {
      //         x: '3',
      //         y: 10,
      //         goals: [
      //           {
      //           //   name: 'Expected',
      //             value: 5,
      //           //   strokeHeight: 5,
      //           //   strokeColor: '#775DD0'
      //           }
      //         ]
      //       },
      //       {
      //         x: '4',
      //         y: 4,
      //         goals: [
      //           {
      //           //   name: 'Expected',
      //             value: 4,
      //           //   strokeHeight: 5,
      //           //   strokeColor: '#775DD0'
      //           }
      //         ]
      //       },
      //       {
      //         x: '5',
      //         y: 5,
      //         goals: [
      //           {
      //           //   name: 'Expected',
      //             value: 2,
      //           //   strokeHeight: 13,
      //           //   strokeWidth: 0,
      //           //   strokeLineCap: 'round',
      //           //   strokeColor: '#775DD0'
      //           }
      //         ]
      //       },
      //       {
      //         x: '6',
      //         y: 6,
      //         goals: [
      //           {
      //           //   name: 'Expected',
      //             value: 9,
      //           //   strokeHeight: 5,
      //           //   strokeColor: '#775DD0'
      //           }
      //         ]
      //       },
      //       {
      //         x: '7',
      //         y: 7,
      //         goals: [
      //           {
      //           //   name: 'Expected',
      //             value: 5,
      //           //   strokeHeight: 5,
      //           //   strokeColor: '#775DD0'
      //           }
      //         ]
      //       },
      //       {
      //         x: '8',
      //         y: 8,
      //         goals: [
      //           {
      //           //   name: 'Expected',
      //             value: 2,
      //           //   strokeHeight: 2,
      //           //   strokeDashArray: 2,
      //           //   strokeColor: '#775DD0'
      //           }
      //         ]
      //       },
      //       {
      //           x: '9',
      //           y: 9,
      //           goals: [
      //             {
      //               // name: 'Expected',
      //               value: 6,
      //               // strokeHeight: 2,
      //               // strokeDashArray: 2,
      //               // strokeColor: '#006FEC'
      //             }
      //           ]
      //       },
      //       {
      //       x: '10',
      //       y: 10,
      //       goals: [
      //           {
      //           // name: 'Expected',
      //           value: 9,
      //           // strokeHeight: 2,
      //           // strokeDashArray: 2,
      //           // strokeColor: '#006FEC'
      //           }
      //       ]
      //       }
      //     ]
      //   }
      // ],
      // xaxis: {
      //   type: 'category',
      // },
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
      // plotOptions: {
      //   bar: {
      //     columnWidth: '60%'
      //   }
      // },
      // colors: ['#006FEC'],
      // dataLabels: {
      //   enabled: false
      // },
      // legend: {
      //   show: false,
      //   showForSingleSeries: false,
        // customLegendItems: ['Actual', 'Expected'],
        // markers: {
        //   fillColors: ['#00E396', '#775DD0']
        // }
      // }
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