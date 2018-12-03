import React from 'react';

//create fontionnal component
const Navbar = () => {
  return (
    <nav className="nav-wrapper Bisque darken-3">
      <div className="container">
        <ul className="right">
          <li><a href="/">Home</a></li>
          <li> <button type="button" className="btn btn-dark"> <a href="/WishList">Wish List</a></button>
          </li>
        </ul>
      </div>
    </nav> 
  )
}
export default Navbar