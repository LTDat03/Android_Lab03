import { Text, View, TouchableOpacity, Image,StyleSheet,TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Index = () => {
  return (
    <LinearGradient colors={["#C7F4F7","#D1F4F6","#E5F4F5","#37D6F8","#00CCF9"]}
      style={{flex:1}}>
      <View style ={styles.title}>
        <Text style={styles.titleText}>CODE</Text>  
      </View>
      <View style ={styles.title}>
        <Text style={styles.subtitle}>VERIFICATION</Text>  
      </View>
      <View style ={styles.title}>
        <Text style={styles.subtitleText}>Enter ontime password sent on ++849092605798</Text>  
      </View>
      <View style ={styles.codeInputContainer}>
        <TextInput style={styles.codeInput}/>
        <TextInput style={styles.codeInput}/>
        <TextInput style={styles.codeInput}/>
        <TextInput style={styles.codeInput}/>
        <TextInput style={styles.codeInput}/>
        <TextInput style={styles.codeInput}/>
      </View>
      <View style={styles.appButtonContainer}>
          <TouchableOpacity style={styles.button}><Text style={styles.textBtn}>VERIFY CODE</Text> </TouchableOpacity>
      </View>
      </LinearGradient>
  );
}

export default Index;

const styles = StyleSheet.create({
   title:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  titleText:{
    fontSize:60,
    fontFamily:'Roboto',
    lineHeight: 70.31,
    fontWeight: 700,
    textAlign: 'center',
  },
  subtitle:{
    fontSize: 20,
    fontFamily:'Roboto',
    lineHeight: 23.44,
    fontWeight: 700,
    textAlign: 'center',
  },
   subtitleText:{
    fontSize: 15,
    fontFamily: 'Roboto',
    lineHeight: 17.58,
    textAlign: 'center',
    fontWeight: 700,
    width:302,
    height:53,
  },
  codeInputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  codeInput:{
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    fontSize: 18,
  },
  appButtonContainer:{
    flex: 1,
    alignItems: "center",
  },
  button:{
    backgroundColor: '#E3C000',
    justifyContent: 'center',
    alignItems: 'center',
    width: 305,
    height: 45
  },
  textBtn:{
    fontFamily: 'Roboto',
    fontSize: 20,
    lineHeight: 23.44,
    textAlign: 'center',
    fontWeight: 700
  },
});