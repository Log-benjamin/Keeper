import React from 'react';
const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer>
          <p>Copyright &#169; {currentYear}</p>
        </footer>
    );
}

export default Footer;