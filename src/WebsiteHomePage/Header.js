import React, { useEffect } from 'react';
import '../WebsiteHomePage/Header.css';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const history = useNavigate();
    useEffect(() => {
        $(document).ready(function() {
            $('.toggle-nav').click(function(e) {
                $(this).toggleClass('active');
                $('.menu ul').toggleClass('active');

                e.preventDefault();
            });
        });
    }, []);

    return (
        <header>
            <nav className="menu">
                <a className="block" href="https://gun.io/">
                    <img className="h-12 md:h-14 lg:h-[70px] w-auto" src="https://gun.io/wp-content/uploads/2023/07/gunio-logo-text-alpha.png" alt="Expert.io" height="70" width="200" />
                </a>
                
                <ul className="active">
                    <li><a href="./Header">How it Works</a></li>
                    <li><a href="./Header">Blog</a></li>
                    <li><a href="./Header">About Us</a></li>
                    <li><a href="./Header">Find Expert</a></li>
                </ul>
                <div className="menu-buttons">
                    <button className="btn-outline" onClick={() => history('/expert-signin')}>Sign In</button>
                    <button className="btn-solid" onClick={() => history('/get-started')}>Get Started</button>
                </div>
                <a className="toggle-nav" href="./Header#">&#9776;</a>

            </nav>
        </header>
    );
};

export default Header;
