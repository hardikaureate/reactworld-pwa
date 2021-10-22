import React, { useEffect, useState, useContext } from 'react'
import { Icon, Box, Badge } from '@chakra-ui/react'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { MdShoppingCart } from 'react-icons/md'

const Header = () => {
    const width = window.innerWidth
    //console.log(width)
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const timeout = setTimeout(() => {
            const date = new Date()
            setTime(date.toLocaleTimeString('en-US', { hour12: true }));
        }, 1000);
    }, [time]);
    const { openCart, openMenu, checkout } = useContext(ShopContext)
    return (
        <>
            <div id="wrapper" className="mainHeaderId">
                {/* <header id="header" className="alt header">
                    <div className="sitelogo"><Link to="/" className="logo"><strong>HD</strong> <span>by REACT</span></Link>{time}</div>
                    <div className="miniheader">
                        <input className="menu-btn" type="checkbox" id="menu-btn" />
                        <label classname="menu-icon" for="menu-btn"><span className="navicon"></span></label>
                        <ul className="menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><Link to="/post">Blog</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            {width < 767 ?
                                <li><Box><Icon className="cartIcon" onClick={() => openCart()} fill="#fff" cursor="pointer" as={MdShoppingCart} w={30} h={30}></Icon>
                                    <Badge backgroundColor="#f3eafd" borderRadius="50%" className="cartQuan">{checkout.lineItems?.length}</Badge></Box>
                                </li>
                            :
                                <li><Box><Icon onClick={() => openCart()} fill="#fff" cursor="pointer" as={MdShoppingCart} w={30} h={30}></Icon>
                                    <Badge backgroundColor="#f3eafd" borderRadius="50%" className="cartQuan">{checkout.lineItems?.length}</Badge></Box>
                                </li>
                            }
                        </ul>
                    </div>
                </header> */}
                <header id="header" className="header alt">
                    <div className="sitelogo"><Link to="/" className="logo"><strong>HD</strong> <span>by REACT</span></Link>{time}</div>
                    <div className="miniheader">
                        <input className="menu-btn" type="checkbox" id="menu-btn" />
                        <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
                        <ul className="menu">
                            <li><Link to="/">Home</Link></li>
                            <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
                            <li><NavLink activeClassName="active" to="/portfolio">Portfolio</NavLink></li>
                            <li><NavLink activeClassName="active" to="/shop">Shop</NavLink></li>
                            <li><NavLink activeClassName="active" to="/post">Blog</NavLink></li>
                            <li><NavLink activeClassName="active" to="/doc">WebPath</NavLink></li>
                            <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
                            {width < 767 ?
                                <li><Box className="mobilecarticon"><Icon className="cartIcon" onClick={() => openCart()} fill="#fff" cursor="pointer" as={MdShoppingCart} w={30} h={30}></Icon>
                                    <Badge backgroundColor="#f3eafd" borderRadius="50%" className="cartQuan">{checkout.lineItems?.length}</Badge></Box>
                                </li>
                                :
                                <li><Box><Icon onClick={() => openCart()} fill="#fff" cursor="pointer" as={MdShoppingCart} w={30} h={30}></Icon>
                                    <Badge backgroundColor="#f3eafd" borderRadius="50%" className="cartQuan">{checkout.lineItems?.length}</Badge></Box>
                                </li>
                            }
                        </ul>
                    </div>
                </header>
            </div></>
    )
}

export default Header
