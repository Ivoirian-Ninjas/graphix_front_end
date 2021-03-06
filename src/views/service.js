import React ,{  useEffect } from 'react'
import {Helmet} from 'react-helmet'
import ReactGA from 'react-ga';
import '../css/services.css'
import ImageTop from '../imgs/imageWebsite/pexels-pixabay-270557.jpg'
import FullsImage from '../imgs/illustrationImage/4380747.jpg'
import MobileImage from '../imgs/illustrationImage/2809413.jpg'
import AppImage from '../imgs/illustrationImage/4471284.jpg'
import VisualImage from '../imgs/illustrationImage/19199208.jpg'
import reactImg from '../imgs/iconImage/iq9r5pa6fmb2n5rfcvq4.png'
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
                <p className='textInsideTopServices' data-aos="fade-left"> 
                    {/* Change the text below*/}
                    <b className='titleInsideTopServices'>Our Services</b> <br />
                    {/* Chqnge the text below*/}
                    Our team builds web and mobile applications for many industries. 
                    We work tirelessly to stay up to date with the latest technologies 
                    and industry standards. Hence, our team focuses on frugality, 
                    which allows us to develop solutions at an affordable price.
                </p>       
            </div>
            <div className='divServicesList'>
              <h1 className='titleElementServices' data-aos="fade-up">How we can help your business grow.</h1>
              <div className='divServicesContain' id="fullstack-development">
                  <div className='divServicesText'>
                    <h3 className='serviceListTitle' data-aos='fade-right' data-aos-delay='300'>Web Development</h3>
                    <p className='serviceListInfo' data-aos='fade-right' data-aos-delay='400'>
                        Our developers are experts in many development languages and we work tirelessly to stay 
                        up to date with the latest industry standards and practices.
                    </p>
                  </div>
                  <div className='divServicesImage' data-aos='fade-right'>
                        <img src={FullsImage} alt='FullStack image' className='ImageElementServices' />
                  </div>
              </div>
              <div className='divServicesContain' id="mobile-development">
                    <div className='divServicesImage' data-aos='fade-left'>
                        <img src={MobileImage} alt='FullStack image' className='ImageElementServices' />
                    </div>
                    <div className='divServicesText'>
                        <h3 className='serviceListTitle' data-aos='fade-left' data-aos-delay='300'>Mobile Development</h3>
                        <p className='serviceListInfo' data-aos='fade-left' data-aos-delay='400'>
                            Most websites in today???s world need a mobile application to go along with them. Our 
                            team specializes in creating both native phone applications and responsive websites.
                        </p>
                    </div>
              </div>
              <div className='divServicesContain' id="app-optimization">
                  <div className='divServicesText'>
                    <h3 className='serviceListTitle' data-aos='fade-right' data-aos-delay='300'>App Optimization</h3>
                    <p className='serviceListInfo' data-aos='fade-right' data-aos-delay='400'>
                        Many sites suffer from poor performance.
                        We work with you to improve key areas of your 
                        web or mobile application to increase performance, stability, and reliability.
                    </p>
                  </div>
                  <div className='divServicesImage' data-aos='fade-right'>
                        <img src={AppImage} alt='FullStack image' className='ImageElementServices' />
                  </div>
              </div>
              <div className='divServicesContain'>
                    <div className='divServicesImage' data-aos='fade-left'>
                        <img src={VisualImage} alt='FullStack image' className='ImageElementServices' />
                    </div>
                    <div className='divServicesText' id="visual-design">
                        <h3 className='serviceListTitle' data-aos='fade-left' data-aos-delay='300'>Visual Design</h3>
                        <p className='serviceListInfo' data-aos='fade-left' data-aos-delay='400'>
                            Most functional websites could use a facelift. 
                            Our design team will work with you to bring your site to the current standards while 
                            maximizing profits and giving your users the best experience possible.
                        </p>
                    </div>
              </div>

            </div>

            <div className='divServicesList'>
              <h1 className='titleElementServices' data-aos='fade-up'>Technologies</h1>
              {/* Brief summary of the technologies used */}
              <p className='firstTextContain' data-aos='fade-up'>
                The services we provide to our clients are tailored to their specific needs.
                However, we have a wide range of tools that we use to give our clients the best experience possible.
                Don???t see what you want here? Contact us and learn more about our technologies
              </p>
                <div className='divLangages'>
                    <div className='divLanguageInfo'>
                        <div className='divLanguageImage' data-aos='fade-left'>
                            <img src={reactImg} alt='' className='imageLangage' />
                        </div>
                        <h3 className='langagesName' data-aos='fade-left' data-aos-delay='100'>ReactJS</h3>
                    </div>

                    <div className='divLanguageInfo'>
                        <div className='divLanguageImage' data-aos='fade-left' data-aos-delay='200'>
                            <img src={nodeImg} alt='' className='imageLangage' />
                        </div>
                        <h3 className='langagesName' data-aos='fade-left' data-aos-delay='300'>NodeJs</h3>
                    </div>

                    <div className='divLanguageInfo'>
                        <div className='divLanguageImage' data-aos='fade-left' data-aos-delay='400'>
                            <img src={rubyImg} alt='' className='imageLangage' />
                        </div>
                        <h3 className='langagesName' data-aos='fade-left' data-aos-delay='500'>Ruby</h3>
                    </div>

                    <div className='divLanguageInfo'>
                        <div className='divLanguageImage' data-aos='fade-left' data-aos-delay='600'>
                            <img src={phpImg} alt='' className='imageLangage' />
                        </div>
                        <h3 className='langagesName' data-aos='fade-left' data-aos-delay='700'>PHP</h3>
                    </div>
                </div>
                <div className='divLangages'>
                <div className='divLanguageInfo'>
                        <div className='divLanguageImage' data-aos='fade-left'>
                            <img src={htmlImg} alt='' className='imageLangage' />
                        </div>
                        <h3 className='langagesName' data-aos='fade-left' data-aos-delay='100'>HTML</h3>
                    </div>

                    <div className='divLanguageInfo'>
                        <div className='divLanguageImage' data-aos='fade-left' data-aos-delay='200'>
                            <img src={cssImg} alt='' className='imageLangage' />
                        </div>
                        <h3 className='langagesName' data-aos='fade-left' data-aos-delay='300'>CSS</h3>
                    </div>

                    <div className='divLanguageInfo'>
                        <div className='divLanguageImage' data-aos='fade-left' data-aos-delay='400'>
                            <img src={iOSImg} alt='' className='imageLangage' />
                        </div>
                        <h3 className='langagesName' data-aos='fade-left' data-aos-delay='500'>iOS</h3>
                    </div>

                    <div className='divLanguageInfo'>
                        <div className='divLanguageImage' data-aos='fade-left' data-aos-delay='600'>
                            <img src={androidImg} alt='' className='imageLangage' />
                        </div>
                        <h3 className='langagesName' data-aos='fade-left' data-aos-delay='700'>Android</h3>
                    </div>
              </div>

            </div>

            <div className='firstTextAbout'>
                <h1 className='titleElementServices' data-aos='fade-up'>Still unsure or have more questions?</h1>
                <p className='firstTextContain' data-aos='fade-up'>
                    Reach out to us and we can answer your questions personally. Also, we understand if you want to see our previous work. 
                    Our team will be thrilled to showcase its knowledge.
                </p>
                <div className='moreAboutHomes'>
                    <a href="/contact" className='moreLinkHomes'>
                            Contact Us
                    </a>
               </div>
            </div>

        </div>
    )
}
