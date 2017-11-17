import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './containers/home';
import Login from './containers/login';
import SignUp from './containers/signup';
import Dashboard from './containers/dashboard';
import EventDetails from './containers/dashboard/components/eventdetails';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

const Routes = StackNavigator({
    Home: { screen: Home },
    Login: { screen: Login },
    Signup: { screen: SignUp },
    Dashboard: { screen: Dashboard },
    EventDetails: { screen: EventDetails }
})

export default Routes ;

