import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import {Inventory} from '../../utils/types';
import strings from '../../utils/strings';

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
          labels: ${JSON.stringify(
            data.map(item => `${item.name}(${item.age})`),
          )},
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
          maintainAspectRatio: true,
          plugins: {
            legend: {
              labels: {
                font: {
                  size: 40, // Set the font size here
                },
              },
              data:{
                font:{
                  size:40
                }
              }
            },
            tooltip: {
              enabled: true,
              titleFont: {
                size: 30,
              },
              bodyFont: {
                size: 30,
              }
            }
          },
        },
      });
    </script>
  </body>
</html>
`;
  if (data.length > 0) {
    return (
      <WebView
        originWhitelist={['*']}
        source={{html: chartHTML}}
        containerStyle={styles.content}
        style={styles.webview}
      />
    );
  } else return <Text style={styles.text}>{strings.table_noData_message}</Text>;
};

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
  content: {
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default WebViewChart;
