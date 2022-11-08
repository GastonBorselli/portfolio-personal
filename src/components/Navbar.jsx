import { useState, useEffect } from 'react';
import { Navbar , Container, Nav } from 'react-bootstrap';

export function NavBar(){
    const[activeLink,setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        }
    
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, [])
    
    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }

    return(
        
            <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
              <Container>
                <Navbar.Brand href="#home">Gastón</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                  <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('home')} >Home</Nav.Link>
                    <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('about')}>Acerca de mí</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Habilidades</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Proyectos</Nav.Link>
                    <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('contact')}>Contacto</Nav.Link>

                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar> 
    );
}