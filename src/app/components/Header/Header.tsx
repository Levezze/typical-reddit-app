import React from 'react'
import { Link } from 'react-router-dom';

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='Header'>
      <div className='Header-logo'>Logo</div>
      <ul>
        <li><Link to="/">Link</Link></li>
        <li><Link to="/">Link</Link></li>
        <li><Link to="/">Link</Link></li>
      </ul>
      <button>{'Contact'.toUpperCase()}</button>
    </div>
  )
}

export default Header;
