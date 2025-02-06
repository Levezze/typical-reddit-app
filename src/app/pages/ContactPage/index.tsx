import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../../store/slices/pageSlice';

const ContactPage: React.FC = () => {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(setPage('contact'));
  },[dispatch]);

  return (
    <div>ContactPage</div>
  )
}

export default ContactPage;