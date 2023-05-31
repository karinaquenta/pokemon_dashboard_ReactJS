import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '/src/index.css'

// export default function Header(){

//     return(
//         <>
//         <Navbar bg='dark' sticky='top' className='Header'>
//           <Container>
//             <Navbar.Brand className='newsflow'><strong>Pokemon Dashboard</strong></Navbar.Brand>
//           </Container>
//         </Navbar>
//         <h1 className='newsflow-text'>
//           <strong>Catch Them All!</strong>
//         </h1>
//       </>
//     );
//   }

export const NavbarBootstrap = () => {
 return(
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Pokemon Dashboard</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Pokemon Features</Nav.Link>
              <Nav.Link href="#pricing">See Pokemon</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        
      </>
    );
  }