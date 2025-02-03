import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ContactButton } from '../ContactButton/ContactButton';
import '../../../styles/Header.scss';
import landingImg from '../../../img/logo/editedLogo.png'

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleTouch = (item: string) => {
    setActiveItem(item);
    setTimeout(()=> {
      setActiveItem(null);
    }, 500);
  };

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
          <li>
            <Link className={
              `menu-item ${activeItem === 'feed' ? 'touch-hover' : ''}`
              } 
              to="/feed"
              onTouchStart={()=> handleTouch('feed')}
            >
              Feed
            </Link>
          </li>
          
          <li>
            <Link className={
              `menu-item ${activeItem === 'subreddits' ? 'touch-hover' : ''}`
              } 
              to="/subreddits"
              onTouchStart={()=> handleTouch('subreddits')}
            >
              Subreddits
            </Link>
          </li>
          
          <li>
            <Link className={
              `menu-item ${activeItem === 'profile' ? 'touch-hover' : ''}`
              } 
              to="/profile"
              onTouchStart={()=> handleTouch('profile')}
            >
              ACCOUNT
            </Link>
          </li>
        </ul>
      </nav>
      <ContactButton text={'contact'} />
    </div>
  )
}

export default Header;
