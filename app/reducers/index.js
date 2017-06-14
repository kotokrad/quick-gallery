import { combineReducers } from 'redux';

import PictureListReducer from './PictureListReducer';

export default combineReducers({
  pictureList: PictureListReducer,
});
