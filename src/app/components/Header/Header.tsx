import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ContactButton } from '../../../features/contact/ContactButton';
import '../../../styles/Header.scss';
import landingImg from '../../../img/logo/editedLogo.png'

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='Header'>
      <div className='Header-logo' onClick={()=>navigate('/')}>
        <img 
          src={landingImg} 
        />
        <h3>Typical Reddit</h3>
      </div>
      <nav>
        <ul>
          <li><Link className='menu-item' to="/feed">Feed</Link></li>
          <li><Link className='menu-item' to="/subreddits">Subreddits</Link></li>
          <li><Link className='menu-item' to="/">Profile</Link></li>
        </ul>
      </nav>
      <ContactButton text={'contact'} />
    </div>
  )
}

export default Header;
