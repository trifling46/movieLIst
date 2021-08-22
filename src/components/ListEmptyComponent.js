/**
 * @Description:
 * @author shengling li
 * @date: 2021-08-22 17:14
 */
import React, { Fragment } from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";

const ListEmptyComponent = (props)=> {
  const {  style } = props
  return (
    <View style={[styles.emptyBox, style]} >
      <Text style={styles.emptyText}>暂无数据</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  emptyBox:{
    flex:1 ,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  emptyText:{
    color: '#666666',
    fontSize:25,
  }
})

export  default  ListEmptyComponent
