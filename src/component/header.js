import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => {
    return (
        <div className="tm-site-header">
            <div className="row">
                <div className="col-12 tm-site-header-col">
                    <div className="tm-site-header-left">
                        <i className="far fa-2x fa-eye tm-site-icon"></i>
                        <h1 className="tm-site-name">New Vision</h1>
                    </div>

                    
                    <div className="tm-site-header-right tm-menu-container-outer">
                        <nav className="navbar navbar-expand-lg">
                            <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
                                aria-controls="navbarSupportedContent1" aria-expanded="false;" aria-label="Toggle navigation"><span className="dark-blue-text"><i
                                    className="fas fa-bars fa-1x"></i></span></button>
                            
                            
                            <div className="collapse navbar-collapse tm-nav" id="navbarSupportedContent1">
                                
                                <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink exact activeClassName="active" className="nav-link tm-nav-link" to="/">Home</NavLink>
                                    {/* <a className="nav-link tm-nav-link" href="/">Home <span className="sr-only">(current)</span></a> */}
                                </li>
                                <li className="nav-item">
                                
                                    <a className="nav-link tm-nav-link" href="/company">Our Company</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link tm-nav-link" href="/services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName="active" className="nav-link tm-nav-link" to="/contact">Contact</NavLink>
                                    {/* <a className="nav-link tm-nav-link" href="/contact">Contact</a> */}
                                </li>
                                </ul>
                            
                            </div>
                        </nav>

                        

                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default Header;