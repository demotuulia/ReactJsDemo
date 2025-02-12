/**
 * Layout
 * 
 */

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useState } from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '/src/style/App.scss';


import Header from "/src/components/Header/Header.jsx"
import Messages from "/src/components/Helpers/Messages/Messages.jsx"
import Footer from "/src/components/Footer/Footer.jsx"

function App() {


  const [messages, setMessages] = useState({ status: '', messages: [] });


  /**
   * Render message to top message box
   * 
   * @param {*} messages  
   */
  function renderMessages(messages) {
    setMessages(messages);
  }

  return (
    <>
      <Container className="text-centered p-0">

      <Row className="p-0 m-0 mainContent">
          <Col className="m-0 p-0">
          <Header/>
          </Col>
        </Row>

      <Row className="p-0 m-0  z-0 mainContent">
          <Col>
              <Messages messages={messages} />
          </Col>
        </Row>


        <Row className="p-0 m-0 z-0 mainContent">
          <Col>
            <Outlet
            context={[renderMessages]} 
            />
          </Col>
        </Row>
        <Row className="p-0 m-0 mainContent">
          <Col  className="p-0 m-0">
          <Footer />
          </Col>
          </Row>
      </Container>
    </>
  );
}

export default App