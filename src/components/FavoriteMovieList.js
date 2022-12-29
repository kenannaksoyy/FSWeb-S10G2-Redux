import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { removeFavorite } from '../actions/favoritesActions';


const FavoriteMovieList = (props) => {
    const f = useSelector(state=>{return state.favoriteReducer;});
    const favorites =f.favorites; 
    const displayFavorites = f.displayFavorites;
    const dispatch = useDispatch();
    
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            displayFavorites
            &&
            (
                favorites.map(movie=>{
                    return <div key={movie.id}>
                        <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                            {movie.title}
                            <span><span class="material-icons" onClick={()=>{dispatch(removeFavorite(movie.id))}}>remove_circle</span></span>
                        </Link> 
                    </div>
                })
            )
        }
    </div>);
}


export default FavoriteMovieList;