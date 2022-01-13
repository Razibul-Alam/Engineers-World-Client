import React from 'react';
import NavHeader from '../Navbar/NavHeader';

const Header = () => {
    return (
        <div>
            
            <div className="card text-center">
  <div className=" bg-dark card-header d-flex align-items-center  justify-content-center">
    <img src="https://teamgenius.com/wp-content/uploads/2020/05/TeamGenius_Logo-500-1-260x100.png" alt="" />
    <NavHeader/>
  </div>
  
  <div className="card-body">
    <h3 className="card-title">We Are Ready To Hire Developers</h3>
    <h4 className="card-text text-muted">Want to make a awesome team hiring Genius with big budget more than <span className="fs-3 text-dark">$5000000</span></h4>
  </div>
</div>
        </div>
    );
};

export default Header;