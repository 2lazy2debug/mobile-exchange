import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, SafeAreaView } from 'react-native';
import { List, ListItem, } from 'react-native-elements';
import styles from '../styles';
import {sha512} from 'js-sha512';



class BittrexScreen extends Component {
	constructor(props) {
   		super(props);
    	this.state = {
      		isLoading: true
    	}
  }

  	gotoBuySell = (rowData) => {
  		this.props.navigation.navigate('BuySellScreen', {...rowData});
  	};

	componentDidMount() {
		let nonce = (new Date).getTime();
		const uri = 'https://bittrex.com/api/v1.1/account/getbalances?apikey='+apikey+'&nonce='+nonce;
		const encrypted = sha512.hmac.create(apisecret);
		encrypted.update(uri);
		encrypted.hex();
		return fetch(uri, {
			headers:{apisign : encrypted}
		}).then((response) => response.json())
		.then((responseJson) => {
			let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
			this.setState({
				isLoading: false,
				dataSource: ds.cloneWithRows(responseJson.result),
			}, function() {
          // do something with new state
          console.log(responseJson.result)
      });
		}).catch((error) => {
			console.log(error);
		})
	}


		render() {
			
		    if (this.state.isLoading) {
      			return (
      				<SafeAreaView style={styles.safeArea}>
	        		<View style={styles.containerDarkTheme}>
	        		<Text style={[styles.textDarkTheme, styles.titleDarkTheme]}>Current balances on Bittrex</Text>
	          		<ActivityIndicator />
	          		</View>
	          		</SafeAreaView>
	      		);
	    	}

	    	return (
	    		<SafeAreaView style={styles.safeArea}>
	      			<View style={styles.containerDarkTheme}>
	      				<Text style={[styles.textDarkTheme, styles.titleDarkTheme]}>Current balances on Bittrex</Text>
	      				<List style={{flex: 1, paddingTop: 20}}>
	        				<ListView
			        			style={styles.listDarkTheme}
				          		dataSource={this.state.dataSource}
				          		renderRow={
				          			(rowData) => 
				          				<ListItem 
				          					style={styles.textDarkTheme}
				          					onPress={() => this.gotoBuySell(rowData)} 
				          					title={<Text style={styles.textDarkTheme}> {rowData.Currency}:  {rowData.Balance}</Text>}
				          				/>
		          					} 
	          					/>
		          		</List>
	          		</View>
          		</SafeAreaView>
	      
	    );

		}
}




export default BittrexScreen;