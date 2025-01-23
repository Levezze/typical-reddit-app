import React from 'react'
import { Link } from 'react-router-dom';
import { ContactButton } from '../../../features/contact/ContactButton';
import '../../../styles/header.scss';

const Header: React.FC = () => {
  return (
    <div className='Header'>
      <div className='Header-logo'>
        <img src='../../../resources/logo/editedLogo.png' />
        <h3>Typical Reddit</h3>
      </div>
      <nav>
        <ul>
          <li><Link to="/feed">Feed</Link></li>
          <li><Link to="/subreddits">Subreddits</Link></li>
          <li><Link to="/">Profile</Link></li>
        </ul>
      </nav>
      <ContactButton text={'contact'} />
    </div>
  )
}

export default Header;
