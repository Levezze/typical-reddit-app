import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ContactButton } from '../ContactButton/ContactButton';
import { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { debounce } from 'lodash';
import { setView } from '../../store/slices/viewSlice';
import '../../../styles/Header.scss';
import landingImg from '../../../img/logo/editedLogo.png'

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const pageName = useSelector((state: RootState) => state.page.pageName);
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState<string | null>(null);
  // const [displayMode] = useState(() => {
  //   return getComputedStyle(document.documentElement)
  //     .getPropertyValue('--display-mode')
  //     .trim();
  // });
  // dispatch(setView(parseInt(displayMode, 10)))

  const columns = useSelector((state: RootState) => state.feed.feedColumns);
  
  console.log('column number:', columns)
  useEffect(()=>{
    if (typeof window !== "undefined") {
      document.documentElement.style.setProperty(
        "--feed-column-number",
        columns.toString()
      );
      console.log(
        "Updated CSS variable:",
        getComputedStyle(document.documentElement)
          .getPropertyValue("--feed-column-number")
      );
    }
    
  },[columns]);
  
  useEffect(()=> {
    const updateView = () => {
      const updatedView = parseInt(
        getComputedStyle(document.documentElement)
          .getPropertyValue('--display-mode')
          .trim(),
        10
      );
      dispatch(setView(updatedView))
    };

    updateView(); // Update the view on each re-render

    const debouncedUpdateView = debounce(updateView, 10);

    window.addEventListener('resize', debouncedUpdateView);

    return () => {
      debouncedUpdateView.cancel();
      window.removeEventListener('resize', debouncedUpdateView);
    }
  },[dispatch]);
  
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
