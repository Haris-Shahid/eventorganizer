import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Routes from './src';
import * as firebase from 'firebase';
// // const instructions = Platform.select({
// //   ios: 'Press Cmd+R to reload,\n' +
// //     'Cmd+D or shake for dev menu',
// //   android: 'Double tap R on your keyboard to reload,\n' +
// //     'Shake or press menu button for dev menu',
// // });

export default class App extends Component {
    constructor(){
        super();
        console.disableYellowBox = true;
        
      }
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyAZKBZFrLXokfuQWam9heiANq5sPI4rtI8",
            authDomain: "tourist-guide-739cc.firebaseapp.com",
            databaseURL: "https://tourist-guide-739cc.firebaseio.com",
            projectId: "tourist-guide-739cc",
            storageBucket: "tourist-guide-739cc.appspot.com",
            messagingSenderId: "116362554694"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Routes />
        );
    }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   }
// });
