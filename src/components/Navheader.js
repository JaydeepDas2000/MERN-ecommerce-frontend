import React from 'react';
import { Link } from 'react-router-dom';
// import { Navbar, Nav, Container } from 'react-bootstrap'


const NavHeader = () => {
    return (
        // <Navbar bg="dark" data-bs-theme="dark">
        //     <Container>
        //     <Navbar.Brand href="/">e-Prod</Navbar.Brand>
        //     <Nav className="me-auto">
        //         <Link className="nav-link" to='/'>Product</Link>
        //         <Link className="nav-link" to='/add'>Add Product</Link>
        //         <Link className="nav-link" to='/update'>Update Product</Link>
        //         <Link className="nav-link" to='/logout'>Logout</Link>
        //         <Link className="nav-link" to='/profile'>Profile</Link>
        //     </Nav>
        //     </Container>
        // </Navbar>

        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                    <a className="navbar-brand" href="#">myMarket</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/add'>Add Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/update'>Update Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/logout'>Logout</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/profile'>Profile</Link>
                        </li>
                    </ul>
                    <Link to='/signup'><button type="button" className="btn btn-warning me-2">Create new user</button></Link>
                </div>
            </div>
        </nav>
    )
}

export default NavHeader;