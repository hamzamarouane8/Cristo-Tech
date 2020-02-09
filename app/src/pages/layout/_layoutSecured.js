import React, {useState} from 'react';
import Toolbar from '@ctkit/toolbar';
import Sidebar from './_sidebar'
import {LayoutGuestStyle} from './styles/layoutSecured'

const assets = {
  logout: require('../../assets/img/ic_logout.svg'),
  logo: require('../../assets/img/Taux de change_icon.svg'),
  menu: require('../../assets/img/menu.svg'),

}

export default ({session, children}) => {
  const [sidebar, setSidebar] = useState(true);

  const primaryLinks = {
    '/#': {
      img: assets.menu,
      text: '',
      onClick: () => {
        setSidebar(!sidebar)
      }
    }
  };
  const secondaryLinks = {
    '/': {
      img: assets.logout,
      text: '',
      onClick: session.logout,
      className: 'sg-logout'
    }
  };

  return (
    <LayoutGuestStyle>
      <Toolbar
        navabarType={false}
        toggler={<img src={assets.menu} alt=""/>}
        brand={{image: assets.logo, name: 'BankUP'}}
        fluid={true}
        //primaryLinks={primaryLinks}
        secondaryLinks={secondaryLinks}
      />
      {
        <>
          <div className="layout-main">
            {children}
          </div>
          <div className={sidebar ? 'd-block' : 'd-none'}>
            <Sidebar/>
          </div>
        </>
      }
    </LayoutGuestStyle>
  )
}
