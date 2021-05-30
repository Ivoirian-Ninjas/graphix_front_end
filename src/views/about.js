import React, { Suspense, lazy,Component } from 'react';
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
// import Map from "../components/map";
import "../css/about.css";
import imageTop from "../imgs/imageWebsite/shahadat-rahman-BfrQnKBulYQ-unsplash.jpg";
import Img1stQ from "../imgs/imageWebsite/xps-6uneKLGrJPs-unsplash.jpg";
import Img2ndQ from "../imgs/imageWebsite/pexels-athena-2582937.jpg";
import Img3rdQ from "../imgs/imageWebsite/pexels-aleksandar-pasaric-2603464.jpg";
import Jean from "../imgs/imageMember/Jean.jpg";
import Loic from "../imgs/imageMember/Loic2.jpg";

const Map = lazy(()=> import("../components/map"))
export default class About extends Component {
  options = [
    { value: "$0 - $5,000", label: "$0 - $5,000" },
    { value: "$5,000 - $10,000", label: "$5,000 - $10,000" },
    { value: "$10,000 - $15,000", label: "$10,000 - $15,000" },
    { value: "$15,000 +", label: "$15,000 +" },
  ];
  componentDidMount() {
    const id = process.env.REACT_APP_GOOGLE_ID;
    ReactGA.initialize(id);
    ReactGA.set({ page: window.location.pathname }); // Update the user's current page
    ReactGA.pageview(window.location.pathname); // Record a pageview for the given page
  }

  render() {
    return (
      <div className="homeDiv">
        {/* Do not modify the code shown in Helmet. This is for the backend */}
        <Helmet>
          <title>
            Graphix CK About Page Based In The USA And Ivory Coast (Côte
            D'Ivoire)
          </title>
          <meta
            name="description"
            content="Graphix is based in the USA and Ivory Coast. You guessed it, we also speak French."
          />
        </Helmet>
        <div className="divImgTopAbout">
          <img src={imageTop} alt="Images" className="imageTop" />
          <div className="coverTopAbout"></div>
          <p className="textInsideTop" data-aos="fade-left" data-aos-duration='1000'>
            {/* Change the text below*/}
            <b className="titleInsideTopAbout">Who We Are</b> <br />
            Frugality, Quality, and Thinking Big are our core values. 
            Hence, those values represent the foundation of Graphix. 
            Following these values, allows us to start with the customer and work backward. 
          </p>
        </div>
        <div className="divQualitiesListAbout">
          <div className="div1stQualityAbout" data-aos="fade-left">
            <div className="divImageQualityAbout" >
              <img src={Img1stQ} className="imageQualitiesAbout" />
            </div>
            <div className="coverImgAbout"></div>
            <h2 className="divLegendQualityAbout">Frugality</h2>
          </div>

          <div className="div1stQualityAbout" data-aos="fade-left" data-aos-delay="200">
            <div className="divImageQualityAbout">
              <img src={Img2ndQ} className="imageQualitiesAbout" />
            </div>
            <div className="coverImgAbout"></div>
            <h2 className="divLegendQualityAbout">Quality</h2>
          </div>

          <div className="div1stQualityAbout" data-aos="fade-left" data-aos-delay="400">
            <div className="divImageQualityAbout">
              <img src={Img3rdQ} className="imageQualitiesAbout" />
            </div>
            <div className="coverImgAbout"></div>
            <h2 className="divLegendQualityAbout">Think big</h2>
          </div>
        </div>

        <div className="firstTextAbout">
          {/* A brief intro text to our values */}
          <p className="firstTextContain" data-aos="fade-up" data-aos-duration='1000'>
            Frugality, Quality, and Thinking Big are our core values. Hence,
            those values represent the foundation of Graphix. Following these
            values, allows us to start with the customer and work backward.
          </p>
        </div>

        <div className="firstTextAbout2">
          <div className="coverTopAbout2"></div>
          <div className="divContainWhy">
            <h1 className="firstTextTitleAbout2" data-aos="fade-up">Why we do exist</h1>

            <p className="firstTextContain2" data-aos="fade-up" data-aos-delay="200">
              With the recent pandemic that hit the world, more and more
              businesses started to realize that having an online presence is
              unavoidable. However, building a web or a mobile application is
              not an easy task. Also, the price of hiring a team of developers
              can seem exorbitant at times. It is in this scope that Graphix was
              born. Graphix is a small team of developers with the sole goal of
              helping businesses rise to the top. Because we put the customer
              first, Graphix provides web services at an affordable price.
            </p>
          </div>
        </div>

        <div className="firstTextAbout">
          <h1 className="firstTextTitleAbout" data-aos="fade-up">Meet the team</h1>
        </div>
        <div className="divContainerMember">
          <div className="cardMember" data-aos="fade-left">
            <div className="contentMember">
              <div className="boxImageMember">
                <img src={Jean} alt="member one" className="imgMember" />
              </div>
              <div className="boxContentInfo">
                <h3>Michel N'GUESSAN</h3>
                <p>Front-End Developer</p>
              </div>
            </div>
            <ul className="ulSocial">
            
              <li className="liSocial">
                <a
                  href="https://www.instagram.com/im_qirxk/"
                  target="_blank"
                  className="aSocial"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="liSocial">
                <a
                  href="mailto:michelkonan00@gmail.com"
                  target="_blank"
                  className="aSocial"
                >
                  <i className="fa fa-envelope-square"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="cardMember" data-aos="fade-left" data-aos-delay="200">
            <div className="contentMember">
              <div className="boxImageMember">
                <img src={Loic} alt="member one" className="imgMember" />
              </div>
              <div className="boxContentInfo">
                <h3>Cloe Kouadjo</h3>
                <p>Back-End Developer</p>
              </div>
            </div>
            <ul className="ulSocial">
              <li className="liSocial">
                <a
                  href="https://www.linkedin.com/in/cloekouadjo/"
                  target="_blank"
                  className="aSocial"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li className="liSocial">
                <a
                  href="https://www.instagram.com/armel_ck"
                  target="_blank"
                  className="aSocial"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="liSocial">
    
                <a
                  href="mailto:cloekouadjo@gmail.com"
                  target="_blank"
                  className="aSocial"
                >
                  <i className="fa fa-envelope-square"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="firstTextAbout">
          <h1 className="firstTextTitleAbout" data-aos="fade-up">Based in USA and Ivory Coast</h1>
          <p className="firstTextContain" data-aos="fade-up" data-aos-delay="200">
          Graphix is based in the USA and Ivory Coast. 
          You guessed it, we also speak French. 
          In those two countries, our team allows us to work on projects and deliver our solutions with time efficiency.

          </p>
        </div>
        <div className="divMap">
        <Suspense fallback={<div></div>}>
            <Map/>
        </Suspense>
          
        </div>

        <div className="firstTextAbout">
          <h1 className="firstTextTitleAbout" data-aos="fade-up">
            Still unsure or have more questions?
          </h1>
          <p className="firstTextContain" data-aos="fade-up" data-aos-delay="200">
            Reach out to us and we can answer your questions personally. Also,
            we understand if you want to see our previous work. Our team will be
            thrilled to showcase its knowledge.
          </p>
          <div className="moreAboutHomes">
            <a href="/contact" className="moreLinkHomes">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    );
  }
}
