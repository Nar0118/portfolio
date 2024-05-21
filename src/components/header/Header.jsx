import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { menuItem } from '../../constants';

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./header.scss";

export const Header = () => {
    const choose = id => document.getElementById(`${id}`).scrollIntoView();

    return (
        <Navbar collapseOnSelect expand="lg" bg="" variant="light" className={styles.navbar}>
            <Navbar.Brand href="#home">
                <Nav.Link onClick={() => choose("hero")}>
                <div className={styles.name}>
                    <b> 
                        <i>
                        Narek Khachatryan
                        </i> 
                    </b> 
                 </div>
                    {/* <img src="/icons/logo-desktop.svg" alt="" />
                    <img src="/icons/logo-mb.svg" alt="" className={styles.logoMb} /> */}
                </Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                {menuItem.map((item, index) =>
                    <Nav key={index}>
                        <Nav.Link onClick={() => setTimeout(() => choose(item.path), 300)}>{item.title}</Nav.Link>
                    </Nav>
                )}
            </Navbar.Collapse>
        </Navbar>
    );
};
