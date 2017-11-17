import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions, Text, TouchableOpacity, ToastAndroid, } from 'react-native';
import { Container, Content, CardItem, Button, Item, Label, Input, Form, } from 'native-base';

const { width, height } = Dimensions.get("window");
export default class SignUp extends Component {
    static navigationOptions = {
        title: 'Sign Up',
        headerStyle: { backgroundColor: '#ca313a' },
        headerTitleStyle: { color: 'white', alignSelf: 'center' },
        headerTintColor: 'white',
        headerLeft: null,
    };
    
    constructor(){
        super();
        this.state = {
            fname: '',
            lname: '',
            email: '',
            pass: '',
            pass1: '', 
            showToast: false
        } 
    }
    
    validateSignup(){
        const { fname, lname, email, pass, pass1 } = this.state ;
        const { navigate } = this.props.navigation;
        if(!fname){
            alert('First Name Field Is Required')
        }else if(!lname){
            alert('Last Name Field Is Required')
        }else if(!email){
            alert('Email Field Is Required')
        }else if(email.indexOf('@') == -1 || email.indexOf('.com') == -1){
            alert('Email is in Wrong Format')
        }else if(!pass){
           alert('Password Field Is Required')
        }else if(!pass1){
           alert('Retype Password Field Is Required')
        }else if( pass !== pass1){
            alert("Your Password Doesn't Match")
        }else if( pass.length < 6 ){
            alert("Your Password is Too Short")
        }else{
            let userdetail = { fname, lname, email, pass, pass1}
            ToastAndroid.show('Account Created.', ToastAndroid.SHORT);
            navigate('Login', userdetail);
        }
    }

    render() {
        const { fname, lname, email, pass, pass1 } = this.state ;
        return (
            <Container style={styles.container} >
                <Content>
                    <Form style={{ paddingTop: '3%', width: '95%', }} >
                        <Item floatingLabel style={{ borderBottomColor: '#2c3e50' }}>
                            <Label style={{ color: '#2c3e50' }} >First Name</Label>
                            <Input onChangeText={(fname)=> this.setState({fname})} value={fname} style={{ color: '#ca313a' }} type="text" />
                        </Item>
                        <Item floatingLabel style={{ borderBottomColor: '#2c3e50' }}>
                            <Label style={{ color: '#2c3e50' }} >Last Name</Label>
                            <Input onChangeText={(lname)=> this.setState({lname})} value={lname} style={{ color: '#ca313a' }} type="text" />
                        </Item>
                        <Item floatingLabel style={{ borderBottomColor: '#2c3e50' }}>
                            <Label style={{ color: '#2c3e50' }} >Email</Label>
                            <Input onChangeText={(email)=> this.setState({email})} value={email} style={{ color: '#ca313a' }} type="text" />
                        </Item>
                        <Item floatingLabel style={{ borderBottomColor: '#2c3e50' }}>
                            <Label style={{ color: '#2c3e50' }} >Password</Label>
                            <Input onChangeText={(pass)=> this.setState({pass})} value={pass} style={{ color: '#ca313a' }} type="text" secureTextEntry={true} />
                        </Item>
                        <Item floatingLabel style={{ borderBottomColor: '#2c3e50' }}>
                            <Label style={{ color: '#2c3e50' }} >Retype Password</Label>
                            <Input onChangeText={(pass1)=> this.setState({pass1})} value={pass1} style={{ color: '#ca313a' }} type="text" secureTextEntry={true} />
                        </Item>
                        <Item style={{ borderBottomColor: 'white', justifyContent: 'center' }} >
                            <Button onPress={ this.validateSignup.bind(this) } style={{ borderRadius: 5, width: '95%', alignSelf: 'center', justifyContent: 'center', marginTop: '5%', backgroundColor: '#2c3e50' }} >
                                <Text style={{ color: 'white', fontWeight: 'bold' }} >SIGN UP</Text>
                            </Button>
                        </Item>
                    </Form>
                </Content>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});