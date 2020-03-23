import React, { Fragment, useState, useCallback } from 'react'
import { Link } from 'gatsby'
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarBurger,
  NavbarMenu,
  NavbarEnd,
} from 'bloomer'
import Button from '@2020/components/Button';

import logo from '@2020/resources/cobuildlab.png'
import facebook from '@2020/resources/icons/facebook.svg';
import instagram from '@2020/resources/icons/instagram.svg';
import youtube from '@2020/resources/icons/youtube.svg';

import styles from './css/index.module.scss';


const SocialIcon = ({ isHidden }) => (
  <Fragment>
    <NavbarItem isHidden={isHidden}>
      <a>
        <img  className={styles.nav_icon} src={facebook} atl="facebook" />
      </a>
    </NavbarItem>
    <NavbarItem isHidden={isHidden}>
      <a>
        <img className={styles.nav_icon} src={instagram} atl="facebook" />
      </a>
    </NavbarItem>
    <NavbarItem isHidden={isHidden}>
      <a>
        <img className={styles.nav_icon} src={youtube} atl="facebook" />
      </a>
    </NavbarItem>
  </Fragment>
);

export default () => {
  const [isActive, setAtvice] = useState(false);

  const handleActive = useCallback(() => {
    setAtvice(state => !state);
  }, [])

  return (
    <div className={styles.nav_divider}>
      <Container>
        <Navbar>
          <NavbarBrand>
            <NavbarItem>
              <Link className={styles.nav_brand} to="/">
              <img  className={styles.nav_brand_img} src={logo} />
              </Link>
            </NavbarItem>
            <SocialIcon isHidden="desktop" />
            <NavbarBurger
              isActive={isActive}
              onClick={handleActive}
            />
          </NavbarBrand>
          <NavbarMenu
            isActive={isActive}
            onClick={handleActive}
          >
          <NavbarEnd>
            <NavbarItem>
              <div className={styles.nav_item}>
                <Link to="/services" className={styles.nav_link} >
                  Services
                </Link>
              </div>
            </NavbarItem>
            <NavbarItem>
              <div className={styles.nav_item}>
                <Link to="/customer-success-stories" className={styles.nav_link} >
                  Customer Success Stories
                </Link>
              </div>
            </NavbarItem>
            <NavbarItem>
              <div className={styles.nav_item}>
                <Link to="/blog" className={styles.nav_link} >
                  Blog
                </Link>
              </div>
            </NavbarItem>
            <NavbarItem>
              <div className={styles.nav_item}>
                <Button to="/#contact" className={styles.nav_link_spacing}>
                  Contact Us
                </Button>
              </div>
            </NavbarItem>
            <SocialIcon isHidden="mobile" />
          </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      </Container>
    </div>
  );
}


// <Link to="/#contact" className={componse(styles.nav_link, styles.nav_link_primary)}>  </Link>