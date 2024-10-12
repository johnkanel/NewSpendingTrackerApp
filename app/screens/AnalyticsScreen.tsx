import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart, PieChart } from 'react-native-svg-charts'; // Make sure to import from the right library

const ChartScreen = () => {
  const barData = [
    { key: 'A', value: 50 },
    { key: 'B', value: 30 },
    { key: 'C', value: 20 },
  ];

  const pieData = [
    { key: 'A', value: 50 },
    { key: 'B', value: 30 },
    { key: 'C', value: 20 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <Text>Bar Chart:</Text>
        <BarChart
          style={styles.chart}
          data={barData}
          svg={{ fill: 'tomato' }}
          contentInset={{ top: 30, bottom: 30 }}
        />
      </View>
      <View style={styles.chartContainer}>
        <Text>Pie Chart:</Text>
        <PieChart
          style={styles.chart}
          data={pieData}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chart: {
    height: 200,
    width: '100%',
  },
  chartContainer: {
    marginVertical: 20,
    padding: 10,
  },
});

export default ChartScreen;
