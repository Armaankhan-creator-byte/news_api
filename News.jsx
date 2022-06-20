// import "./mystyle.css";
// import { useState, useEffect } from "react";
// import Newsitem from "./Newsitem";
// // import InfiniteScroll from "react-infinite-scroll-component";
// function News(props) {

//     var [article, setarticles] = useState([]);
//     var [totalresults, settotalresults] = useState(0);
//     var [page, setpage] = useState(1);
//     var [pagesize, setpagesize] = useState(8);
//     async function getdata() {
//         setpage(1);
//         var rawdata = await fetch(`https://newsapi.org/v2/top-headlines?q=${props.category}&tesla&sortBy=publishedAt&pageSize=8&apiKey=b0cfc6ad04134bf9b62a8fb33e58a093`)
//         // https://newsapi.org/v2/top-headlines?country=us&apiKey=b0cfc6ad04134bf9b62a8fb33e58a093
//         var result = await rawdata.json();
     
//         console.log(result)
        
//         setarticles(result.articles);
//         settotalresults(result.totalResults);

//         // console.log(article);

//         // console.log(totalresults)
//     }
//     useEffect(() => {
//         getdata();
//     },[])
  
//     // var fetchmoredata = async () => {
//     //     setpage(page + 1);
//     //     var rawdata = await fetch(`https://newsapi.org/v2/everything?q=${props.category}tesla&from=2022-05-14&sortBy=publishedAt&pageSize=${pagesize}&apiKey=b0cfc6ad04134bf9b62a8fb33e58a093`)
//     //     var result = await rawdata.json();
//     //     setarticles(article.concat(result.articles))
//     // }
//     return (
//         <>
       
//             <h5 className="background text-center text-light p-2">Latest news</h5>
//            <div className="row">
            
//     {article.map((index)=>{
//        return (
        
//         <Newsitem img={index.urlToImage} title={index.title} source={index.source.name} data={index.content} author={index.author} description={index.description } url={index.url}/> 
        
//      )})}
  
 
//    </div>         
//         </>
//     )
// }
// export default News
import React from "react";
import { Component } from "react";
import Newsitem from "./Newsitem";
import InfiniteScroll from "react-infinite-scroll-component";
class News extends Component{
    constructor(){
        super()
        this.state={
            pageSize:8,
            articles:[],
            totalResults:0,
            page:1

        }
    }
    async getData(){
        this.setState({page:1})
        var rawdata=await fetch(`https://newsapi.org/v2/everything?q=${this.props.category}&language=hi&sortBy=publishedAt&pageSize=${this.state.pageSize}&page=${this.state.page}&apiKey=b0cfc6ad04134bf9b62a8fb33e58a093`)
        var result= await rawdata.json()
        this.setState({
            articles:result.articles,
            totalResults:result.totalResults

       
           
    
        })




    }
    fetchMoreData=async ()=>{
        this.setState({page:this.state.page+1})
        var rawdata=await fetch(`https://newsapi.org/v2/everything?q=${this.props.category}&language=hi&sortBy=publishedAt&pageSize=${this.state.pageSize}&page=${this.state.page}&apiKey=b0cfc6ad04134bf9b62a8fb33e58a093`)
        var result= await rawdata.json()
        console.log(result);
        this.setState({
       
    articles:this.state.articles.concat(result.articles)
           
    
        }) 
    }
    componentDidMount(){
        this.getData();
    }
    componentDidUpdate(old){
        if(old.category!=this.props.category)
        this.getData()
    }



    
    render(){
        return(
            <>
            <h5 className="background text-center text-light p-2">Latest news</h5>
            <InfiniteScroll
           
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length<this.state.totalResults}
          loader={<h4>Loading...</h4>}
        >
            <div className="row">
                {
                    this.state.articles.map((item,index)=>{
                        return <Newsitem
                        key={index}
                        title={item.title}
                        description={item.description}
                        img={item.urlToImage}
                        url={item.url}
                        data={item.publishedAt}
                        source={item.source.name}
                        author={item.author}
                        />

                    })
                }
            </div>
            </InfiniteScroll>
            </>
        )
    }
}
export default News