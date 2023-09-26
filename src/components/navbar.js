import React from "react"
import { Link } from "gatsby"
import * as styles from "./navbar.module.css"
import PowellsWindowCleaning from "../images/PowellsWindowCleaning.svg" 

const menuData = [
    { title: 'Home', link: '/'},
    { title: 'Services', link: '/services'},
    { title: 'About', link: '/about' },
    { title: 'Contact', link: '/contact' }
];

const MenuItem = props => (
    <li className={ styles.navbar }> 
        <Link style={{ padding: '0.8rem', 
            textDecoration: 'none',
            color: 'black',
            textTransform: 'uppercase',
            fontWeight: 'bold' }} to={props.link}>{props.title}</Link>
    </li>
)

const NavBar = () => {
    return (
        <ul className="items-center">
            {menuData.map(item => ( <MenuItem key={item.title} title={item.title} link={item.link} /> ))}
        </ul>
    )
}

export default NavBar;
