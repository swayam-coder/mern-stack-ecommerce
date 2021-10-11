import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from "./Sidebar";
import Products from "../Products/Products"
import { useCommerce } from '../../contexts/commercejs-functions';

const NavBar = () => {
    const [search, setSearch] = useState("");
    const { cart } = useCommerce()
    
    const handleSearch = () => {
      console.log(search);
    }
    
    return (
      <header className="p-3" >
      <Sidebar />
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <NavLink to="/" style={{height: 35, marginRight: 50, textDecoration: "none"}}>
          <a className="navbar-brand" href="#"><h3 className="brand-heading">Shopper</h3></a>
        </NavLink>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2 link-dark">Wishlist</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">About</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">Testimonials</a></li>
          </ul>
            <NavLink to="/cart">
              <a href="#" style={{color: "black", width: 45}} className="btn-floating btn-default">
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="currentColor" className="bi bi-cart-check-fill" viewBox="0 0 16 16">
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                </svg>
              </a>
            </NavLink>
            <span class=" counter counter-lg"><small style={{position:'relative', bottom: 1}}>{Object.keys(cart).length !== 0 ? cart.total_items : 0}</small></span>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input type="search" className="form-control" placeholder="Search..." value={search} onChange={(e)=>setSearch(e.target.value)} />
              {handleSearch()}
            </form>
          
          <div className="dropdown text-end">
            <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="mdo" width={32} height={32} className="rounded-circle" />
            </a>
            <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
              <li><a className="dropdown-item" href="#">New project...</a></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Sign out</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    )
}

export default NavBar;
