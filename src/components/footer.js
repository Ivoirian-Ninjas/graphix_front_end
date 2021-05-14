import React from 'react'
import '../css/footer.css'
import logoFooter from '../imgs/logo/logGraph 2.png'
import '../framework/fontawesome-free-5.11.2-web/css/all.css'
import ReactGA from 'react-ga';

export default function Footer() {
    return (
        <div className='divFooter'>
            <h1 className='copyrightGraphix'> Copyright 2021 Graphix LLC</h1>
            <div className='divLogoFooter'>
                <a href="/"><img src={logoFooter} alt='logo footer' className='imgFooter' /></a>
            </div>
            <div className='divIconFooter'>
                <ReactGA.OutboundLink eventLabel="FacebookLogo" to="https://www.facebook.com/graphixck" target="_blank">
                    <i className='fab fa-facebook-square iconFoot'></i>
                </ReactGA.OutboundLink>
                <ReactGA.OutboundLink eventLabel="InstaLogo" to="https://www.instagram.com/graphix_ck/" target="_blank">
                <i className='fab fa-instagram iconFoot'></i>
                </ReactGA.OutboundLink>
                <ReactGA.OutboundLink eventLabel="EmailLogo" to="mailto:info@graphix-ck.com" target="_blank">
                    <i className='fa fa-envelope-square iconFoot'></i>
                </ReactGA.OutboundLink>
                
            </div>
        </div>
    )
}
