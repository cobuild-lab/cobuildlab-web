import React, { useState } from 'react';

const Customizer = () => {
  const [divName, setDivName] = useState('RTL');
  const [themeLayout, setThemeLayout] = useState(false);

  const ChangeRtl = (divName) => {
    if (divName === 'RTL') {
      if (process.browser) {
        document.body.classList.add('rtl');
      }
      setDivName('LTR');
    } else {
      if (process.browser) {
        document.body.classList.remove('rtl');
      }
      setDivName('RTL');
    }
  };

  const changeThemeLayout = () => {
    setThemeLayout(!themeLayout);
  };

  if (themeLayout) {
    if (process.browser) {
      document.body.classList.add('dark');
    }
  } else {
    if (process.browser) {
      document.body.classList.remove('dark');
    }
  }

  return (
    <div className="theme-pannel-main">
      <ul>
        <li id="rtl_btn">
          <a href={null} className="btn setting_btn" onClick={() => ChangeRtl(divName)}>
            <span className="rtl-txt">{divName}</span>
          </a>
        </li>
        <li className="sidebar-btn dark-light-btn">
          <a href={null} className="dark-light" onClick={() => changeThemeLayout()}>
            <span className="theme-layout-version">{themeLayout ? 'Light' : 'Dark'}</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Customizer;
