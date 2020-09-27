import { combineReducers } from 'redux';

import { communicationReducer } from './communication/communication.reducer.js'
import { loaderReducer } from './loader/loader.reducer.js'

export default combineReducers({
    communcation: communicationReducer,
    loader: loaderReducer
});