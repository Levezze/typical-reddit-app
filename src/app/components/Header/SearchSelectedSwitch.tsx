import React, { useState } from 'react';

const SearchSelectedSwitch:React.FC = () => {
  const [searchSwitch, setSearchSwitch] = useState<boolean>(false);

  const handleSearch = (switchView: boolean):void => {
    if (switchView) {
      setSearchSwitch(!switchView);
      console.log(switchView);
    };
  };

  return (
    <div className="SearchSelectedSwitch">
      <div 
        className={`search-switch search ${!searchSwitch ? 'switched' : null}`}
        onClick={()=> handleSearch(searchSwitch)}
      >
        <h3>SEARCH</h3>
      </div>
      <div 
        className={`search-switch selected ${searchSwitch ? 'switched' : null}`}
        onClick={()=> handleSearch(!searchSwitch)}
      >
        <h3>SELECTED</h3>
      </div>
    </div>
  )
}

export default SearchSelectedSwitch;