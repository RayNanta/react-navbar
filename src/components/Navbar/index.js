import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to ="/">
                <h1>Projectmu.id</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to='/tentang' activeStyle>
                    Tentang
                </NavLink>
                <NavLink to="/produk" activeStyle>
                    Produk
                </NavLink>
                <NavLink to="/portofolio" activeStyle>
                    Portofolio
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
        </Nav>
    </>
  )
}

export default Navbar;