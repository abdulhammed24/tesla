import { View, Text,ImageBackground } from 'react-native'
import React from 'react'
import styles from './style'
import StyleButtons from '../StyledButtons'

const CarItems = (props) => {

  const {name,tagText,tagTextCta ,bgImg} = props.car

  return (
    <View style={styles.carContainer}>

<ImageBackground 
source={bgImg}
style={styles.bgImage}
/>
        <View style={styles.heading}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
            {tagText}
            {' '}
            <Text style={styles.subtitleCta}>{tagTextCta}</Text>
          </Text>
          
        </View>

<View style={styles.btnContainer}>

<StyleButtons 
text='Custom order'
type='PRIMARY' 
onPress={()=>{
  console.warn('custom order was pressed')
}} />

<StyleButtons 
text='Existing inventory'
type='SECONDARY'
 onPress={()=>{
   console.warn('existing inventory was pressed')
}} />

</View>
      </View>
  )
}

export default CarItems