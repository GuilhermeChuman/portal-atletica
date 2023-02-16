import React, { useState, useRef, useEffect } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'
import { IconContext } from 'react-icons';

import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
//import * as IoIcons from 'react-icons/io';
//import * as FaIcons from 'react-icons/fa';

import logo from '../../assets/Logo.png';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Navbar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const Logout = () => {
        alert("Logout");
    }

    //TextField Customizado
    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: 'white',
        },
        '& label': {
            color: 'white'
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
    });
        
    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className={styles.navbar}>
                <div className={styles.toggleOptions}>
                    <Link to='#' className={styles.menuBars}>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <div className={styles.header}>
                        <Link to='/pages/home' className={styles.title}>
                            <img src={logo} className={styles.title} alt=''/>
                        </Link>
                    </div> 
                </div>
                <div className={styles.profile}>
                    
                    <div className={[styles.LineLogin]}>
                        <CssTextField
                        className={[styles.TextLogin]}
                        color='info'
                        id="outlined-required"
                        label="Buscar"/>
                    </div>
                    
                </div>
            </div>
            <nav className={sidebar ? styles.navMenuActive : styles.navMenu}>

                <Sidebar>
                <Menu>
                    <SubMenu label="Charts">
                    <MenuItem> 
                        <Link to='/pages/home'>
                            <AiIcons.AiFillHome />
                            <span>Home</span>
                        </Link>
                    </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                    </SubMenu>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> 
                        <a onClick={Logout}>
                            <RiIcons.RiLogoutBoxRLine />
                            <span>Sair</span>
                        </a>
                    </MenuItem>
                </Menu>
                </Sidebar>

            </nav>
        </IconContext.Provider>
    </>
    );
}

export default Navbar;