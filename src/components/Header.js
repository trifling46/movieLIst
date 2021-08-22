/**
 * @Description:
 * @author shengling li
 * @date: 2021-08-21 17:52
 */
import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import IconSet from "./IconSet";
import icons from '../assets/fonts/icons'

const Header = (props) => {
  const {style = {}, title, color, onBack} = props
  const colorStyle = {color:color}

  const handleBack =()=> {
    onBack && onBack()
  }
  return (
    <>
      <View style={[styles.header,style]}>
        <TouchableOpacity onPress={handleBack} style={styles.backIcon}>
          <IconSet name={icons.back} size={30} color={color}>{title}</IconSet>
        </TouchableOpacity>
        <Text style={[styles.title,colorStyle]}>{title}</Text>
      </View>
      <View style={styles.fillHeader} />
    </>
  );
};

const styles = StyleSheet.create({
  header:{
    ...StyleSheet.absoluteFill,
    height:40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#666666'
  },
  fillHeader:{
    height:40
  },
  backIcon:{
    position:'absolute',
    left:5,
    top:6
  },
  title:{
    fontSize: 22,
  },
})

export default Header;
