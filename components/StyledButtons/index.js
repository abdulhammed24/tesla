import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const StyleButtons = ({text,onPress,type}) => {

  return (
    <View style={styles.container}>

      <Pressable 
      style={[styles.button, styles[`button_${type}`]]}
      onPress={onPress}
      >

        <Text 
        style={[styles.text, styles[`text_${type}`]]}>{text}
        </Text>

      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    padding:10,
  },

button:{
  height:40,
  borderRadius:20,
  justifyContent:'center',
  alignItems:'center'
},

button_PRIMARY:{
  backgroundColor:'#171a20cc',

},

button_SECONDARY:{
  backgroundColor: '#ffffff',
},

text:{
  fontSize:12,
  fontWeight:'bold',
  textTransform:'uppercase'
},

text_PRIMARY:{
  color:'#fff'
},

text_SECONDARY:{
  color:'#000',
    },
  
    
})

export default StyleButtons