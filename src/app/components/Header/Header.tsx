import React from 'react'
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className='Header'>
      <div className='Header-logo'>Logo</div>
      <nav>
        <ul>
          <li><Link to="/feed">Feed</Link></li>
          <li><Link to="/subreddits">Subreddits</Link></li>
          <li><Link to="/">Profile</Link></li>
        </ul>
      </nav>
      <button>{'Contact'.toUpperCase()}</button>
    </div>
  )
}

export default Header;
