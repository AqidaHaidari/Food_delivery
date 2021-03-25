import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
export default function Favorite({name,image,price}) {
  
  return (
    <View style={styles.container}>
       <Image 
        style={styles.image}
        source={{uri: image}}
       />
       <View style={styles.content}>
           <Text style={styles.name}>{name}</Text>
           <Text style={styles.price}>{price}</Text>
       </View>
       <MaterialCommunityIcons 
        style={{alignSelf:"center"}} 
        name="delete"
        size={30}
       />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:"row",
      marginBottom:5,
      borderBottomWidth:"0.1",
      borderBottomColor:"#841548"
     
    },
    image:{
        height:120,
        width:120,
        margin:5
    },
    content:{
        justifyContent:"center",
        marginLeft:5,
        flex:1
    },
    name:{
        color:"green",
        fontSize:18,
        marginBottom:5
    },
    price:{
        color:"red",
        fontSize:16,
    }
  

});
