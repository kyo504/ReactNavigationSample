import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Divider = ({
  style,
  text,
  textSize,
  color,
  height,
  type,
  thick,
}) => {

  const defaultStyle = StyleSheet.create({
    container: {
      flexDirection: type === 'horizontal' ? 'row' : 'column',
      alignItems: 'center',
      alignSelf: 'stretch',
      flex:1,
    },
    divider: {
      height: type === 'horizontal' ? thick : null,
      width: type === 'vertical' ? thick : null,
      backgroundColor: color,
      flex: 1,
    },
    text: {
      marginHorizontal: type === 'horizontal' ? 5 : 0,
      marginVertical: type === 'vertical' ? 1 : 0,
    },
  });

  renderPlainDivier = function(style) {
    return (
      <View style={[defaultStyle.container, style]}>
        <View style={defaultStyle.divider}></View>
      </View>
    );
  }

  renderDividerWithText = function(style, text) {
    return (
      <View style={[defaultStyle.container, style]}>
        <View style={defaultStyle.divider}></View>
          <Text style={[defaultStyle.text, {fontSize:textSize}]}>{text}</Text>
        <View style={defaultStyle.divider}></View>
      </View>
    );
  }

  return (
    <View>
      {text === null ? renderPlainDivier(style) : renderDividerWithText(style, text)}
    </View>
  )
}

Divider.propTypes = {
  style: PropTypes.object,
  textSize: PropTypes.number,
  text: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  thick: PropTypes.number
};

Divider.defaultProps = {
  textSize: 12,
  text: null,
  color: '#cccccc',
  thick: 1,
  type: 'horizontal'
};

export default Divider;
