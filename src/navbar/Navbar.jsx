import React from 'react';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchBar from './SearchBar';

class NavScrollExample extends React.Component {
  handleSearch = (searchTerm) => {
    console.log('Search term:', searchTerm);
  };
  render() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid="md">
          <Navbar.Brand href="#">React app news</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll></Nav>
            <SearchBar onSearch={this.handleSearch} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavScrollExample;
