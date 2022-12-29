import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './Navigation.css';

const Navigation = () => {
  return (
    <div>
      <div>
        <Navbar expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto text-center">
                <NavLink to="/home" className={`text-decoration-none fs-4 text-light mx-5 nav-item`}>My Task</NavLink>
                <NavLink to="/home/add-task" className="text-decoration-none fs-4 text-light mx-5 nav-item">+ Add Task</NavLink>
                <NavLink to="/home/completed-task" className="text-decoration-none fs-4 text-light mx-5 nav-item">Completed Task</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <hr />
    </div>
  );
};

export default Navigation;
