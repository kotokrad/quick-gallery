import _ from 'lodash';

export default function PictureListReducer(state = {}, action) {
  switch (action.type) {
    case 'LOAD_PICTURE_LIST_FULFILLED':
      if (state.page !== action.payload.current_page) {
        return {
          page: action.payload.current_page,
          pictures: _.uniq(_.concat(
            state.pictures || [], action.payload.photos.map(photo =>
              _.assign(
                _.pick(photo, ['id', 'name', 'description', 'image_url']),
                { author: photo.user.username },
          )))),
        };
      }
      break;
    default:
      return state;
  }
}
