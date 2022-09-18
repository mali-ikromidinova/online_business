import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavLinks, NavItem, NavItemBtn, NavBtnLink } from './NavbarElements';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { useState, useEffect } from 'react';

const Nabvar = () => {
    
    const [ click, setClick ] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const [button, setButton] = useState(true); 
    const showButton = () => {
        if (window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    }
    
    useEffect( () => {
        showButton();
    }, []);
    
    window.addEventListener('resize', showButton);
    
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
           <Nav>
                <NavbarContainer>
                    <NavLogo to="/" handleClick={closeMobileMenu} >
                        <NavIcon />
                        ULTRA    
                    </NavLogo> 
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to="/">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/products">Products</NavLinks>
                        </NavItem>
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to="/sign-up">
                                    <Button primary>SIGN UP</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to="/sign-up">
                                    <Button  primary fontBig>SIGN UP</Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>  
            </Nav> 
            </IconContext.Provider>
        </>
    );
}
 
export default Nabvar;