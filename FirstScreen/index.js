import React from 'react';
import {Text, View,StyleSheet,TouchableOpacity } from 'react-native';

const YourApp = () => {
  return (
    <View
      style={styles.container}>
      <View style={styles.circleContainer}>
        <View style={styles.circle} ></View>
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>GROW</Text> 
        <Text style={styles.titleText}>YOUR BUSINESS</Text>
      </View>
      <View style={styles.title}>
        <Text style = {styles.basicText}>We will help you to grow your business using online server</Text>
      </View>
      <View style={styles.appButtonContainer}>
        <TouchableOpacity style={styles.button}><Text style={styles.textBtn}>LOGIN</Text> </TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.textBtn}>SIGN UP</Text> </TouchableOpacity>
      </View>
    </View>
  );
};

export default YourApp;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    backgroundColor: '#00CCF9',
    alignItems: 'center'
  },
  circleContainer:{
    flex:2,
    alignItems:'center',
    justifyContent: 'center'
  },
  circle:{
    width:140,
    height:140,
    borderRadius: 100,
    borderWidth: 15,
    borderColor: 'black',
    backgroundColor: 'transparent'
  },
  title:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText:{
    fontFamily: 'Roboto',
    fontWeight: 700,
    fontSize: 25,
    textAlign: 'center',
    lineHeight: 29.3
  },
  basicText:{
    fontFamily: 'Roboto',
    fontWeight: 700,
    fontSize: 15,
    lineHeight: 17.58,
    textAlign: 'center'
  },
  appButtonContainer:{
    flex: 1,
    width: '100%',
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: "center"
  },
  button:{
    borderRadius: 10,
    backgroundColor: '#E3C000',
    justifyContent: 'center',
    alignContent: 'center',
    width: 119,
    height: 48
  },
  textBtn:{
    fontFamily: 'Roboto',
    fontSize: 20,
    lineHeight: 23.44,
    textAlign: 'center',
    fontWeight: 700
  },
})