import React from 'react'
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';

export const User:React.FC = () => {
  const profileData = useSelector((state: RootState) => state.profile);
  const { name, icon_img, total_karma} = profileData;

  return (
    <>
      <div className="title-section">
        <div className="profile-name">
          <h2>{name}</h2>
        </div>
        <div className="profile-karma">
          <h3>Total Karma: {total_karma}</h3>
        </div>
      </div>
      <div className="profile_img">
        <img src={icon_img} alt={`Profile image of ${name}`} />
      </div>
    </>
  )
}

export default User;