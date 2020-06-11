import React from 'react'
import './App.css';
import Nav from 'react-bootstrap/Nav'
import { BrowserRouter, Route } from "react-router-dom"
import FirstTab from "./components/FirstTab";
import SecondTab from "./components/SecondTab";

const App = () => {
  return (<><div className="container-fluid">
    <Nav fill variant="tabs">
      <Nav.Item>
        <Nav.Link href="/1">First Tab</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/2" eventKey="2">Second Tab</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      </Nav.Item>
    </Nav>
    <BrowserRouter>
      <Route exact path="/" component={FirstTab} />
      <Route exact path="/1" component={FirstTab} />
      <Route path="/2" component={SecondTab} />
    </BrowserRouter>
  </div>  </>)
}

export default App


