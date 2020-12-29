import React from 'react';
import { Link } from 'gatsby';
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarBurger,
  NavbarMenu,
  NavbarEnd,
} from 'bloomer';
import '../assets/css/index.css';
import logo from '../resources/cobuildlab.png';
import '../assets/css/index.css';

class header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  onClickNav = () => {
    this.setState(({ isActive }) => ({
      isActive: !isActive,
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Navbar className="is-hidden-desktop is-hidden-tablet-only" style={{ margin: '0' }}>
          <Container isFluid>
            <NavbarBrand>
              <NavbarItem>
                <Link className="link-nav-backup" to="/2018">
                  <img src={logo} style={{ marginRight: 5 }} alt="" />
                </Link>
              </NavbarItem>
              <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
            </NavbarBrand>
            <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
              <NavbarEnd>
                <NavbarItem>
                  <Link className="link-nav-backup" to="/2018">
                    Home
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link className="link-nav-backup" to="/2018/#process">
                    Cobuild Process
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link className="link-nav-backup" to="/customer-success-stories">
                    Customer Success Stories
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link className="link-nav-backup" to="/services">
                    Services
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link className="link-nav-backup" to="/blog">
                    Blog
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link to="/2018/#contact" className="link-nav-backup">
                    Contact Us
                  </Link>
                </NavbarItem>
              </NavbarEnd>
            </NavbarMenu>
          </Container>
        </Navbar>
        <Navbar className="isTransparent navbar-absolute is-hidden-mobile" style={{ margin: '0' }}>
          <Container isFluid className="mt-25">
            <NavbarBrand>
              <Link className="link-nav-backup" to="/">
                <img src={logo} style={{ marginRight: 5 }} width="229" height="49" alt="" />
              </Link>

              <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
            </NavbarBrand>
            <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
              <NavbarEnd>
                <NavbarItem>
                  <Link className="link-nav-backup" to="/2018">
                    Home
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link className="link-nav-backup" to="/2018/#process">
                    Cobuild Process
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link className="link-nav-backup" to="/customer-success-stories">
                    Customer Success Stories
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link className="link-nav-backup" to="/services">
                    Services
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link className="link-nav-backup" to="/blog">
                    Blog
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link className="link-nav-backup" to="/2018/#contact">
                    Contact Us
                  </Link>
                </NavbarItem>
              </NavbarEnd>
            </NavbarMenu>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default header;