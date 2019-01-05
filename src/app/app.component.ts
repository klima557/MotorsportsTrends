import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  single: any[] = [
    {
      name: 'Germany',
      series: [
        {
          name: '2010',
          value: 5940000
        },
        {
          name: '2011',
          value: 9000000,
          title: 'Skok'
        },
        {
          name: '2012',
          value: 4000000
        }
        ]
    },
    {
      name: 'USA',
      series: [
        {
          name: '2010',
          value: 7000000
        },
        {
          name: '2011',
          value: 5000000,
          title: 'doddo'
        },
        {
          name: '2012',
          value: 8600000
        }
      ]
    },
    {
      name: 'France',
      series: [
        {
          name: '2010',
          value: 7200000
        },
        {
          name: '2011',
          value: 9000000
        },
        {
          name: '2012',
          value: 2000000
        }
      ]
    }
  ];

  single2: any[] = [
    {
      name: 'Germany',
      value: 8940000
    },
    {
      name: 'USA',
      value: 5000000
    },
    {
      name: 'France',
      value: 7200000
    }
  ];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  onSelect(event) {
    console.log(event);
  }
}
