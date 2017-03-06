import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ListView,
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
  Image,
  Dimensions,
} from 'react-native';

const TouchableElement = Platform.OS === 'ios' ? TouchableHighlight : TouchableNativeFeedback;
const {
  width: deviceWidth
} = Dimensions.get('window');
const IMAGE_HEIGHT = deviceWidth * 2 / 3;

export default class ImageBoardScreen extends Component {
  static navigationOptions = {
    title: ({ state }) => state.params.title,
  };

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      dataSource: ds.cloneWithRows(require('../assets/mock2.json').items),
    }
  }

  renderRow(rowData, sectionID, rowID) {
    const { navigate } = this.props.navigation;
    const {
      title,
      userid,
      image_url,
    } = rowData;

    return (
      <TouchableElement onPress={() => navigate('Image', { ...rowData })}>
        <Image style={styles.rowContainer} source={{ uri: image_url }}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.message} numberOfLines={1}>{userid}</Text>
          </View>
        </Image>
      </TouchableElement>
    )
  }

  renderSeparator(sectionID, rowID) {
    return <View key={`${sectionID}-${rowID}`} style={styles.separator} />
  }

  render() {
    return (
      <ListView
        contentContainerStyle={styles.contentContainer}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
        renderSeparator={this.renderSeparator}
      />
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
  },
  rowContainer: {
    width: deviceWidth,
    height: IMAGE_HEIGHT,
    // justifyContent: 'center',
    // paddingHorizontal: 10,
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgray'
  },
  textContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    height: 60,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    backgroundColor: 'black',
    color: 'white',
    padding: 5
  },
  message: {
    fontSize: 12,
    backgroundColor: 'black',
    color: 'lightgray',
    padding: 5,
  }
})
