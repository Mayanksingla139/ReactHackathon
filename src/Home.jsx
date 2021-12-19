import React from "react";
import Navbar from "./Navbar";
import "./Home.css"
import mainLogo from "./undraw_maker_launch_re_rq81.svg";

const Home = () =>{
    return(
        <>
            <Navbar/>
                
    <div class="container" >
    <img src={mainLogo} alt="image of a rocket" class="img"/ >

    <div>
    <p class="container-text">Have an <strong>awesome idea</strong> <br/> wanna know how many thinks your idea is useful,  <br/>share your idea and  get others feedback <br/>
       <br/>
        <button>
            <a className="anchor-text" target="_blank" href="http://localhost:3002/">GO</a>
        </button>
    </p> <br/>
    <p class="container-text">People  loved your idea already? <br/>
        then we got your back <br/>
        Learn <strong> how to market your idea? </strong> <br/>
        Learn <strong> how to get users? </strong> <br/>
        <br/> <button>
            <a className="anchor-text" href="http://localhost:3000/">Learn</a>
            </button> </p>
      
</div>
</div>
        </>
    )
}

export default Home