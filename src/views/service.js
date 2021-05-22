import React ,{  useEffect } from 'react'
import {Helmet} from 'react-helmet'
import ReactGA from 'react-ga';
import '../css/services.css'
import ImageTop from '../imgs/imageWebsite/pexels-fauxels-3184460.jpg'
import FullsImage from '../imgs/illustrationImage/4380747.jpg'
import MobileImage from '../imgs/illustrationImage/2809413.jpg'
import AppImage from '../imgs/illustrationImage/4471284.jpg'
import VisualImage from '../imgs/illustrationImage/19199208.jpg'
import reactImg from '../imgs/iconImage/iq9r5pa6fmb2n5rfcvq4.jpeg'
import nodeImg from '../imgs/iconImage/nodejs.png'
import rubyImg from '../imgs/iconImage/ruby-on-rail-computer-programming-programming-language-png-favpng-kU90nCGWwbLM2zM1CQHquguLC.png'
import phpImg from '../imgs/iconImage/php_PNG10.png'
import htmlImg from '../imgs/iconImage/html5-3384014_1280.png'
import cssImg from '../imgs/iconImage/css.png'
import iOSImg from '../imgs/iconImage/ios-logo.png'
import androidImg from '../imgs/iconImage/5c4406f679dc69b549b48fa6_p17s2tfgc31jte13d51pea1l2oblr3.png'
export default function Service() {

    useEffect(() => {
        const id = process.env.REACT_APP_GOOGLE_ID
        ReactGA.initialize(id);
        ReactGA.set({ page: window.location.pathname }); // Update the user's current page
       ReactGA.pageview(window.location.pathname); // Record a pageview for the given page
      });
    return (
        <div className='homeDiv'>
            {/* Do not modify the code shown in Helmet. This is for the backend */}
            <Helmet>
                <title>Graphix CK Services Page Develop Web And Mobile Solutions At An Affordable Price</title>
                <meta name="description" content="At Graphix, the services we provide to our clients are tailored to their specific needs. However, we have a wide range of tools that we use to give our clients the best experience possible." />
            </Helmet>
            <div className='divImgTopServices'>
                <img src={ImageTop} alt='Images' className='imageTopServices'/>
                <div className='coverTopServices'></div>    
                <p className='textInsideTopServices'> 
                    {/* Change the text below*/}
                    <b className='titleInsideTopServices'>Our Services</b> <br />
                    {/* Chqnge the text below*/}
                    At Graphix, we are genuinely happy and excited to bring our values to life every day. 
                    Following these values allow us to be the best at what we do. Every client has their own 
                    problem to solve, and we want to help by providing a seamless experience with Integrity. 
                    Want to learn more? Scroll down to find out more about our core values and our process.
                </p>       
            </div>
            <div className='divServicesList'>
              <h1 className='titleElementServices'>How can we help your business grow</h1>
              <div className='divServicesContain'>
                  <div className='divServicesText'>
                    <h3 className='serviceListTitle'>Fullstack Development</h3>
                    <p className='serviceListInfo'>
                        Our developers are experts in many development languages and we work tirelessly to stay 
                        up to date with the latest industry standards and practices.
                    </p>
                  </div>
                  <div className='divServicesImage'>
                        <img src={FullsImage} alt='FullStack image' className='ImageElementServices' />
                  </div>
              </div>
              <div className='divServicesContain'>
                    <div className='divServicesImage'>
                        <img src={MobileImage} alt='FullStack image' className='ImageElementServices' />
                    </div>
                    <div className='divServicesText'>
                        <h3 className='serviceListTitle'>Mobile Development</h3>
                        <p className='serviceListInfo'>
                            Most websites in today’s world need a mobile application to go along with them. Our 
                            team specializes in creating both native phone applications and responsive websites.
                        </p>
                    </div>
              </div>
              <div className='divServicesContain'>
                  <div className='divServicesText'>
                    <h3 className='serviceListTitle'>App Optimization</h3>
                    <p className='serviceListInfo'>
                        Many sites suffer from poor performance. We work with you to improve key areas of your 
                        web or mobile application to increase performance, stability, and reliability.
                    </p>
                  </div>
                  <div className='divServicesImage'>
                        <img src={AppImage} alt='FullStack image' className='ImageElementServices' />
                  </div>
              </div>
              <div className='divServicesContain'>
                    <div className='divServicesImage'>
                        <img src={VisualImage} alt='FullStack image' className='ImageElementServices' />
                    </div>
                    <div className='divServicesText'>
                        <h3 className='serviceListTitle'>Visual Design</h3>
                        <p className='serviceListInfo'>
                            Most functional websites could use a facelift. 
                            Our design team will work with you to bring your site to the current standards while 
                            maximizing profits and giving your users the best experience possible.
                        </p>
                    </div>
              </div>

            </div>

            <div className='divServicesList'>
              <h1 className='titleElementServices'>Technologies</h1>
              {/* Brief summary of the technologies used */}
              <p className='firstTextContain'>
                The services we provide to our clients are tailored to their specific needs.
                However, we have a wide range of tools that we use to give our clients the best experience possible.
                Don’t see what you want here? Contact us and learn more about our technologies
              </p>
                <div className='divLangages'>
                    <div className='divLanguageInfo'>
                        <div className='divLanguageImage'>
                            <img src={reactImg} alt='' className='imageLangage' />
                        </div>
                        <h3 className='langagesName'>ReactJS</h3>
                    </div>

                    <div className='divLanguageInfo'>
                        <div className='divLanguageImage'>
                            <img src={nodeImg} alt='' className='imageLangage' />
                        </div>
                        <h3 className='langagesName'>NodeJs</h3>
                    </div>

                    <div className='divLanguageInfo'>
                        <div className='divLanguageImage'>
                            <img src={rubyImg} alt='' className='imageLangage' />
                        </div>
                        <h3 className='langagesName'>Ruby</h3>
                    </div>

                    <div className='divLanguageInfo'>
                        <div className='divLanguageImage'>
                            <img src={phpImg} alt='' className='imageLangage' />
                        </div>
                        <h3 className='langagesName'>PHP</h3>
                    </div>
                </div>
                <div className='divLangages'>
                <div className='divLanguageInfo'>
                        <div className='divLanguageImage'>
                            <img src={htmlImg} alt='' className='imageLangage' />
                        </div>
                        <h3 className='langagesName'>HTML</h3>
                    </div>

                    <div className='divLanguageInfo'>
                        <div className='divLanguageImage'>
                            <img src={cssImg} alt='' className='imageLangage' />
                        </div>
                        <h3 className='langagesName'>CSS</h3>
                    </div>

                    <div className='divLanguageInfo'>
                        <div className='divLanguageImage'>
                            <img src={iOSImg} alt='' className='imageLangage' />
                        </div>
                        <h3 className='langagesName'>iOS</h3>
                    </div>

                    <div className='divLanguageInfo'>
                        <div className='divLanguageImage'>
                            <img src={androidImg} alt='' className='imageLangage' />
                        </div>
                        <h3 className='langagesName'>Android</h3>
                    </div>
              </div>

            </div>

            <div className='firstTextAbout'>
                <h1 className='titleElementServices'>Stil unsure or have more quetions?</h1>
                <p className='firstTextContain'>
                    Reach out to us and we can answer your questions personally. Also, we understand if you want to see our previous work. <br/>
                    Our team will be thrilled to showcase its knowledge.
                </p>
                <div className='moreAboutHomes'>
                    <a href="/contact" className='moreLinkHomes'>
                            Let's Get Started
                    </a>
               </div>
            </div>

        </div>
    )
}
