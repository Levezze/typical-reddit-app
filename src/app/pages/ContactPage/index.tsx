import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { setPage } from '../../store/slices/pageSlice';
import '../../../styles/ContactPage.scss'
import Button from '../../components/Button/Button';
import githubWhite from '../../../img/contact/github/github-mark-white.png';
import githubBlack from '../../../img/contact/github/github-mark.png';
import linkedinWhite from '../../../img/contact/linkedin/linkedin-white.png';
import linkedinBlue from '../../../img/contact/linkedin/linkedin-blue.png';

const ContactPage: React.FC = () => {
  const dispatch = useDispatch();
  const pageView = useSelector((state: RootState) => state.view.viewSize);
  const darkLight = useSelector((state: RootState) => state.darkLight.isDark);
  
  useEffect(()=>{
    dispatch(setPage('contact'));
  },[dispatch]);

  return (
    <>
      <div className='contact-top'>
        <h1>Contact Details</h1>
      </div>

      
      <div className={`contact-layout ${pageView === 2 ? 'mobile' : ''}`}>
        <div className="contact-container">
          <div className="title-section">
            <div className="profile-name">
              <h2>Lev Zhitnik</h2>
              <p>Architect, Computational designer, Full-stack developer (in progress...)</p>
            </div>
          </div>
          <div className={`contact-buttons ${pageView === 2 ? 'mobile' : ''}`}>
            <Button 
              buttonName='CONTACT@LEVEZZE.COM' 
              className='contact-email-button'
            />
            <a href="https://github.com/Levezze" target='_blank'>
              <img src={darkLight ? githubWhite : githubBlack} alt="Levezze's GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/lev-zhitnik/" target='_blank'>
              <img src={darkLight ? linkedinWhite : linkedinBlue} alt="Lev's LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
};

export default ContactPage;