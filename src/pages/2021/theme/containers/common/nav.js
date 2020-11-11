import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { MENUITEMS } from '../../constant/menu';
import { Container, Row } from 'reactstrap';
const Nav = () => {
  const [mainmenu, setMainMenu] = useState(MENUITEMS);
  const [sidebar, setSidebar] = useState(false);

  /**
   *
   */
  function closeSidebar() {
    setSidebar(!sidebar);
    document.querySelector('.navbar').classList.remove('openSidebar');
  }

  useEffect(() => {
    const currentUrl = location.pathname;
    mainmenu.filter((items) => {
      if (items.path === currentUrl) setNavActive(items);
      if (!items.children) return false;
      items.children.filter((subItems) => {
        if (subItems.path === currentUrl) setNavActive(subItems);
        if (!subItems.children) return false;
        subItems.children.filter((subSubItems) => {
          if (subSubItems.path === currentUrl) setNavActive(subSubItems);
        });
      });
    });
  }, []);

  const setNavActive = (item) => {
    MENUITEMS.filter((menuItem) => {
      if (menuItem != item) menuItem.active = false;
      if (menuItem.children && menuItem.children.includes(item)) menuItem.active = true;
      if (menuItem.children) {
        menuItem.children.filter((submenuItems) => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = true;
          }
        });
      }
    });
    item.active = !item.active;
    setMainMenu({ mainmenu: MENUITEMS });
  };

  // Click Toggle menu
  const toggletNavActive = (item) => {
    if (!item.active) {
      MENUITEMS.forEach((a) => {
        if (MENUITEMS.includes(item)) a.active = false;
        if (!a.children) return false;
        a.children.forEach((b) => {
          if (a.children.includes(item)) {
            b.active = false;
          }
          if (!b.children) return false;
          b.children.forEach((c) => {
            if (b.children.includes(item)) {
              c.active = false;
            }
          });
        });
      });
    }
    item.active = !item.active;
    setMainMenu({ mainmenu: MENUITEMS });
  };

  return (
    <div className={`navbar`} id="togglebtn">
      <div className="responsive-btn">
        <a className="btn-back" onClick={closeSidebar}>
          <h5>back</h5>
        </a>
      </div>
      <ul className="main-menu">
        {MENUITEMS.slice(0, 3).map((menuItem, i) => {
          return (
            <li key={i} className={` ${menuItem.megaMenu ? 'mega-menu' : ''}`}>
              {menuItem.sidebartitle ? <div className="dropdown">{menuItem.sidebartitle}</div> : ''}
              {menuItem.type === 'sub' ? (
                <a
                  className="dropdown"
                  href="#javascript"
                  onClick={() => toggletNavActive(menuItem)}>
                  <span>{menuItem.title}</span>
                </a>
              ) : (
                ''
              )}
              {menuItem.type === 'link' ? (
                <Link
                  href={`${process.env.PUBLIC_URL}${menuItem.path}`}
                  className={`${menuItem.active ? 'active' : ''}`}
                  onClick={() => toggletNavActive(menuItem)}>
                  <span>{menuItem.title}</span>
                  {menuItem.children ? <i className="fa fa-angle-right pull-right"></i> : ''}
                </Link>
              ) : (
                ''
              )}

              {/* MEGHA MENU */}
              <div className={`mega-menu-container resize ${menuItem.active ? 'opensubmenu' : ''}`}>
                {menuItem.megaMenu === true ? (
                  <Container>
                    <Row>
                      {menuItem.children.map((megaMenuItem, i) => {
                        return (
                          <div
                            className={`${
                              menuItem.megaMenuType == 'small'
                                ? 'col-lg-4'
                                : menuItem.megaMenuType == 'medium'
                                  ? 'col-lg-3'
                                  : menuItem.megaMenuType == 'large'
                                    ? 'col'
                                    : ''
                            } `}
                            key={i}>
                            <div className="menu-container">
                              <a className="menu-head">{megaMenuItem.title}</a>
                              <ul
                                className={`menu-icon ${
                                  megaMenuItem.title ? 'openSubChildMenu' : ''
                                }`}>
                                {menuItem.title === 'Elements'
                                  ? megaMenuItem.children.map((subMegaMenuItem, i) => {
                                    return (
                                      <li key={i}>
                                        <a href={subMegaMenuItem.path}>
                                          <i className={`icon-${subMegaMenuItem.icon}`}></i>
                                          {subMegaMenuItem.title}
                                        </a>
                                      </li>
                                    );
                                  })
                                  : megaMenuItem.children.map((subMegaMenuItem, i) => {
                                    return (
                                      <li key={i}>
                                        <a href={subMegaMenuItem.path}>{subMegaMenuItem.title}</a>
                                      </li>
                                    );
                                  })}
                              </ul>
                            </div>
                          </div>
                        );
                      })}
                    </Row>
                  </Container>
                ) : (
                  ''
                )}
              </div>
              {menuItem.children && !menuItem.megaMenu ? (
                <ul
                  className={`${menuItem.active ? 'menu-open activeSubmenu' : ''}`}
                  style={
                    menuItem.active ? { opacity: 1, transition: 'opacity 500ms ease-in' } : {}
                  }>
                  {menuItem.children.map((childrenItem, index) => (
                    <li key={index} className={`${childrenItem.children ? 'sub-menu ' : ''}`}>
                      {childrenItem.type === 'sub' ? (
                        <a href="#javascript" onClick={() => toggletNavActive(childrenItem)}>
                          {childrenItem.title}
                        </a>
                      ) : (
                        ''
                      )}
                      {childrenItem.type === 'link' ? (
                        <Link href={`${childrenItem.path}`}>
                          <a> {childrenItem.title} </a>
                        </Link>
                      ) : (
                        ''
                      )}
                      {childrenItem.children ? (
                        <ul className={`${childrenItem.active ? 'menu-open' : 'active'}`}>
                          {childrenItem.children.map((childrenSubItem, key) => (
                            <li key={key}>
                              {childrenSubItem.type === 'link' ? (
                                <Link href={`${childrenSubItem.path}`}>
                                  <a className="sub-menu-title">{childrenSubItem.title}</a>
                                </Link>
                              ) : (
                                ''
                              )}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        ''
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                ''
              )}
            </li>
          );
        })}
      </ul>
      <ul className="main-menu">
        {MENUITEMS.slice(3, 7).map((menuItem, i) => {
          return (
            <li key={i} className={` ${menuItem.megaMenu ? 'mega-menu' : ''}`}>
              {menuItem.sidebartitle ? <div className="dropdown">{menuItem.sidebartitle}</div> : ''}
              {menuItem.type === 'sub' ? (
                <a
                  className="dropdown"
                  href="#javascript"
                  onClick={() => toggletNavActive(menuItem)}>
                  <span>{menuItem.title}</span>
                </a>
              ) : (
                ''
              )}
              {menuItem.type === 'link' ? (
                <Link
                  href={`${process.env.PUBLIC_URL}${menuItem.path}`}
                  className={`${menuItem.active ? 'active' : ''}`}
                  onClick={() => toggletNavActive(menuItem)}>
                  <span>{menuItem.title}</span>
                  {menuItem.children ? <i className="fa fa-angle-right pull-right"></i> : ''}
                </Link>
              ) : (
                ''
              )}

              {/* MEGHA MENU */}
              <div
                className={`mega-menu-container ${menuItem.title === 'Elements' ? 'resize' : ''} ${
                  menuItem.active ? 'opensubmenu activeSubmenu' : ''
                }`}>
                {menuItem.megaMenu === true ? (
                  <Container>
                    <Row>
                      {menuItem.children.map((megaMenuItem, i) => {
                        return (
                          <div
                            className={`${
                              menuItem.megaMenuType == 'small'
                                ? 'col-lg-4'
                                : menuItem.megaMenuType == 'medium'
                                  ? 'col-lg-3'
                                  : menuItem.megaMenuType == 'large'
                                    ? 'col'
                                    : ''
                            } `}
                            key={i}>
                            <div className="menu-container">
                              <a className="menu-head">{megaMenuItem.title}</a>
                              <ul
                                className={`menu-icon ${
                                  megaMenuItem.title ? 'openSubChildMenu' : ''
                                }`}>
                                {menuItem.title === 'Elements'
                                  ? megaMenuItem.children.map((subMegaMenuItem, i) => {
                                    return (
                                      <li key={i}>
                                        <a href={subMegaMenuItem.path}>
                                          <i className={`icon-${subMegaMenuItem.icon}`}></i>
                                          {subMegaMenuItem.title}
                                        </a>
                                      </li>
                                    );
                                  })
                                  : megaMenuItem.children.map((subMegaMenuItem, i) => {
                                    return (
                                      <li key={i}>
                                        <a href={subMegaMenuItem.path}>{subMegaMenuItem.title}</a>
                                      </li>
                                    );
                                  })}
                              </ul>
                            </div>
                          </div>
                        );
                      })}
                    </Row>
                  </Container>
                ) : (
                  ''
                )}
              </div>
              {menuItem.children && !menuItem.megaMenu ? (
                <ul
                  className={`${menuItem.active ? 'menu-open activeSubmenu' : ''}`}
                  style={
                    menuItem.active ? { opacity: 1, transition: 'opacity 500ms ease-in' } : {}
                  }>
                  {menuItem.children.map((childrenItem, index) => (
                    <li key={index} className={`${childrenItem.children ? 'sub-menu ' : ''}`}>
                      {childrenItem.type === 'sub' ? (
                        <a href="#javascript" onClick={() => toggletNavActive(childrenItem)}>
                          {childrenItem.title}
                        </a>
                      ) : (
                        ''
                      )}
                      {childrenItem.type === 'link' ? (
                        <Link href={`${childrenItem.path}`}>
                          <a> {childrenItem.title} </a>
                        </Link>
                      ) : (
                        ''
                      )}
                      {childrenItem.children ? (
                        <ul
                          className={`${
                            childrenItem.active ? 'menu-open activeSubmenu' : 'active'
                          }`}>
                          {childrenItem.children.map((childrenSubItem, key) => (
                            <li key={key}>
                              {childrenSubItem.type === 'link' ? (
                                <Link href={`${childrenSubItem.path}`}>
                                  <a className="sub-menu-title">{childrenSubItem.title}</a>
                                </Link>
                              ) : (
                                ''
                              )}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        ''
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                ''
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
