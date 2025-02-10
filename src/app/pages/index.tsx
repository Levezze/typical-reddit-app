import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setPage } from '../store/slices/pageSlice';
import { RootState } from '../store/store';
import LoginButton from '../components/auth/AuthButton';
import '../../styles/LandingPage.scss';
import landingImg from '../../img/logo/landingLogo.png';

const LandingPage: React.FC = () => {
  const dispatch = useDispatch();
  const pageViewMode = useSelector((state: RootState) => state.view.viewSize);

  useEffect(()=>{
    dispatch(setPage('landing'));
  },[dispatch]);
  
  return (
    <div className={`landing-page-container 
    ${pageViewMode === 2 ? 'mobile-view' : ''}`}>
      <div className='logo-text'>
        <h2>An Entirely</h2>
        <h1>Typical</h1>
        <h3>Reddit App</h3>
        <p>Next generation Reddit API app that allows you to view your selected subreddits, here, instead of on Reddit!</p>
        {pageViewMode === 2 ? null : <LoginButton />}
      </div>
      <div className='logo-img'>
        <img src={landingImg} />
      </div>
      {pageViewMode === 2 ? <LoginButton /> : null}
    </div>
  )
}

export default LandingPage;