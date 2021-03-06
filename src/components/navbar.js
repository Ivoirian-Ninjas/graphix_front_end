import React, {useEffect} from 'react'
import '../css/navbar.css'
import {menuItems} from './menuItems'
import $ from 'jquery'
import logo from '../imgs/logo/graphixLogo.png';
const Navbar = () => {

    function navJs() {
            const burger = $(".burger");
            const nav = $(".nav-links");
            const navLinks = $(".nav-links li");
            
            burger.on("click", function(e) {
                //Toggle Nav
                nav.toggleClass("nav-active");
                //Burger Animation
                burger.toggleClass("toggle");
                
                //Animate Links
                navLinks.each(function(index) {
                    $(this).css({
                        'animation': `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
                    })
                    // if (link.style.animation) {
                    //     link.style.animation = ""
                    // } else {
                    //     link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                    // }
                });
                
            });
        }

  useEffect(() => {
    
    navJs();
    $(window).on('resize', function(){
      setTimeout(function(){ navJs(); }, 500);
    });
    
  }, []);

    return (
        <div>
            <nav>
                <a className="logo" href="/">
                    {/* <h4>Graphix</h4> */}
                    <img src={logo} alt="Logo" className='logoHeader'/>
                </a>
                <ul className="nav-links">
                    {menuItems.map((items, index)=>{
                        return(
                            <li key={index}>
                                <a className={items.cName} href={items.url}>
                                    {items.title}
                                </a>
                            </li>
                        )
                    })

                    }
                    <li className='li-nav-start'> <a href='/contact'>Let's Get Started</a> </li>
                </ul>
                <div className="burger" onClick={ function(){setTimeout(function(){ navJs(); });}}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar