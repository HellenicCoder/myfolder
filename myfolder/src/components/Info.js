import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { About } from './About';
import { Interests } from './Interests';
import { Footer } from './Footer';
export const Info = () => {
    const imageUrl =  "/images/pac.jpg";
  return (
    <>
        <div id='card' className="card" style={{maxWidth:"350px", marginBottom:"20px"}}>
             <img src={imageUrl} alt='a-beautiful-girl' width={350} height={350} className="card-img-top"/>
         <div className="card-body">
           <div class="d-grid gap-2 d-md-block">
              <div class="d-grid gap-2">
                 <button className="btn btn-light" type="button"><i class="fa-solid fa-envelope"></i> email</button>
                 <button className="btn btn-primary" type="button"><i class="fa-brands fa-linkedin"></i> Linkdiln</button>
              </div>
           </div>
             <h5 className="card-title">Laura Smith</h5>
             <p className="card-text">frontEnd Developer</p>
             <About />
             <Interests />
             <Footer />
         </div>
      </div>
    </>
  )
}
