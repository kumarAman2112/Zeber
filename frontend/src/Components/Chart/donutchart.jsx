import Chart from 'react-apexcharts'
const DonutChart=()=>{
    return(
        <div style={{display:"flex",justifyContent:"center"}}>
          <Chart 
          type='donut'
            width={300}
            height={123}
            series={[54, 45, 41, 17, 15,7]}
            options={{
                title:{text:'Geographic Segmentation',style:{fontSize:'14px',fontWeight:600,color:'#02397e'}},
                labels:['Uttar Pradesh','Maharashtra','Bihar','West Bengal','Madhya Pradesh','Others'],
                dataLabels:{
                    enabled:false
                
                }
            }}
          >

          </Chart>
        </div>
    )
};
export default DonutChart;