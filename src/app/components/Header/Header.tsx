import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ContactButton } from '../ContactButton/ContactButton';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import '../../../styles/Header.scss';
import landingImg from '../../../img/logo/editedLogo.png'

const Header: React.FC = () => {
  const pageName = useSelector((state: RootState) => state.page.pageName);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
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
              `menu-item ${activeItem === 'feed' ? 'touch-hover' : ''}
              ${pageName === 'feed' ? 'current-page' : ''}`.trim()
              } 
              to="/feed"
              onTouchStart={()=> handleTouch('feed')}
            >
              Feed
            </Link>
          </li>
          
          <li>
            <Link className={
              `menu-item ${activeItem === 'subreddits' ? 'touch-hover' : ''}
              ${pageName === 'subreddits' ? 'current-page' : ''}`.trim()
              } 
              to="/subreddits"
              onTouchStart={()=> handleTouch('subreddits')}
            >
              Subreddits
            </Link>
          </li>
          
          <li>
            <Link className={
              `menu-item ${activeItem === 'account' ? 'touch-hover' : ''}
              ${pageName === 'account' ? 'current-page' : ''}`.trim()
              } 
              to="/account"
              onTouchStart={()=> handleTouch('account')}
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
