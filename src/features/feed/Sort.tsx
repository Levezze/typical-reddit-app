import React from 'react'
import { changeFeedSort, sortValue } from './feedSlice'
import { useDispatch, useSelector } from 'react-redux'

const Sort: React.FC = () => {
  const dispatch = useDispatch();
  const handleSelectSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = (e.target as HTMLSelectElement).value;
    dispatch(changeFeedSort(value))
  };


  return (
    <div className='sort-container'>
      <form>
        <label htmlFor='sort-select' />
        <select 
          name='sort-select' 
          id='sort-select' 
          defaultValue={'hot'} 
          value={useSelector(sortValue)}
          onChange={handleSelectSort}
        >
          <option value={'hot'}>Hot</option>
          <option value={'new'}>New</option>
          <option value={'top'}>Top</option>
          <option value={'rising'}>Rising</option>
          <option value={'controversial'}>Controversial</option>
        </select>
      </form>
      
    </div>
  )
}

export default Sort;