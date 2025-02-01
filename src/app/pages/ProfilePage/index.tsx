import React, { useEffect, useRef } from 'react';
import LogoutButton from '../../components/auth/AuthButton';
import { useGetProfileDataQuery } from '../../store/middleware/profileAPI';
import { setProfile } from '../../store/slices/profileSlice';
import '../../../styles/ProfilePage.scss'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import User from './User/User';
import DarkLightButton from './DarkLightButton';


const ProfilePage: React.FC = () => {
  const profileSet = useRef(false);
  const dispatch = useDispatch();
  const profileName = useSelector((state: RootState) => state.profile.name)
  const { data, error, isLoading } = useGetProfileDataQuery(undefined, 
    { skip: !!profileName });

  useEffect(()=> {
    if (profileSet.current) return;
    profileSet.current = true;
    data ? dispatch(setProfile({
      name: data.name, 
      icon_img: data.icon_img, 
      total_karma: data. total_karma 
    })) : {};
    console.log('Profile fetch', data ? data : error);
  }, [data, dispatch])

  return (
    <>
      <div className='profile-top'>
        <h1>Reddit Profile</h1>
      </div>
      <div className='profile-layout'>
        <div className="profile-container">
          {isLoading ? <p>Loading profile...</p> :
          <User />}
        </div>
        <div className="profile-buttons">
          <LogoutButton />
          <DarkLightButton />
        </div>
      </div>
    </>
  )
};

export default ProfilePage;