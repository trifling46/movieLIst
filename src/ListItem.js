/**
 * @Description:
 * @author shengling li
 * @date: 2021-08-22 14:52
 */
import React, { Fragment, useEffect, useState } from "react";
import { View ,Text, StyleSheet,Image} from "react-native";


const ListItem = ({ item, index, separators })=>{
  return (
   <View style={styles.itemBox}>
     <Image style={styles.posters} source={{uri:item.cover_url}}/>
     <View>
       <View style={styles.titleBox}>
         <Text style={styles.title}>{item.title}</Text>
         <Text style={styles.year}>({item.year})</Text>
       </View>
       <View>
         <Text style={styles.rating}>{item.rating.value}</Text>
       </View>
       <View>
         <Text style={styles.subTitle}>{item.card_subtitle}</Text>
       </View>
     </View>
   </View>
  );
}
const styles = StyleSheet.create({
  itemBox:{
    flexDirection:'row',
    flex:1,
    paddingVertical:20,
    marginBottom:1
  },
  posters:{
    height:80,
    width:112,
    marginRight:15,
  },
  titleBox:{

    flexDirection: 'row',
  },
  title:{
    color: '#000000',
    fontSize:17,
  },
  year:{
    fontSize:17,
    color: "rgb(129, 129, 129)",
    marginLeft:5,
  },
  rating:{
    color: 'rgba(0,0,0,.5)',
    fontSize:12,
    marginTop: 2,
    marginBottom: 2,
  },
  subTitle:{
    fontSize: 15,
    lineHeight:18,
    color: '#191919'
  },
})
export default ListItem
