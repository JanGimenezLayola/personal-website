import React, { useState } from 'react'
import { bubble as Menu } from 'react-burger-menu'

const NavBarComponent = () => {
    const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false)

    const handleBurgerMenu = (): void => {
        setBurgerMenuIsOpen(!burgerMenuIsOpen)
    }

    return (
        <div className="NavBar">
            {/* <a href="">Home</a>
            <a href="">About</a>
            <a href="">Resume</a>
            <a href="">Statistics</a>
            <a href="">Contact</a> */}
<div id="outer-container">

            <Menu 
                right 
                noOverlay
                outerContainerId={ "outer-container" }
                isOpen={burgerMenuIsOpen}
                onOpen={handleBurgerMenu}
                onClose={handleBurgerMenu}
                >
                <a className="menu-item" onClick={handleBurgerMenu} href="#">Home</a>
                <a className="menu-item" onClick={handleBurgerMenu} href="#about">About</a>
                <a className="menu-item" onClick={handleBurgerMenu} href="#resume">Resume</a>
                <a className="menu-item" onClick={handleBurgerMenu} href="#statistics">Statistics</a>
                <a className="menu-item" onClick={handleBurgerMenu} href="#contact">Contact</a>
                <div className="bm-footer">
                    FOOTER
                </div>
            </Menu>
                </div>
        </div>
        
    )
}



export default NavBarComponent
