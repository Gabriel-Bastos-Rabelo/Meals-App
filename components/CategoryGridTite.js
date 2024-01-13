import React from 'react'
import {View, Pressable, Text, StyleSheet} from 'react-native'

function CategoryGridTite({category, color, onPress}) {
  return (
    <View style = {[styles.gridItem, {backgroundColor: color}]}>
        <Pressable android_ripple = {{color: '#ccc'}} style = {({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]} onPress={onPress}>
            <View style = {styles.innerContainer}>
              <Text style = {styles.title}>{category}</Text> 
            </View>
        </Pressable>
    </View>
  )
}

export default CategoryGridTite


const styles = StyleSheet.create({
    gridItem: {
       flex: 1,
       margin: 16,
       height: 150,
       borderRadius: 8,
       elevation: 4,
       shadowColor: 'black',
       shadowOpacity: 0.25,
       shadowOffset: {width: 0, height: 2},
       shadowRadius: 8,
       overflow: 'hidden'
    },

    button: {
      flex: 1,
    },

    innerContainer: {
      flex: 1,
      padding: 16,
      alignItems: 'center',
      justifyContent: 'center',
    },

    title: {
      fontWeight: 'bold',
      fontSize: 18
    },


    //used for ios
    buttonPressed: {
      opacity: 0.5
    }


    
})