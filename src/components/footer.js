import React from 'react'
import '../css/footer.css'
import logoFooter from '../imgs/logo/logGraph 2.png'
import '../framework/fontawesome-free-5.11.2-web/css/all.css'
export default function Footer() {
    return (
        <div className='divFooter'>
            <h1 className='copyrightGraphix'> Copyright 2021 Graohix LLC</h1>
            <div className='divLogoFooter'>
                <img src={logoFooter} alt='logo footer' className='imgFooter' />
            </div>
            <div className='divIconFooter'>
                <i className='fab fa-facebook-square iconFoot'></i>
                <i className='fab fa-instagram iconFoot'></i>
                <i className='fa fa-envelope-square iconFoot'></i>
            </div>
        </div>
    )
}
