import React from 'react'
import '../css/home.css'
import imageLogo from '../imgs/pexels-cottonbro-4709286.jpg'
export default function Home() {
    return (
        <div className="homeDiv">
           <div className='divFirstImgs'>
                <div className='bigTitleHomes'>
                    <p className='companyNameHome'>Graphix</p>
                    <p className='companySlogan'>Made everything with innovation</p>
                    <div className='divBtnHome'>
                        <button className='btnInnoved'>Let's get innoved</button>
                    </div>
                </div>
                <div className='blackCover'></div>
                <img src={imageLogo} alt='Images' className='ImgHome'/>
           </div>

            <div>
                <h1> What Can You Expect From Us</h1>
                <p>
                    At Graphix, we pride ourselves to be a customer-centric company; In fact, it is this core value that pushes us to provide our services at an affordable price. <br/>
                    Hence, the sole goal of Graphix is to help businesses get one step closer to success with a polished online presence.
                </p>
            </div>

            {/*Choose 3 values/qualities that the company stands by.  */}
            <div>

                <div>
                    {/* First value */}
                    <p>
                        <b>Frugality</b>: Graphix understands the power of accomplishing more with less. <br/>
                        Knowing that there are no extra points for growing headcount or budget size,<br/>
                         Graphix focuses on developing solutions that are affordable, secure, and efficient.
                    </p>
                    <div>
                        {/* Add some images. */}
                    </div>
                </div>
                <div>
                    {/* Second value */}
                    <p>
                        <b>Quality</b>: On top of being frugal and transparent with our solutions, <br/>
                        we also guarantee the quality of our services. <br/>
                        Hence, because speed matters in business, we always develop and deliver our solutions on time.

                    </p>
                    <div>
                        {/* Add some images. */}
                    </div>
                </div>
                <div>
                    {/* Third value */}
                    <p>
                        <b>Think Big</b>: Thinking small is a self-fulfilling prophecy. <br/>
                        At Graphix, we value businesses with big dreams. <br/>
                        Thus, we are willing to work with our clients, regardless of their projects’ size.
                    </p>
                    <div>
                        {/* Add some images. */}
                    </div>
                </div>

            </div>
           
           <div>
   
                <a href="/about">
                    Learn More About us
                </a>
           </div>

           <div>
               <h1>We Are A Verstile Company</h1>
               <p>
                    Graphix provides web and mobile applications for all business sizes. <br/>
                    Because we understand the benefits of frugality, <br/>
                    we focus our effort on finding solutions that are affordable, secure, and efficient.
               </p>
               <a href="/service">
                    Learn More
               </a>
           </div>
           
           <div>
               <h1>Contact Us</h1>
               <a href="/contact">
                    Let's Get Started
               </a>
           </div>
            
        </div>
    )
}
