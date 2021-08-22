/**
 * @Description:
 * @author shengling li
 * @date: 2021-08-22 17:14
 */
import React, { Fragment } from "react";
import {
  StyleSheet,
  View
} from "react-native";

const Hairline = (props)=> {
   const { color, style } = props
   return (
     <View style={[styles.line, style, {color}]} />
  )
}

const styles = StyleSheet.create({
  line:{
    height:0,
    width: '100%',
    borderBottomColor: "rgba(0,0,0,.12)",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
})

export  default  Hairline
