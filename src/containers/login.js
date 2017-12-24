import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import { Container, Content, CardItem, Button, Form, Input, Item, Label , Left, Icon, } from 'native-base';
import * as firebase from 'firebase';

const { width, height } = Dimensions.get("window");
export default class Login extends Component {
    static navigationOptions = {
        title: 'Log In',
        headerStyle: { backgroundColor: '#ca313a', },
        headerTitleStyle: { color: 'white', alignSelf: 'center', paddingRight: 50  },
        headerTintColor: 'white',
    };

    constructor(){
        super();
        this.state = {
            Lemail: '',
            Lpass: '',
            passcheck: true
        }
    }
    
    componentWillMount(){
        console.log(this.props.navigation.state.params)
    }
    
login(){
    const { navigate } = this.props.navigation ; 
    const { Lemail, Lpass } = this.state ;
    // const { email, pass, fname, lname } = this.props.navigation.state.params ;
    
    if(!Lemail){
        alert('Email Field Is Required')
    }else if(Lemail.indexOf('@') == -1 || Lemail.indexOf('.com') == -1){
        alert('Email is in Wrong Format')
    }else if(!Lpass){
       alert('Password Field Is Required')
    }
    // else if(this.props.navigation.state.params){
    //     if(this.props.navigation.state.params.email !== Lemail){
    //         alert("Your Email is not Registered")
    //     }else if(this.props.navigation.state.params.pass !== Lpass){
    //         alert("You Type Wrong Password")
    //     }
        else{
            firebase.auth()
            .signInWithEmailAndPassword(Lemail, Lpass)
            .then((user) => {
                console.log('LOgin')
                ToastAndroid.show("Welcome" , ToastAndroid.SHORT);
                navigate('Dashboard');
            })
            .catch((error) => {
                var errorMessage = error.message;
                alert( errorMessage )
            });
            // ToastAndroid.show(`Welcome ${this.props.navigation.state.params.fname} ${this.props.navigation.state.params.lname}`, ToastAndroid.SHORT);
            // navigate('Dashboard');
        // }
    }
    // else{
    //     alert("Please Registered yourself first")
    // }


}

    render() {
        const { Lemail, Lpass, passcheck } = this.state ;
        
        return (
            <Container style={styles.container} >
                <Content>
                    <Form style={{ paddingTop: '3%', width: '94%', marginHorizontal: '3%' }} >
                        <Item floatingLabel style={{ borderBottomColor: '#2c3e50',marginHorizontal: '4%' }}>
                            <Label style={{ color: '#2c3e50',paddingLeft: '1%' }} >Email</Label>
                            <Input ref="1" keyboardType="email-address" autoCapitalize="none" autoCorrect={false} onSubmitEditing={() => this.refs.Password._root.focus() } returnKeyType="next" value={Lemail} onChangeText={(Lemail) => this.setState({Lemail})} style={{ color: '#ca313a' }} type="text" />
                        </Item>
                        <Item style={{ borderBottomColor: '#2c3e50', marginHorizontal: '4%' }}>
                            {/* <Label style={{ color: '#ca313a' }} >Password</Label> */}
                            <Input value={Lpass}  ref='Password'  onChangeText={(Lpass) => this.setState({Lpass})} placeholder="Password" placeholderTextColor='#2c3e50' style={{ color: '#ca313a' }} type="text" secureTextEntry={passcheck} />
                            {
                                passcheck? <Icon style={{color: '#757575'}} onPress={() => this.setState({passcheck: !passcheck})} name='ios-eye-off' />
                                : <Icon style={{color: '#ca313a'}} onPress={() => this.setState({passcheck: !passcheck})} name='ios-eye' />
                            }  
                        </Item>
                        <Item style={{borderBottomColor: 'transparent' , justifyContent: 'center', marginHorizontal: '4%'}} >
                            <Button onPress={ this.login.bind(this) } style={{ borderRadius: 5, width: '100%',justifyContent: 'center', marginTop: '5%', backgroundColor: '#2c3e50' }} >
                                <Text style={{ color: 'white', fontWeight: 'bold' }} >LOG IN</Text>
                            </Button>
                        </Item>
                        <Item style={{borderBottomColor: 'white', justifyContent: 'center',marginHorizontal: '4%'}} >
                            <TouchableOpacity onPress={() => alert('forget password')} style={{ justifyContent: 'center', alignItems: 'center', marginTop: '5%' }} >
                                <Text style={{ color: '#2c3e50' }} >Forgot password?</Text>
                            </TouchableOpacity>
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