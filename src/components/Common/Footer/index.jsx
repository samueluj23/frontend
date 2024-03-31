import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-logo">
          <a href="#home">
            <img  className="footer-img" src="images/image4.png" alt="" />
          </a>
          <div className="btn-social social">
            <a href="https://twitter.com/meowsolana2024" target="_blank" rel="noreferrer">
              <img src="images/twitter-icon.svg" alt="" />
            </a>
            <a href="https://t.me/MEOWSOLANAHQ" target="_blank" rel="noreferrer">
              <img src="images/telegram.png" alt="" />
            </a>
          </div>
        </div>
        <div className="copy-text">
          <p className="mb-0" style={{color:"#7a7a7a"}}>Copyright © 2024 $MEOW | Powered by $MEOW </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
