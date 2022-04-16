import {StyleSheet,Dimensions} from 'react-native'

const styles = StyleSheet.create({
    carContainer:{
        width:'100%',
        height:Dimensions.get('window').height,
      },
    
      heading:{
        marginTop:'30%',
        width:'100%',
        alignItems:'center'
      },
    
      title:{
        fontSize:40,
        fontWeight:'bold',
      },
      subtitle:{
        fontSize:16,
        color:'#5c5e62'
      },
      subtitleCta:{
        textDecorationLine:'underline'
      },
    
      bgImage:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        position:'absolute'
      },
      btnContainer:{
          position:'absolute',
          bottom:50,
          width:'100%'
      }
})

export default styles