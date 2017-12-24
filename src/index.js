import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './containers/home';
import Login from './containers/login';
import SignUp from './containers/signup';
import Dashboard from './containers/dashboard/index1';
import Dashboard1 from './containers/dashboard';

const Routes = StackNavigator({
    Home: { screen: Home },
    Login: { screen: Login },
    Signup: { screen: SignUp },
    Dashboard: { screen: Dashboard1 },
    // EventDetails: { screen: EventDetails }
})

export default Routes ;

