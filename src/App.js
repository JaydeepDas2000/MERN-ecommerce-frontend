import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import NavHeader from './components/Navheader';
import Footerbox from './components/Footerbox';

import SignUp from './components/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavHeader/>
        <Container fluid>
          <Routes>
            <Route path="/" element={<h1>Product List</h1>}></Route>
            <Route path="/add" element={<h1>Product Add</h1>}></Route>
            <Route path="/update" element={<h1>Product Update</h1>}></Route>
            <Route path="/logout" element={<h1>Logout</h1>}></Route>
            <Route path="/profile" element={<h1>Profile</h1>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
          </Routes>
        </Container>
        <Footerbox/>
      </BrowserRouter>
    </div>
  );
}

export default App;
