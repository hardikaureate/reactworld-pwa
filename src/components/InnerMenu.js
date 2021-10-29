import React from 'react';
import { Link } from 'react-router-dom'
import HomeTextBanner from './HomeTextBanner'
import ReactTooltip from "react-tooltip";

const InnerMenu = () => {

    return (
        <div>
            <div id="main" className="homeInnerPart">

                {/* <!-- One --> */}
                <section id="one" className="tiles">
                    <article>
                        <span className="image">
                            <img src="images/pic01.jpg" alt="img" />
                        </span>
                        <header className="major">
                            <h3><Link to="/portfolio" className="link animate__animated animate__fadeInUp">Customer First Experience</Link></h3>
                            <p className="animate__animated animate__slideInDown">e-Invoicing automates several business functions and improves processes like procurements, Invoicing, etc. at business levels.</p>
                            <ul className="actions">
                                <li><Link to="/contact" data-tip="Go to Contact" className="button next animate__zoomIn animate__animated">Talk to us</Link></li>
                                <ReactTooltip globalEventOff="click" />
                            </ul>
                        </header>
                    </article>
                    <article>
                        <span className="image">
                            <img src="images/pic02.jpg" alt="img" />
                        </span>
                        <header className="major">
                            <h3><Link to="/portfolio" className="link animate__animated animate__fadeInUp">Agile product development lifecycle</Link></h3>
                            <p className="animate__animated animate__slideInDown">Achieve product excellence and maximize profitability with agile-driven product engineering.</p>
                            <ul className="actions">
                                <li><Link to="/contact" data-tip="Go to Contact" className="button next animate__zoomIn animate__animated">Talk to us</Link></li>
                                <ReactTooltip globalEventOff="click" />
                            </ul>
                        </header>
                    </article>
                    <article>
                        <span className="image">
                            <img src="images/pic03.jpg" alt="img" />
                        </span>
                        <header className="major">
                            <h3><Link to="/portfolio" className="link animate__animated animate__fadeInUp">Agility and speed</Link></h3>
                            <p className="animate__animated animate__slideInDown">We believe in the world of eCommerce "speed" defines the winner.</p>
                            <ul className="actions">
                                <li><Link to="/contact" data-tip="Go to Contact" className="button next animate__zoomIn animate__animated">Talk to us</Link></li>
                                <ReactTooltip globalEventOff="click" />
                            </ul>
                        </header>
                    </article>
                    <article>
                        <span className="image">
                            <img src="images/pic04.jpg" alt="img" />
                        </span>
                        <header className="major">
                            <h3><Link to="/portfolio" className="link animate__animated animate__fadeInUp">RPA Bots automated repetitive operations for a pharmaceutical giant</Link></h3>
                            <p className="animate__animated animate__slideInDown">Our RPA solution helped a pharmaceutical giant to automate the manual efforts of determining the distance between two pin-codes from an invoice for GST tax filing purposes.</p>
                            <ul className="actions">
                                <li><Link to="/contact" data-tip="Go to Contact" className="button next animate__zoomIn animate__animated">Talk to us</Link></li>
                                <ReactTooltip globalEventOff="click" />
                            </ul>
                        </header>
                    </article>
                    <article>
                        <span className="image">
                            <img src="images/pic05.jpg" alt="img" />
                        </span>
                        <header className="major">
                            <h3><Link to="/portfolio" className="link animate__animated animate__fadeInUp">eCommerce agency</Link></h3>
                            <p className="animate__animated animate__slideInDown">We build customer-first digital commerce experience for international brands</p>
                            <ul className="actions">
                                <li><Link to="/contact" data-tip="Go to Contact" className="button next animate__zoomIn animate__animated">Talk to us</Link></li>
                                <ReactTooltip globalEventOff="click" />
                            </ul>
                        </header>
                    </article>
                    <article>
                        <span className="image">
                            <img src="images/pic06.jpg" alt="img" />
                        </span>
                        <header className="major">
                            <h3><Link to="/portfolio" className="link animate__animated animate__fadeInUp">Prototyping and ideation</Link></h3>
                            <p className="animate__animated animate__slideInDown">Develop Minimum Viable Product (MVP) versions of software using pre-built components which can be scaled up to create a fully developed version.</p>
                            <ul className="actions">
                                <li><Link to="/contact" data-tip="Go to Contact" className="button next animate__zoomIn animate__animated">Talk to us</Link></li>
                                <ReactTooltip globalEventOff="click" />
                            </ul>
                        </header>
                    </article>
                </section>
                
                {/* <!-- Two --> */}
                <HomeTextBanner />

            </div>
        </div>
    )
}

export default InnerMenu
