import React, { Component } from 'react'
import {Helmet} from 'react-helmet'
import ReactGA from 'react-ga';
import Map from '../components/map'



export default class About extends Component {


    componentDidMount(){
        const id = process.env.REACT_APP_GOOGLE_ID
        ReactGA.initialize(id);
        ReactGA.set({ page: window.location.pathname }); // Update the user's current page
        ReactGA.pageview(window.location.pathname); // Record a pageview for the given page
 
    }

    
    render() {
        return (
            <div >
            {/* Do not modify the code shown in Helmet. This is for the backend */}
            <Helmet>
               <title>Graphix CK About Page Based In The USA And Ivory Coast (Côte D'Ivoire)</title>
               <meta name="description" content="Graphix is based in the USA and Ivory Coast. You guessed it, we also speak French." />
           </Helmet>
          <div>
              <div>
                  <div>
                      {/* Add image here */}
                  </div>
                  <h2>Frugality</h2>
              </div> 

              <div>
                  <div>
                      {/* Add image here */}
                  </div>
                  <h2>Quality</h2>
              </div> 

              <div>
                  <div>
                      {/* Add image here */}
                  </div>
                  <h2>Think big</h2>
              </div> 

          </div>

          <div>
              {/* A brief intro text to our values */}
              <p>
               Frugality, Quality, and Thinking Big are our core values. <br/>
               Hence, those values represent the foundation of Graphix. <br/>
               Following these values, allows us to start with the customer and work backward. 
              </p>
          </div>

          <div>
              <h1>Why do we exist</h1>
              <p>
                   With the recent pandemic that hit the world, more and more businesses started to realize that having an online presence is unavoidable. <br/>
                   However, building a web or a mobile application is not an easy task. <br/>
                   Also, the price of hiring a team of developers can seem exorbitant at times. <br/>
                   It is in this scope that Graphix was born. Graphix is a small team of developers with the sole goal of helping businesses rise to the top. <br/>
                   Because we put the customer first, Graphix provides web services at an affordable price.
              </p>
          </div>

          <div>
              <h1>Meet the team</h1>
              
              <div>
                   {/* Add image here */}
                   <div>
                       <h3>Michel Konan</h3>
                       <p>Front-End Developer</p>
                   </div>
               </div>
               <div>
                  {/* Add image here */}
                  <div>
                      <h3>Cloe Kouadjo</h3>
                      <p>Back-End Developer</p>
                  </div>   
              </div>
          </div>

          <div>
              <h1>Based in USA and Ivory Coast</h1>
              <p>
               Graphix is based in the USA and Ivory Coast. You guessed it, we also speak French. <br/>
               Our team, in those two countries, allows us to work on projects (24/7), and deliver our solutions with time efficiency.
              </p>
            
                <Map/>
           
            
              
          </div>

           <div>
               <h1>Stil unsure of have more quetions?</h1>
               <p>
                   Reach out to us and we can answer your questions personally. Also, we understand if you want to see our previous work. <br/>
                   Our team will be thrilled to showcase its knowledge.
               </p>
               <a href="/contact">Let's Get Started</a>
           </div>


       </div>
        )
    }
}
