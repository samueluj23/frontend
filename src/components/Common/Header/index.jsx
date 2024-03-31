import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useMediaQuery } from "react-responsive";

const MyNavbar = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 991px)` });
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    if (activeLink !== link) {
      setActiveLink(link);
    }
  };

  return (
    <header>
      <Navbar expand="lg" className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Navbar.Brand href="/">
            <a className="navbar-brand" href="/">
              <img src="images/image4.png" alt="" /><span className="logoS">$MEOW</span> 
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-right" />
          <Navbar.Collapse id="navbar-right">
            <Nav className="ml-auto">
              <Nav.Link className={`nav-link ${activeLink === "home-sec" ? "active" : ""}`} href="#home-sec" onClick={() => handleLinkClick("home-sec")}>
                Home
              </Nav.Link>
              <Nav.Link className={`nav-link ${activeLink === "about-sec" ? "active" : ""}`} href="#about-sec" onClick={() => handleLinkClick("about-sec")}>
                About us
              </Nav.Link>
              <Nav.Link className={`nav-link ${activeLink === "why-sec" ? "active" : ""}`} href="#why-sec" onClick={() => handleLinkClick("why-sec")}>
                Why Meme
              </Nav.Link>
              <Nav.Link className={`nav-link ${activeLink === "utilities" ? "active" : ""}`} href="#utilities" onClick={() => handleLinkClick("utilities")}>
                Utilities
              </Nav.Link>
              <Nav.Link
                className={`nav-link ${activeLink === "tokenomics-sec" ? "active" : ""}`}
                href="#tokenomics-sec"
                onClick={() => handleLinkClick("tokenomics-sec")}
              >
                tokenomics
              </Nav.Link>

              {isMobile ? (
                <div className="d-flex justify-content-center w-100 me-4 ms-auto" role="search">
                  <a className="btn btn-orange  centerr m-auto" href={"#home-sec"} >
                    Buy Now
                  </a>
                </div>
              ) : (
                ""
              )}
            </Nav>
          </Navbar.Collapse>
          {!isMobile ? (
            <>
              <div className="d-flex mx-3" role="search">
                <a className="btn centerr btn-orange buyHead" href={"#home-sec"}>
                  Buy Now
                </a>
              </div>
              <a href="https://t.me/MEOWSOLANAHQ" className="header-tele-ic" rel="noreferrer" target="_blank">
                <img src="images/telegram.png" alt="" />
              </a>
            </>
          ) : (
            ""
          )}
        </div>
      </Navbar>
    </header>
  );
};

export default MyNavbar;
