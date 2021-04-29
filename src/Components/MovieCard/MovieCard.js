import React from 'react'
import Rate from '../Rate'
import './MovieCard.css';
const MovieCard =({movie:{name,image,rating,date,description}}) =>{
    
    return (
      <div className="wrapper">
      <div className="main_card">
        <div className="card_left">
        <div className='movie-rating'>
        
        </div>
          <div className="card_datails">
            <h1>{name}</h1>
            <div className="card_cat">
              <div className="PG"><Rate rating={rating} /></div>
              <p className="year">{date}</p>
                   
            </div>
            <p className="disc">{description}</p>
            
           
          </div>
        </div>
        <div className="card_right">
          <div className="img_container">
            <img src={image} alt="" />
          </div>
         
        </div>
      </div>
    </div>
    )
};

export default MovieCard;





