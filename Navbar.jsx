 import "./mystyle.css";
 import {Link} from "react-router-dom"
 function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light background fixed-top">
  <a className="navbar-brand text-light" href="empty">New App</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link text-light" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-light" to="/politics">Politics</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-light" to="/education">Education</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-light" to="/technology">Technology</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-light" to="/covid19">Covid-19</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-light" to="/crime">Crime</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-light" to="/jokes">Jokes</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-light" to="/entertainment">Entertainment</Link>
      </li>
     
     </ul>
    
  </div>
</nav>
<br>
</br>
<br>
</br>
<br />
        </>
    )
}
export default Navbar