import React from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';

const IconSet = (props) => {
  const {style = {}, size, name ,color} = props
  const fontStyle = {
    fontSize: size,
    color: color,
  }
  return (
    <Text style={[styles.iconFont,style, {...style, ...fontStyle,}]}>{name}</Text>
  );
};

const styles = {
  iconFont:{
    fontFamily: 'iconfont',
    fontSize: 30,
  }
}

export default IconSet;
