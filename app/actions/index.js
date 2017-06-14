import { PICTURES_URL } from '../config';

export const loadPictureList = (page = 1) => {
  const url = `${PICTURES_URL}&page=${page}`;
  return {
    type: 'LOAD_PICTURE_LIST',
    // eslint-disable-next-line no-undef
    payload: fetch(url).then(response => response.json()),
  };
};

export const selectPicture = pictureId => ({
  type: 'SELECT_PICTURE',
  payload: pictureId,
});
