<template>
  <div>
    <apexchart
      type="line"
      height="175"
      width="250"
      :options="chartOptions"
      :series="series"      
    ></apexchart>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: ['userSubmissions'],
  setup() {
    const chartOptions = ref({
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Product Trends by Month",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        title: {
          text: "Month",
        },
      },
      yaxis: {
        title: {
          text: "Desktops",
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    });

    const series = ref([
      {
        name: "",
        data: [],
      },
      {
        name: "",
        data: [],
      },
    ]);

    return { chartOptions, series };
  },
};
</script>
