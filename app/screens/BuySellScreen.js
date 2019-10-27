import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, SafeAreaView, TextInput, KeyboardAvoidingView  } from 'react-native';
import { Button, List, ListItem } from 'react-native-elements';
import styles from '../styles';
import {sha512} from 'js-sha512';

class BuySellScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      tickers: 'init'
    }
  }

  componentDidMount() {

    const {Currency} = this.props.navigation.state.params;
    const uri = 'https://bittrex.com/api/v1.1/public/getticker?market=BTC-'+Currency;
    return fetch(uri).then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        tickers: responseJson.result

      }, function() {
        console.log(responseJson.result);
            // do something with new state
          });
    }).catch((error) => {
      console.log(error);
    })
  }


  render(){

    const { Currency, Balance, Available, Pending } = this.props.navigation.state.params ;

    if (this.state.isLoading) {
      return (
        <SafeAreaView style={styles.safeArea}>
        <View style={styles.containerDarkTheme}>
        <Text style={[styles.textDarkTheme, styles.titleDarkTheme]}>Chosen currency :  {Currency} </Text>
        <Text style={styles.textDarkTheme}>Current balance : Loading... </Text>

        </View>
        </SafeAreaView>
        );
    }

    return(

      <SafeAreaView style={styles.safeArea}>
      <View style={styles.containerDarkTheme}>
      <Text style={[styles.textDarkTheme, styles.titleDarkTheme]}>Summary for {Currency} </Text>
      <Text style={[styles.textDarkTheme, styles.subtitleDarkTheme]}>Available balance : {Available} {Currency} </Text>
      <Text style={[styles.textDarkTheme, styles.subtitleDarkTheme]}>Total balance : {Balance} {Currency} {"\n"}</Text>
      <Text style={styles.textDarkTheme}>Bid : {this.state.tickers.Bid} BTC</Text> 
      <Text style={styles.textDarkTheme}>Ask : {this.state.tickers.Ask} BTC</Text> 
      <Text style={styles.textDarkTheme}>Last : {this.state.tickers.Last} BTC</Text> 

      <BuySellComponent currency={Currency} balance={Balance} last={this.state.tickers.Last} />
      </View>

      </SafeAreaView>

      );
  }
}

/*------------------------------------------------------------------------------------------------------------------*/

class BuySellComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricePerCoin: this.props.last + "",
      desiredAmount: '1',
      transactionPrice: '',
      availableBTCs: ''
    }
  }

  componentDidMount() {
    let nonce = (new Date).getTime();
    const uri = 'https://bittrex.com/api/v1.1/account/getbalance?apikey='+apikey+'&nonce='+nonce+'&currency=BTC';
    const encrypted = sha512.hmac.create(apisecret);
    encrypted.update(uri);
    encrypted.hex();
    return fetch(uri, {
      headers:{apisign : encrypted}
    }).then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        availableBTCs: responseJson.result.Available
      }, function() {
    
      });
    }).catch((error) => {
      console.log(error);
    })
  }

  multiply = () => {
    console.log("Got into multiply!");
    this.setState({
      transactionPrice: Number(this.state.pricePerCoin) * Number(this.state.desiredAmount)
    });
  };

  render() {

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.containerDarkTheme}>
        <Text style={styles.textDarkTheme}>{"\n"}Buy {this.props.currency}{"\n"}</Text>

        {/*DESIRED AMOUNT OF COIN YOU'RE BUYING OR SELLING*/}
        <Text style={styles.textDarkTheme}>Desired amount: </Text>
        <TextInput placeholderTextColor='#fff' 
        style={[styles.buycompDarkTheme, styles.textDarkTheme]}  
        defaultValue={this.state.desiredAmount} 
        onChangeText={(text) => this.setState({desiredAmount: text})} 

        /> 

        {/*PRICE IN BTC PER COIN*/}
        <Text style={styles.textDarkTheme}>{"\n"}Price per coin (BTC):</Text>
        <TextInput placeholderTextColor='#fff' 
        style={[styles.buycompDarkTheme, styles.textDarkTheme]} 
        defaultValue= {this.state.pricePerCoin}
        onChangeText={(text) => this.setState({pricePerCoin: text})} 
        /> 

        {/*Transaction amount*/}
        <Text style={styles.textDarkTheme}>{"\n"}Total (BTC):</Text>
        <TextInput placeholderTextColor='#fff' 
        style={[styles.buycompDarkTheme, styles.textDarkTheme]} 
        onFocus= {() => this.multiply()}
        value={this.state.transactionPrice}
        /> 

        {/*Calculating the total amount of transaction*/}
        <Text style={styles.textDarkTheme}>{"\n"}Available BTC: {this.state.availableBTCs}</Text>
        <Text style={styles.textDarkTheme}>{"\n"}Transaction amount : {this.state.transactionPrice}</Text>

        <Button buttonStyle={styles.buycompDarkTheme} onPress={() => this.buy()} title="Buy" color='#333'  />
        <Button buttonStyle={styles.buycompDarkTheme} onPress={() => this.sell()} title="Sell" color='#333'  />
      </KeyboardAvoidingView>
    );
  }
}


export default BuySellScreen;