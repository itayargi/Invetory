import React from 'react';
import {WebView} from 'react-native-webview';
import {Inventory} from '../../utils/types';

interface Iprops {
  data: Inventory[];
}
const WebViewChart = (props: Iprops) => {
  const {data} = props;
  const chartHTML = `
  <!DOCTYPE html>
  <html>
    <body>
      <canvas id="myChart"></canvas>
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      <script>
        var ctx = document.getElementById('myChart');
        var myChart = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: ${JSON.stringify(data.map(item => item.name))},
            datasets: [{
              data: ${JSON.stringify(data.map(item => item.age))},
              backgroundColor: ${JSON.stringify(
                data.map(
                  () => '#' + Math.floor(Math.random() * 16777215).toString(16),
                ),
              )}
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                  labels: {
                    font: {
                      size: 40, // Set the font size here
                    },
                    
                  }
                }
              },
              tooltips: {
                titleFontSize: 30, // Set the font size for tooltips here
              }
          }
        });
      </script>
    </body>
  </html>
`;

  return (
    <WebView
      originWhitelist={['*']}
      source={{html: chartHTML}}
      style={{flex: 1}}
    />
  );
};

export default WebViewChart;
