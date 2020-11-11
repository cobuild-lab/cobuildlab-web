import React, { useState } from 'react';
import Nav from './nav';
import Link from 'next/link';

const CenterLogoHeader = (props) => {
  const [show, setShow] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const clickSidebar = () => {
    setSidebar(!sidebar);
    document.querySelector('.navbar').classList.add('openSidebar');
  };

  return (
    <header className={`loding-header nav-abs custom-scroll header-rel ${props.themeClass}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar-expand-lg theme-nav w-100">
              <Link href="/">
                <a className="center-header d-none d-lg-block">
                  {props.themeClass === 'wedding' ? (
                    <>
                      <img
                        alt="logo"
                        className="logo-abs h-auto"
                        src="../assets/images/logo/7.png"
                      />
                    </>
                  ) : (
                    <img alt="logo" className="logo-abs h-auto" src="../assets/images/logo/1.png" />
                  )}
                </a>
              </Link>
              <Link href="/">
                <a className="logo-responsive navbar-brand d-md-block d-lg-none">
                  {props.themeClass === 'wedding' ? (
                    <>
                      <img alt="logo" src="../assets/images/logo/8.png" />
                    </>
                  ) : (
                    <img alt="logo" src="../assets/images/logo/1.png" />
                  )}
                </a>
              </Link>
              <div className="responsive-btn ml-auto">
                <a className="toggle-nav" onClick={clickSidebar}>
                  <i aria-hidden="true" className="fa fa-bars"></i>
                </a>
              </div>
              <Nav className="w-100" />
              {props.shop && (
                <div className="top-header-right">
                  <ul>
                    <li className="search">
                      <a href="javascript">
                        <i className="icon-search"></i>
                      </a>
                    </li>
                    <li className="account ">
                      <a href="javascript" onClick={() => setShow(!show)}>
                        <i className="icon-user"></i>
                      </a>
                      <div className={`dropdown-menu ${show && `show`} dropdown-menu-right`}>
                        <Link href={'/shop/auth/login'}>
                          <a href="#">Login</a>
                        </Link>
                        <a href="#">Account</a>
                        <Link href={'/shop/wishlist'}>
                          <a href="#">Wishlist</a>
                        </Link>
                        <Link href={'/shop/checkout'}>checkout</Link>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CenterLogoHeader;
