/**
 * Sample React Native Home
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Fragment, useEffect, useState } from "react";
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  Item, RefreshControl,
} from "react-native";
import Header from '../../components/Header'
import Page from '../../components/Page'
import Hairline from '../../components/Hairline'
import ListItem from './ListItem'

import  {fetchMovieList}  from '../../services/api'
import ListEmptyComponent from "../../components/ListEmptyComponent";

const Home = (props) => {
  const [movieList, setMovieList] = useState([])
  const [pageIndex, setPageIndex] = useState(0)
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(true)

  const { navigation } = props

  useEffect(()=>{
    if(refreshing){
      getMovieList()
      setRefreshing(false)
    }
  },[refreshing])
  const getMovieList = async ()=>{
    // 没有更多了～
    if(pageIndex !== 0 && count === movieList.length){
      return
    }
    setLoading(true)
    const  params = {
      start: pageIndex,
      count: 10,
      new_struct: 1,
      with_review: 1,
      for_mobile: 1
    }
    const data = await  fetchMovieList(params)
    let preList = movieList
    if(pageIndex === 0){
      preList = []
    }
    setMovieList([].concat(preList,data.items))
    setCount(data.total)
    setTimeout(()=>{setLoading(false)},1000)
  }
  const handleRefresh = ()=>{
    setPageIndex(0)
    setRefreshing(true)
  }
  const handleEndReached =  (info) => {
    setPageIndex(movieList.length)
    setRefreshing(true)
  }

  return (
    <Page barStyle={styles.barStyle}>
      <Header title={'豆瓣电影'} color={'#ffffff'} style={styles.barStyle}/>
      <View style={styles.pageContent}>
        <FlatList
          ItemSeparatorComponent={Hairline}
          data={movieList}
          renderItem={ ({ item, index, separators })=>
              <ListItem data = {{item, index,separators,navigation}}
            />}
          onEndReachedThreshold={0.5}
          onEndReached={handleEndReached}
          ListEmptyComponent={ListEmptyComponent}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={handleRefresh} />
          }
          // getItemLayout={(data, index) => (
          //   {length: 300, offset: 500 * index, index}
          // )}
        >
        </FlatList>
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  barStyle:{
    backgroundColor: '#55a6ef'
  },
  pageContent:{
    flex:1,
    marginHorizontal:15,
  },

});

export default Home;
