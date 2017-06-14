import React from 'react';
import {
  View,
  Image,
} from 'react-native';
// eslint-disable-next-line
import PropTypes from 'prop-types';

const PictureView = (props) => {
  const picture = props.navigation.state.params.picture;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
      }}
      horizontal
      maximumZoomScale={2}
    >
      <Image
        source={{ uri: picture.image_url[1] }}
        style={{ flex: 1 }}
        resizeMode="contain"
      />
    </View>
  );
};

PictureView.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PictureView;
