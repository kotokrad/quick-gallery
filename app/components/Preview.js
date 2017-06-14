import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
// eslint-disable-next-line
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 215,
    backgroundColor: '#000',
    marginBottom: 10,
    padding: 5,
  },
  image: {
    width: 170,
    height: 170,
  },
  text: {
    color: '#fff',
  },
  textAuthor: {
    fontSize: 10,
  },
});

const Preview = (props) => {
  const picture = props.picture;
  return (
    <View
      style={styles.container}
    >
      <Image
        source={{ uri: picture.image_url[0] }}
        resizeMode="cover"
        style={styles.image}
      />
      <Text
        style={styles.text}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {picture.name}
      </Text>
      <Text
        style={[styles.text, styles.textAuthor]}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        by {picture.author}
      </Text>
    </View>
  );
};

Preview.propTypes = {
  picture: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Preview;
