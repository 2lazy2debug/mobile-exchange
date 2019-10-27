import React, { Component } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import styles from '../styles';

class HomeScreen extends Component {

  goToLogin = (name) => {
    console.log("button has been pressed. Value of name : " + name.key);
    if (name.key == 'BITTREX'){
   this.props.navigation.navigate('BittrexScreen', {...name});
 }   if (name.key == 'BINANCE'){
   this.props.navigation.navigate('BinanceScreen', {...name});
 }  if (name.key == 'BITFINEX'){
   this.props.navigation.navigate('BitfinexScreen', {...name});
 }  if (name.key == 'BITSTAMP'){
   this.props.navigation.navigate('BitstampScreen', {...name});
 }  if (name.key == 'KRAKEN'){
   this.props.navigation.navigate('KrakenScreen', {...name});
 }  


  };

  render() {
    return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.containerDarkTheme}>
        <Text style={[styles.textDarkTheme, styles.titleDarkTheme]}>MobileExchange </Text>
        <Text style={styles.textDarkTheme}>{"\n"}Please choose the exchange platform you want to connect to{"\n"}</Text>
        <List containerStyle={styles.listDarkTheme}>
        {exchagePlatforms.map((name)  =>(
          <ListItem 
            style={styles.textDarkTheme} 
            title={<Text style={styles.textDarkTheme}> {name.key} </Text>}
            onPress={() => this.goToLogin(name)} />
             ))}
        </List>
      </View>
    </SafeAreaView>
    );
  }
}

const exchagePlatforms = [{key:'BITTREX'},{key:'BINANCE'},{key:'BITFINEX'},{key:'BITSTAMP'},{key:'KRAKEN'} ];

export default HomeScreen;