import { RootState } from '../../store/store';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/Button/Button';
import { switchDarkLight } from '../../store/slices/darkLightSlice';

const DarkLightButton: React.FC = () => {
  const dispatch = useDispatch();
  const { isDark } = useSelector((state: RootState) => state.darkLight);
  const handleDarkLight = () => {
    dispatch(switchDarkLight())
  };
  const root = document.documentElement;

  useEffect(()=> {
    if (isDark) {
      root.style.setProperty('--primary-color', '#fff')
      root.style.setProperty('--secondary-color', '#EF6D58')
      root.style.setProperty('--text-color', '#B4B5BC')
      root.style.setProperty('--bg-color', '#1C1D2A')
      root.style.setProperty('--secondary-bg-color', '#303146')
      root.style.setProperty('--container-bg-color', '#303146')
      root.style.setProperty('--border-color', '#ADADB2')
      root.style.setProperty('--switch-btn-bg', '#F6F6F6')
    } else {
      root.style.setProperty('--primary-color', '#5A5A5A')
      root.style.setProperty('--secondary-color', '#EF6D58')
      root.style.setProperty('--text-color', '#67676E')
      root.style.setProperty('--bg-color', '#F6F6F6')
      root.style.setProperty('--secondary-bg-color', '#ECECEC')
      root.style.setProperty('--container-bg-color', '#F6F6F6')
      root.style.setProperty('--border-color', '#696969')
      root.style.setProperty('--switch-btn-bg', '#1C1D2A')
    }
  })

  return (
    <Button
      className='darklight-button'
      handleClick={handleDarkLight}
      buttonName={isDark ? "LIGHT THEME" : "DARK THEME"}
    />
  );
};

export default DarkLightButton;