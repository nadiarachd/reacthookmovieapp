import React from 'react'
import Rate from '../Rate'

const Search=({setNameSearch, setRatingSearch, ratingSearch}) =>{
    
    return (
        <div>
           <input  type='text' 
           placeholder='movie'
           onChange={(e) => setNameSearch(e.target.value)}/> 
           <Rate
          className='star-rating'
         
          starIndex={setRatingSearch}
          rating={ratingSearch}
        />
        </div>
    )
}

export default Search


