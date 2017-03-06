import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ListView,
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

const TouchableElement = Platform.OS === 'ios' ? TouchableHighlight : TouchableNativeFeedback;

export default class GeneralBoardScreen extends Component {
  static navigationOptions = {
    title: ({ state }) => state.params.title,
  };

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      dataSource: ds.cloneWithRows(require('../assets/mock.json').items),
    }
  }

  renderRow(rowData, sectionID, rowID) {
    const { navigate } = this.props.navigation;
    const {
      title,
      userid,
    } = rowData;

    return (
      <TouchableElement onPress={() => navigate('Message', { ...rowData })}>
        <View style={styles.rowContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message} numberOfLines={1}>{userid}</Text>
        </View>
      </TouchableElement>
    )
  }

  renderSeparator(sectionID, rowID) {
    return <View key={`${sectionID}-${rowID}`} style={styles.separator}/>
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
    height: 48,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgray'
  },
  title: {
    fontSize: 14,
  },
  message: {
    fontSize: 12,
    color: 'gray'
  }
})
