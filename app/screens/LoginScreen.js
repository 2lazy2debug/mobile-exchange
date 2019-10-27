import React, { Component } from 'react';
import { Text, View, TextInput, SafeAreaView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from '../styles';

 class LoginScreen extends Component {
  render(){
    
    const { key } = this.props.navigation.state.params ;

    return(
      <SafeAreaView style={styles.safeArea}>
      <View style={styles.containerDarkTheme}>
        <Text style={[styles.textDarkTheme, styles.titleDarkTheme]}> {key} </Text>
      </View>
    </SafeAreaView>

    );
  }
}


export default LoginScreen;