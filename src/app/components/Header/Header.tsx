import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { debounce } from 'lodash';
import { setView } from '../../store/slices/viewSlice';
import Nav from './Nav';
import '../../../styles/Header.scss';
import landingImg from '../../../img/logo/editedLogo.png'
import SearchSelectedSwitch from './SearchSelectedSwitch';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const columns = useSelector((state: RootState) => state.feed.feedColumns);
  const pageViewMode = useSelector((state: RootState) => state.view.viewSize);
  
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
  
  return (
    <div className='Header'>
      <div 
        className={`Header-container ${pageViewMode === 2 ? 
          'mobile-header' : null}`}>
        <div className='Header-logo' onClick={()=>navigate('/')}>
          <img 
            src={landingImg} 
          />
          <h3>Typical Reddit</h3>
        </div>
        {pageViewMode === 2 ? <SearchSelectedSwitch /> : null}
      </div>
      <Nav />
    </div>
  )
}

export default Header;
