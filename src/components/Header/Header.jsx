/**
 * Header
 * 
 */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import headerStyles from './Header.module.scss';
import navBarLogo from '/src/assets/rec.png';


function Header(props) {

        // Style for nav bar
        let navBarBackground = { 
                backgroundImage: "url(" + "/images/header.jpg" + ")"
        };

        /**
        * Get menu items
        * 
        * @returns []
        */
        function menu() {
                const menu = [];
                menu.push(
                        { name: "Home", link: "/" },
                        { name: "Demo", link: "/demo" },
                );

                return menu;
        }

        return (
               
                <Navbar expand="lg" className="bg-image text-light" style={navBarBackground}>
                        <Container className='m-0 p-0' >

                                <Navbar.Brand href="/" className={headerStyles.navBarBrand}>
                                        <img src={navBarLogo} className={headerStyles.logo}/>
                                        ReactJS Demo&nbsp; 
                                </Navbar.Brand>

                                <Navbar.Toggle aria-controls="basic-navbar-nav"  className={headerStyles.hamburger}/>

                                <Navbar.Collapse id="basic-navbar-nav" className={headerStyles.navBarCollapse}>
                                        <Nav className="me-auto">
                                                {
                                                        menu().map((MenuItem, index) => (
                                                                <Nav.Link 
                                                                className={headerStyles.navLink}
                                                                key={"menu_item" + index} 
                                                                href={MenuItem.link}
                                                                >
                                                                        {MenuItem.name}
                                                                </Nav.Link>
                                                        ))
                                                }
                                        </Nav>
                                </Navbar.Collapse>

                        </Container>
                </Navbar>
        );
}

export default Header;