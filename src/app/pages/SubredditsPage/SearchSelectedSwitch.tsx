import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

type Props = {
  searchSwitch: boolean,
  handleSearch: ()=> void,
}

const SearchSelectedSwitch:React.FC<Props> = ({ handleSearch, searchSwitch }) => {
  const pageViewMode = useSelector((state: RootState) => state.view.viewSize);
  console.log('test',pageViewMode);

  return (
    <div className="SearchSelectedSwitch" onClick={handleSearch}>
      <div className="switch-background"></div>
      <div className={`switch-slide-background ${searchSwitch ? 'switched' : ''}`}></div>
      <div 
        className={`search-switch search ${!searchSwitch ? 'switched' : ''}`}
      >
        <h3>SEARCH</h3>
      </div>
      <div 
        className={`search-switch selected ${searchSwitch ? 'switched' : ''}`}
      >
        <h3>SELECTED</h3>
      </div>
    </div>
  )
}

export default SearchSelectedSwitch;