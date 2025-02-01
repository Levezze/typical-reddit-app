import React from 'react';
import LogoutButton from '../../components/auth/AuthButton';
import { useGetProfileDataQuery } from '../../store/middleware/profileAPI';
import { setProfile } from '../../store/slices/profileSlice';
import '../../../styles/ProfilePage.scss'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import User from './User/User';


const ProfilePage: React.FC = () => {
  const dispatch = useDispatch();
  const profileName = useSelector((state: RootState) => state.profile.name)
  const { data, error, isLoading } = useGetProfileDataQuery(undefined, 
    { skip: !!profileName });

  data ? dispatch(setProfile({
    name: data.name, 
    icon_img: data.icon_img, 
    total_karma: data. total_karma 
  })) : {};
  console.log('Profile name', profileName);
  console.log('Profile fetch', data ? data : error);
  const icon_img = useSelector((state: RootState) => state.profile.icon_img)
  console.log(icon_img);

  return (
    <>
      <div className='profile-top'>
        <h1>Typical Profile</h1>
      </div>
      <div className="profile-container">
        {isLoading ? <p>Loading profile...</p> :
        <User />}
      </div>
      <div className='logout-button'>
        <LogoutButton />
      </div>
    </>
  )
};

export default ProfilePage;