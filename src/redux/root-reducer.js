import { combineReducers } from 'redux';

import { communicationReducer } from './communication/communication.reducer.js'

export default combineReducers({
    communcation: communicationReducer
});