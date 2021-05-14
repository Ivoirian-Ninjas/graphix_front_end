import React from 'react'
import '../css/footer.css'
import logoFooter from '../imgs/logo/logGraph 2.png'
import '../framework/fontawesome-free-5.11.2-web/css/all.css'
export default function Footer() {
    return (
        <div className='divFooter'>
            <h1 className='copyrightGraphix'> Copyright 2021 Graohix LLC</h1>
            <div className='divLogoFooter'>
                <a href="/"><img src={logoFooter} alt='logo footer' className='imgFooter' /></a>
            </div>
            <div className='divIconFooter'>
                <a href="https://www.facebook.com/graphixck" className="iconFoot" target="blank"><i className='fab fa-facebook-square'></i></a>
                <a href="https://www.instagram.com/graphix_ck/" className="iconFoot" target="blank"><i className='fab fa-instagram'></i></a>
                <a href="mailto:info@graphix-ck.com" className="iconFoot" target="blank"><i className='fa fa-envelope-square'></i></a>
            </div>
        </div>
    )
}
