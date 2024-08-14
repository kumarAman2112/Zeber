import './trendingnews.css';
const TrendingNews=(props)=>{
    
    return(
            <div className="trending-news-container">
                <div className="trending-news-item">
                    <p>{props.news?.title}</p>
                    <hr style={{width:'100%'}}/>
                </div> 
            </div>
    );
}
export default TrendingNews;