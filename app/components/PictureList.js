import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ListView,
} from 'react-native';
// eslint-disable-next-line
import PropTypes from 'prop-types';

import Preview from './Preview';
import { loadPictureList } from '../actions';

class PictureList extends Component {
  constructor() {
    super();

    this.state = {
      ds: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
    };
  }

  componentWillMount() {
    this.props.loadPictures();
  }

  _keyExtractor(item) {
    return item.id;
  }

  _renderPreview(picture) {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity
        onPress={() => {
          navigate('PictureView', { picture });
        }}
      >
        <Preview
          picture={picture}
        />
      </TouchableOpacity>
    );
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#200',
      },
      listView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingTop: 15,
      },
      loadingText: {
        color: '#fff',
        fontWeight: 'bold',
      },
    });
    return (
      <View style={styles.container}>
        {
          this.props.pictureList.pictures ?
            <ListView
              contentContainerStyle={styles.listView}
              onEndReachedThreshold={1000}
              onEndReached={() => { this.props.loadPictures(this.props.pictureList.page + 1); }}
              dataSource={this.state.ds.cloneWithRows(this.props.pictureList.pictures)}
              renderRow={picture => this._renderPreview(picture)}
            /> :
            <View style={styles.listView}>
              <Text style={styles.loadingText}>Loading...</Text>
            </View>
        }
      </View>
    );
  }
}

PictureList.propTypes = {
  pictureList: PropTypes.shape({
    page: PropTypes.number,
    pictures: PropTypes.arrayOf(PropTypes.object),
  }),
  loadPictures: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

PictureList.defaultProps = {
  pictureList: {},
};


const mapStateToProps = state => (
  {
    pictureList: state.pictureList,
    selectedPicture: state.selectedPicture,
  }
);

const mapDispatchToProps = dispatch => (
  {
    loadPictures: (page) => {
      dispatch(loadPictureList(page));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(PictureList);
