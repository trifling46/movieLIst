/**
 * @Description: page
 * @author shengling li
 * @date: 2021-08-21 17:52
 */
 import React, { Fragment } from "react";
 import {
  StyleSheet,
  SafeAreaView, StatusBar,
} from "react-native";

 const Page = (props) => {
   const { children , barStyle} = props

   return (
     <Fragment>
       <SafeAreaView style={{flex: 0,...barStyle}} />
       <SafeAreaView style={[styles.page]}>
         {children}
       </SafeAreaView>
       <SafeAreaView style={{flex: 0 }} />
     </Fragment>
   );
 };

 const styles = StyleSheet.create({
    page:{
     flex: 1,
   }
 })

 export default Page;
