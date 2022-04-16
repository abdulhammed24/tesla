import { View, Text,StyleSheet,FlatList,Dimensions } from 'react-native'
import React from 'react'
import cars from './cars'
import CarItems from '../CarItems/CarItems'

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
      data={cars}
      renderItem={({item}) => <CarItems car={item} /> }
      showsVerticalScrollIndicator={false}
      snapToAlignment={'start'}
      decelerationRate={'fast'}
      snapToInterval={Dimensions.get('window').height}
      />
    </View>
  )
}

const styles =StyleSheet.create({
container:{
    width:'100%'
}
})

export default CarsList