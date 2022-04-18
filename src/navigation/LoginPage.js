import React, { Component } from 'react';
import { TextInput, StyleSheet, View, Text, Alert, Button } from 'react-native';
import { NavigationService } from '../common';
 
export default class LoginPage extends Component {

  constructor(props) {
    super(props);
  }
 
  state = {
    ID: '',
    PW: '',
    inputID: '',
    inputPW: ''
  }
 
  loginBtn = () => {
    this.setState({ID: this.state.inputID});
    this.setState({PW: this.state.inputPW});
  }
 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}> 로그인 </Text>
        <View style={styles.bodyContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {this.setState({inputID: text})}}
            placeholder="아이디를 입력해주세요."/>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {this.setState({inputPW: text})}}
            placeholder="비밀번호를 입력해주세요."/>
          <Button title="로그인" onPress = {this.loginBtn}/>
          <Text style = {styles.showText}>{" "}</Text>
          <Button title="회원가입" onPress = {()=> NavigationService.navigate('SignupPage', {
                            screen: 'SignupPage',
                            info: 'information'})}/>
          <Text style = {styles.showText}>{this.state.ID}</Text>
          <Text style = {styles.showText}>{this.state.PW}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFEAD0',
    paddingHorizontal: 30,
    flex: 1,
  },
  header: {
    paddingTop: 50,
    alignItems: 'center',
    fontSize: 30,
  },
  bodyContainer: {
    backgroundColor: '#FDF5DC',
    paddingHorizontal: 20,
    marginVertical: 30,
    flex: 1
  },
  textInput: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1
  },
  showText: {
    marginTop: 10,
    fontSize: 25,
  }
})
