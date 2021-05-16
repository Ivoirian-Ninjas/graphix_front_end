import React from 'react'
import '../css/home.css'
import imageLogo from '../imgs/imageWebsite/pexels-cottonbro-4709286.jpg'
import imageQualityOne from '../imgs/illustrationImage/illus-webdesign-2.png'
import imageQualityTwo from '../imgs/illustrationImage/4777de9e8e1419846bb5dcb8d49a801b.png'
import imageQualityThree from '../imgs/illustrationImage/080af88a8ae50250f0fa247b1c3a012a.png'
import serviceImgsOne from '../imgs/iconImage/web-skill.png'
import serviceImgsTwo from '../imgs/iconImage/mobileDev copy.png'
import serviceImgsThree from '../imgs/iconImage/VSD.png'
export default function Home() {
   const  goToContact = () => window.location.href = window.location.origin + "/contact"
      
    return (
        <div className="homeDiv">
           <div className='divFirstImgs'>
                <div className='bigTitleHomes'>
                    <p className='companyNameHome'>Graphix</p>
                    <p className='companySlogan'>Affordable Web Services</p>
                    <div className='divBtnHome'>
                        <button onClick={goToContact} className='btnInnoved'>Let's Get Started</button>
                    </div>
                </div>
                <div className='blackCover'></div>
                <img src={imageLogo} alt='Images' className='ImgHome'/>
           </div>

            <div className='firstTextHome'>
                <h1 className='firstTextTitle'> What Can You Expect From Us</h1>
                <p className='firstTextContain'>
                    At Graphix, we pride ourselves to be a customer-centric company; In fact, it is this core value that pushes us to provide our services at an affordable price.
                    Hence, the sole goal of Graphix is to help businesses get one step closer to success with a polished online presence.
                </p>
            </div>

            {/*Choose 3 values/qualities that the company stands by.  */}
            <div className='ourQualities'>

                <div className='divQuality'>
                    {/* First value */}
                    <div className='divQualityImgs'>
                        {/* <div className='divDots'>
                            <img src={dotsWhite} alt='dots' className='imgDots' />
                        </div> */}
                        <div className='divImgsQualities'>
                            <img src={imageQualityOne} alt='dots' className='imgQuality' />
                        </div>
                    </div>

                    <p className='divQualityText'>
                        <b className='divQualityNames'>Frugality</b> <br/><br/>
                         Graphix understands the power of accomplishing more with less. <br/>
                        Knowing that there are no extra points for growing headcount or budget size,<br/>
                         Graphix focuses on developing solutions that are affordable, secure, and efficient.
                    </p>
                </div>
                <div className='divQuality'>
                    {/* Second value */}
                    <p className='divQualityText'>
                    <b className='divQualityNames'>Quality</b> <br/><br/>
                        On top of being frugal and transparent with our solutions, <br/>
                        we also guarantee the quality of our services. <br/>
                        Hence, because speed matters in business, we always develop and deliver our solutions on time.

                    </p>
                    <div className='divQualityImgs'>
                        {/* <div className='divDots'>
                            <img src={dotsWhite} alt='dots' className='imgDots' />
                        </div> */}
                        <div className='divImgsQualities'>
                            <img src={imageQualityTwo} alt='dots' className='imgQuality' />
                        </div>
                    </div>
                </div>
                <div className='divQuality'>
                    {/* Third value */}
                    <div className='divQualityImgs'>
                        {/* <div className='divDots'>
                            <img src={dotsWhite} alt='dots' className='imgDots' />
                        </div> */}
                        <div className='divImgsQualities'>
                            <img src={imageQualityThree} alt='dots' className='imgQuality' />
                        </div>
                    </div>
                    <p className='divQualityText'>
                    <b className='divQualityNames'>Think Big</b> <br/><br/>
                        Thinking small is a self-fulfilling prophecy. <br/>
                        At Graphix, we value businesses with big dreams. <br/>
                        Thus, we are willing to work with our clients, regardless of their projects’ size.
                    </p>
                </div>

                <div className='moreAboutHome'>
                    <a href="/about" className='moreLinkHome'>Learn More About us</a>
                </div>
            </div>
        
           <div className='firstTextHome'>
               <h1 className='firstTextTitle'>We Are A Verstile Company</h1>
               <p className='firstTextContain'>
                    Graphix provides web and mobile applications for all business sizes. 
                    Because we understand the benefits of frugality, 
                    we focus our effort on finding solutions that are affordable, secure, and efficient.
               </p>
               <div className='divServicesHome'>
                   <div className='divServiceHome'>
                       <div className='divServiceIcon'>
                            <img src={serviceImgsOne} alt='Image' className='serviceIcon' />
                       </div>
                        <h3 className='serviceHomeTitle'>Fullstack Developpment</h3>
                        <p className='serviceHomeText'>
                            Our developers are experts in many development languages and we work tirelessly to stay up to date...
                        </p>
                   </div>
                   <div className='divServiceHome'>
                        <div className='divServiceIcon'>
                            <img src={serviceImgsTwo} alt='Image' className='serviceIconAlt' />
                       </div>
                        <h3 className='serviceHomeTitle'>Mobile Developpment</h3>
                        <p className='serviceHomeText'>
                            Most websites in today’s world need a mobile application to go along with them. Our team specializes...
                        </p>
                   </div>
                   <div className='divServiceHome'>
                        <div className='divServiceIcon'>
                            <img src={serviceImgsThree} alt='Image' className='serviceIconDesign' />
                       </div>
                        <h3 className='serviceHomeTitle'>Visual Design</h3>
                        <p className='serviceHomeText'>
                            Many sites suffer from poor performance. We work with you to improve key areas of your web or mobile...
                        </p>
                   </div>
               </div>
               <div className='moreAboutHome'>
                <a href="/service" className='moreLinkHome'>
                        View all services
                </a>
               </div>
           </div>
           
           <div className='firstTextHomes'>
               <h1 className='firstTextTitles'>Contact Us</h1>
               <div className='moreAboutHomes'>
                    <a href="/contact" className='moreLinkHomes'>
                            Let's Get Started
                    </a>
               </div>
           </div>
            
        </div>
    )
}
