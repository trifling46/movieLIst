/**
 * @Description: detail
 * @author shengling li
 * @date: 2021-08-28 17:39
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

import  {fetchMovieList}  from '../../services/api'


const Detail: () => Node = () => {
    const [movieList, setMovieList] = useState([])
    const [pageIndex, setPageIndex] = useState(0)
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(false)
    const [refreshing, setRefreshing] = useState(true)


    return (
        <Page barStyle={styles.barStyle}>
            <Header title={'详情'} color={'#ffffff'} style={styles.barStyle}/>
            <View>
                <Text> detail</Text>
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

export default Detail;
