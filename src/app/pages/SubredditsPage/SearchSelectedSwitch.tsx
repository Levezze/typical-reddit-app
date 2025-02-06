import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const SearchSelectedSwitch:React.FC = () => {
  const [searchSwitch, setSearchSwitch] = useState<boolean>(false);
  const pageViewMode = useSelector((state: RootState) => state.view.viewSize);
  console.log('test',pageViewMode);


  const handleSearch = () => {
    setSearchSwitch(!searchSwitch);
    console.log(searchSwitch);
  };

  useEffect(()=> {
    if (pageViewMode === 2) {
      if (!searchSwitch) {
        document.documentElement.style.setProperty('--search-subs-display', 'flex');
        document.documentElement.style.setProperty('--selected-subs-display', 'none');
      } else {
        document.documentElement.style.setProperty('--search-subs-display', 'none');
        document.documentElement.style.setProperty('--selected-subs-display', 'flex');
      };
    } else {
      document.documentElement.style.setProperty('--search-subs-display', 'flex');
      document.documentElement.style.setProperty('--selected-subs-display', 'flex');
    }
  },[searchSwitch,pageViewMode]);

  return (
    <div className="SearchSelectedSwitch" onClick={handleSearch}>
      <div className="switch-background"></div>
      <div className={`switch-slide-background ${searchSwitch ? 'switched' : ''}`}></div>
      <div 
        className={`search-switch search ${!searchSwitch ? 'switched' : ''}`}
        // onClick={()=> handleSearch()}
      >
        <h3>SEARCH</h3>
      </div>
      <div 
        className={`search-switch selected ${searchSwitch ? 'switched' : ''}`}
        // onClick={()=> handleSearch(!)}
      >
        <h3>SELECTED</h3>
      </div>
    </div>
  )
}

export default SearchSelectedSwitch;