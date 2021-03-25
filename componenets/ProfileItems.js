
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

export default function FavoriteItems({name,value}) {
   
  return (
    <View style={styles.container}>
       <Text style={styles.txt}>{name}</Text>
       <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
   
  },
  txt:{
      fontWeight: "bold",
      fontSize:16,
      marginTop:8
  }
  
    
});
