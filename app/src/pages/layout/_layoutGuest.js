import React from 'react';
import Toolbar from '@ctkit/toolbar';
import {LayoutGuestStyle} from './styles/layoutGuest'
import {FiLogIn} from 'react-icons/fi'

const assets = {
  logo: require('../../assets/img/logo/logo.png'),
  logout: require('../../assets/img/ic_logout.svg'),
  notifications: require('../../assets/img/ic_notification.svg'),
  menu: require('../../assets/img/menu.svg'),
  login: require('../../assets/img/ic_login.svg')
}

const secondaryLinks = {
  '/home': {
    text: 'Home',

  },
  '/services': {
    text: 'Services',
  },
  '/faq': {
    text: 'Portfolio',
  },
  '/contactUs': {
    text: 'Contact Us',
  }
};


export default ({children}) => {
  return (
    <LayoutGuestStyle>
      <Toolbar
        navabarType={true}
        toggler={<img src={assets.menu} alt=""/>}
        brand={{image: assets.logo, name: ''}}
        fluid={true}
        //primaryLinks={primaryLinks}
        secondaryLinks={secondaryLinks}
      />
      {children}
      <div className="footer">
Copyright © 2020 Crysto Tech | Web Development + SEO + Logo Design | Call us Today +212 641-844-635
</div>
    </LayoutGuestStyle>
  )
}
