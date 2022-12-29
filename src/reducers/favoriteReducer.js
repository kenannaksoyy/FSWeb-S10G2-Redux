import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favoritesActions';

const initialState = {
    favorites: [],
    displayFavorites: true
}

const reducer = (state=initialState, action) => {
    const varmiKontrol = (id) => {
        let kontrol = true;
        state.favorites.forEach(m => {
            if (m.id===id){
                kontrol=false
            }
        })
        return kontrol;
    }
    switch(action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !(state.displayFavorites)
            }
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: varmiKontrol(action.payload.id) 
                ? 
                [...state.favorites,action.payload] 
                : 
                state.favorites
            
            }
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(item=>(action.payload !== item.id))
            }
        default:
            return state;
    }
}

export default reducer;