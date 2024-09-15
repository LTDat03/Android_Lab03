import {Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const YourApp = () => {
  return (
    <LinearGradient 
      colors={["#C7F4F7","#D1F4F6","#E5F4F5","#37D6F8","#00CCF9"]}
      style={{flex:1}}
    >
        <View style={styles.circleContainer}>
          <View style={styles.circle} ></View>
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>GROW</Text>  
          <Text style={styles.titleText}>YOUR BUSINESS</Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.subtitleText}>We will help you to grow your business using online server</Text>
        </View>
        <View style={styles.appButtonContainer}>
          <TouchableOpacity style={styles.button}><Text style={styles.textBtn}>LOGIN</Text> </TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.textBtn}>SIGN UP</Text> </TouchableOpacity>
        </View>
        <View style={{flex:1}}>
          <Text style={styles.footerText}>HOW WE WORK?</Text>
        </View>
    </LinearGradient>
  );
};

export default YourApp;

const styles = StyleSheet.create({
  circleContainer:{
    marginTop:30,
    flex:2,
    alignItems:'center',
    justifyContent: 'center',
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
    justifyContent:'center',
    alignItems:'center'
  },
  titleText:{
    fontSize:25,
    fontFamily:'Roboto',
    lineHeight: 29.3,
    fontWeight: 700,
    textAlign: 'center',
  },  
  subtitleText:{
    fontSize: 15,
    fontFamily: 'Roboto',
    lineHeight: 17.58,
    textAlign: 'center',
    fontWeight: 700
  },
  appButtonContainer:{
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-around',
    width: '100%',
  },
  button:{
    backgroundColor: '#E3C000',
    justifyContent: 'center',
    alignItems: 'center',
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
  footerText:{
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 21.09,
    textAlign: 'center'
  }
});
