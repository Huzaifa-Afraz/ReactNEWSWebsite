import React, { useState, useEffect} from 'react'
import NewsComponent from './NewsComponent';
import Spinner from './Spinner';
// import InfiniteScroll from 'react-infinite-scroller';
import InfiniteScroll from "react-infinite-scroll-component";
export default function News(props) {


const[articles, setArticles]=useState([]);
// const[loading, setloading]=useState(false);
const[loading, setloading]=useState(false);
const[page, setpage]=useState(1);
const [totalResults, settotalresults]=useState(0);



  const  updateData= async ()=>{
    props.progress(10);
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.API_key}&page=${ page}&category=${props.category}&pageSize
    =${props.pageSize}`;
    // this.setState({loading:true})
    setloading(true);
    let data=await fetch(url);
    props.progress(30);
    let output=await data.json();
    props.progress(60);
    // this.setState({articles:output.articles,loading:false, totalResults:output.totalResults})
    setArticles(output.articles);
    setloading(false);
    settotalresults(output.totalResults)
    props.progress(100);
  }
  useEffect(()=>{
    /* eslint-disable */
    updateData()
  }, []);
  const fetchMoreData =async () => {
    props.progress(10);

  let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.API_key}&page=${ page = 1}&category=${props.category}&pageSize
  =${props.pageSize}`;
  setpage(page + 1)
  setloading(true);
  let data=await fetch(url);
  props.progress(30);
  let output=await data.json();
  props.progress(60);
  setArticles(articles.concat(output.articles));
  setloading(loading);
  settotalresults(output.totalResults);
  props.progress(100);
  }
    return (
      <div>
      
      <InfiniteScroll
          dataLength={ articles.length}
          next={fetchMoreData}
          hasMore={ articles.length <=  totalResults?true:false}
          loader={<Spinner/>}
        >
          <div className='container d-flex justify-content-between flex-wrap gap-5'>

      {
         articles.map((e)=>{
            return <NewsComponent imgUrl={!e.urlToImage?"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg":e.urlToImage} title={e.title} discreption={e.description || "no descreption"} url={e.url} btnText="Read more"/>
    })}
    </div>
     </InfiniteScroll>
    

{/* <div className='container d-flex justify-content-between my-5'>
<button disabled={ page<=1} onClick={this.previous} className='btn btn-primary'>&larr;Previous</button>
<button disabled={ page + 1 > Math.ceil( totalResults / 20)} onClick={this.next} className='btn btn-primary'>next&rarr;</button>
</div> */}

   
      </div>
    )

}
