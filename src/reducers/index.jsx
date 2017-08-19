import { combineReducers } from 'redux'
import count from './count';
import cart from './cart'
import history from './history';


const counts = combineReducers({
    count,
    cart,
    history
});

export default counts;