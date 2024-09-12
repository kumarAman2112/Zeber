import Chart from "react-apexcharts";
const Linechart = () => {
  return (
    <>
      <Chart
        type="line"
        width="100%"
        height="100%"
        series={[
          {
            name: "Hours",
            data: [4, 3, 4, 5, 6, 3, 4],
          },
        ]}
        options={{
          title: {
            text: "Time Spent",
            style: { fontSize: "15px", fontWeight: 600, color: "white" },
          },
          colors: ["#FFFFFF"],

          xaxis: {
            categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          },
          stroke:{
            width:'5',
            curve:'smooth'
        },
          grid: {
            show: false,
          },
          yaxis: {
            labels: {
              show: false,
            },
          },
          tooltip: {
            x: {
              format: "dd MMM yyyy",
            },
          },
          dataLabels: {
            enabled: false,
          },
        }}
      ></Chart>
    </>
  );
};
export default Linechart;
