import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { Navbar, Nav, Container } from 'react-bootstrap'


const NavHeader = () => {

    const navigate = useNavigate();

    const auth = localStorage.getItem('user');

    const logout = () => {
        localStorage.clear(); // it help to clean whole keys in local storage
        // for single key we have to use localStorage.removeItem('key');
        navigate('/signup')
    }
    
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
                <div className="collapse navbar-collapse me-auto text-center" id="navbarNav">
                    {
                        auth ? 
                        <div>
                            <ul className="navbar-nav mb-2 mb-lg-0">
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
                                    <Link className="nav-link" to='/profile'>Profile</Link>
                                </li>
                            </ul>
                        </div>
                        :
                        <></>
                    }
                    
                </div>
                <div>
                    {
                        auth ?
                            <Link className="nav-link" to='/signup' onClick={logout}><button type="button" className="btn btn-danger me-2">Logout ( <span className='user-name-nav'>{JSON.parse(auth).name} )</span></button></Link>
                        : 
                            <div>
                                <Link to='/login'><button type="button" className="btn btn-warning me-2">Login</button></Link>
                                <Link to='/signup'><button type="button" className="btn btn-warning me-2">Create new user</button></Link>
                            </div>
                    }
                </div>
            </div>
        </nav>
    )
}

export default NavHeader;