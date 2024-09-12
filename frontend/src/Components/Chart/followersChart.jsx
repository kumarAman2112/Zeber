import Chart from "react-apexcharts";
const FollowerBarchart = () => {
  return (
    <>
      <Chart
        type="bar"
        width="100%"
        height="100%"
        series={[
          {
            name: "Followers",
            data: [8, 2, 5, 3, 2, 1, 4],
          },
        ]}
        options={{
          title: {
            text: "Followers by day",
            style: { fontSize: "15px", fontWeight: 600, color: "black" },
          },
          colors: ["#FFFFFF"],

          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "16",
              borderRadius: "6",
            },
          },
     

          xaxis: {
            categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          },
      
          grid: {
            show: false,
          },
          yaxis: {
            labels: {
              show: false,
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
export default FollowerBarchart;
