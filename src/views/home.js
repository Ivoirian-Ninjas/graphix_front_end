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
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br/>
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br/>
                    It has survived not only five centuries, but also the leap into electronic
                </p>
            </div>

            {/*Choose 3 values/qualities that the company stands by.  */}
            <div>

                <div>
                    {/* First value */}
                    <p>
                        <b>Customer Centric</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br/>
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br/>
                        It has survived not only five centuries, but also the leap into electronic
                    </p>
                    <div>
                        {/* Add some images. */}
                    </div>
                </div>
                <div>
                    {/* Second value */}
                    <p>
                        <b>Quality</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br/>
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br/>
                        It has survived not only five centuries, but also the leap into electronic
                    </p>
                    <div>
                        {/* Add some images. */}
                    </div>
                </div>
                <div>
                    {/* Third value */}
                    <p>
                        <b>Affordable</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br/>
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br/>
                        It has survived not only five centuries, but also the leap into electronic
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
           
            
        </div>
    )
}
