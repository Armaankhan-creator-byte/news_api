import "./mystyle.css"
function Newsitem(props)
{
 
    return(
        <>
        <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
        <div className="card" >
  <img className="card-img-top"  height ="250px"src={props.img} alt="Card image cap"/>
  <div className="card-body" >
    <h5 className="card-title " style={{height:"150px"}}>{props.title.slice(0,100)+"..."}</h5>
    <hr />
    <div style={{height:"100px"}}>
        <p>{props.data}</p>
        <p>{props.source ? props.source:  ""}</p>
        <p>{props.author ? props.author: ""}</p>
    </div>

    <p className="card-text" style={{height:"250px"}} >{props.description?props.description.slice(0,400)+"...":""}</p>
    <a href={props.url} className="btn background w-100 text-center text-light">Read Full Article</a>
  </div>
</div>
</div>
        </>
    )

}
export default Newsitem