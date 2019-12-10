import  React  from 'react';

import {NavLink} from 'react-router-dom';
export const Header = props => {
    return(  
        <section>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className=" collapse navbar-collapse" href="/">Beans Love Beers</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="navbar-brand" id="navbarText">
  <ul className="navbar-nav mr-auto">
      <li className="nav-item active">   
        <NavLink activeClassName="active" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
      <NavLink activeClassName="active" to="/favourites">Favourites</NavLink>
      </li>
  
    </ul>
  </div>
</nav>
</section>
    );
};
export default Header;