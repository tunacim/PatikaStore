import React from 'react';
import {SafeAreaView,StyleSheet,Text,View,FlatList, TextInputBase,TextInput,} from 'react-native';
import ProductData from "./data.json"
import Product from './components/product';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function App(){
const renderProduct =({ item })=><Product products={item}/>;
  return(
<SafeAreaView style={styles.container}>
  <View>
    <Text style={styles.headerTitle}>PATIKASTORE</Text>
    <TextInput style={styles.textInput }clearTextOnFocus={true}>Ara...</TextInput>
    
  <FlatList    numColumns={2}
  data={ProductData}
  renderItem={renderProduct}
  />
  </View>
  </SafeAreaView>
    );
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  },
  headerTitle:{
    marginLeft:15,
    fontSize:40,
    color:"purple",
    fontWeight:"bold"
    
  },
  textInput:{
    margin:12,
    height:40,
    borderWidth:0,
    backgroundColor:"#eceff1",
    borderRadius:10,
    padding:10,
    
    
  },

})
export default App;
