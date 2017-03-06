import React, { Component } from 'react';
import {
  StyleSheet,
  Style,
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

const {
  width: deviceWidth
} = Dimensions.get('window');
const IMAGE_HEIGHT = deviceWidth * 2 / 3;

export default class ImageScreen extends Component {
  static navigationOptions = {
    title: "Test",
    header: ({ state, setParams }) => ({
      visible: false,
    })    
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { params } = this.props.navigation.state;
    const {
      title,
      userid,
      message,
      image_url
    } = params;

    return (
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.userid}>{userid}</Text>
        </View>
        <Image
          style={styles.image}
          source={{uri: image_url}}

        />
        <Text style={styles.bodyText}>{message}</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    justifyContent: 'center',
    backgroundColor: 'lightgray',
    padding: 10
  },
  title: {
    fontSize: 16,
  },
  userid: {
    fontSize: 12,
    color: 'gray'
  },
  bodyText: {
    fontSize: 14,
    padding:10,
  },
  image: {
    width: deviceWidth,
    height: IMAGE_HEIGHT,
  },
})