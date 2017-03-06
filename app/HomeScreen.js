import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Divider from './Divider';

const TouchableElement = Platform.OS === 'ios' ? TouchableHighlight : TouchableNativeFeedback;

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: '모든 게시판',
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView
        contentContainerStyle={styles.contentContainer}
      >
        <TouchableElement onPress={() => navigate('GeneralBoard', { title : '모두의 공원' })}>
          <View style={styles.rowContainer}>
            <Text>모두의 공원</Text>
            <Icon name='arrow-right' size={20}/>
          </View>
        </TouchableElement>
        <Divider color='black' style={{paddingLeft: 10}}/>
        <TouchableElement onPress={() => navigate('ImageBoard', { title : '사진 게시판' })}>
          <View style={styles.rowContainer}>
            <Text>사진 게시판</Text>
            <Icon name='arrow-right' size={20}/>
          </View>
        </TouchableElement>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    // borderWidth:1,
    // borderColor:'red',
  },
  rowContainer: {
    height: 36,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    paddingHorizontal: 10,
  }
})