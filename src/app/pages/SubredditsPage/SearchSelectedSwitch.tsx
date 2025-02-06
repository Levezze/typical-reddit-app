import React, { useState } from 'react';

const SearchSelectedSwitch:React.FC = () => {
  const [searchSwitch, setSearchSwitch] = useState<boolean>(false);

  const handleSearch = () => {
    setSearchSwitch(!searchSwitch);
    console.log(searchSwitch);
  };

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