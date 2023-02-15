import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Styles from './style/styles'
import Svg, { Image } from  'react-native-svg';


export class App extends Component {
  render() {
    const {height,width} = Dimensions.get('window');
    

    
   
    return (
      <View style = {Styles.container}>
        <View style = {StyleSheet.absoluteFill}>
          <Svg height={height} width={width}>
            <Image href={require('./image/backgroundLogin.jpg') } 
              width = {width}
              height={height}
              preserveAspectRatio="xMidYMid slice"/>
          </Svg>
         
        </View>
        <View style ={Styles.bottomContainer}>
          <TouchableOpacity >
            <View style ={Styles.buttonLogin}>
              <Text style = {Styles.buttonText}>LOGIN</Text>
            </View>
          </TouchableOpacity>
          
          
            <View style ={Styles.button}>
              <Text style ={Styles.txtbtnrgt}>Don't have account?</Text>
              <TouchableOpacity>
              <Text style={Styles.txtRegister}>Register</Text>
              </TouchableOpacity>   
            </View>
         
         
         
          {/* <View style={Styles.formInputContainer}>
            <TextInput placeholder="Email" placeholderTextColor="#aaa69d" style = {Styles.textInput}/>
            <TextInput placeholder="FullName" placeholderTextColor="#aaa69d" style = {Styles.textInput}/>
            <TextInput placeholder="Password" placeholderTextColor="#aaa69d" style = {Styles.textInput}/>
            <View style={Styles.formBottom}>
              <Text style ={Styles.buttonText}>LOGIN</Text>
            </View>
          </View> */}
        </View>
      </View>
    )
  }
}

export default App
