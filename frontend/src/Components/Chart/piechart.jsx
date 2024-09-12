import Chart from 'react-apexcharts'
const PieChart=()=>{
    return(
        <div style={{display:"flex",justifyContent:"center"}}>
          <Chart 
          type='pie'
            width={300}
            height={126}
            series={[44, 55, 41, 17, 15,2,5]}
            options={{
                title:{text:'Categories Distribution',style:{fontSize:'14px',fontWeight:600,color:'#02397e'}},
                labels:['Sports','Entertainment','Crimes','Business','International','Lifestyle','Political'],
                
                dataLabels:{
                    enabled:false
                
                }
            }}
          >

          </Chart>
        </div>
    )
};
export default PieChart;