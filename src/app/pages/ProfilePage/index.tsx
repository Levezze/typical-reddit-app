import React from 'react';
import LogoutButton from '../../components/auth/AuthButton';
import '../../../styles/ProfilePage.scss'

const ProfilePage: React.FC = () => {
  return (
    <>
      <div className='profile-top'>
        <h1>Typical Profile</h1>
      </div>
        <div className='logout-button'>
          <LogoutButton />
        </div>
    </>
  )
};

export default ProfilePage;