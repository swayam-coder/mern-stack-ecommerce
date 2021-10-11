import React from 'react';

const Footer = () => {
    return (
        <footer className="py-5">
          <div className="container footer">
            <p className="float-end mb-1">
            <a href="#" style={{color: "white"}}>Back to top</a>
            </p>

        <div className="socials">
          <p style={{fontWeight: "bold"}}>Connect with us</p>
          <ul style={{listStyleType: "none", paddingLeft: 0}}>
            <li><a href="#" className="anchor-footer">Facebook</a></li>
            <li><a href="#" className="anchor-footer">Instagram</a></li>
            <li><a href="#" className="anchor-footer">Twitter</a></li>
          </ul>
        </div>
    <p></p>
    </div>
    </footer>
    )
}

export default Footer;