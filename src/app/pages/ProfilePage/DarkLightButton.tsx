import { RootState } from '../../store/store';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/Button/Button';
import { switchDarkLight } from '../../store/slices/darkLightSlice';

const DarkLightButton: React.FC = () => {
  const dispatch = useDispatch();
  const { isDark } = useSelector((state: RootState) => state.darkLight);
  const handleDarkLight = () => {
    dispatch(switchDarkLight())
  };

  return (
    <Button
      className='darklight-button'
      handleClick={handleDarkLight}
      buttonName={isDark ? "LIGHT THEME" : "DARK THEME"}
    />
  );
};

export default DarkLightButton;