/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import CarsList from './components/CarLists';
import Header from './components/Header/Header';

const App = () => {
  
  return (
    <SafeAreaView style={styles.container}>
      
      <Header/>

     <CarsList/>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },

})

export default App;
