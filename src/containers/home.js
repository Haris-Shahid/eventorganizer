import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions, Text, TouchableOpacity } from 'react-native';
import { Container, Content, CardItem, Button , Textarea} from 'native-base';
import img from '../images/2.jpg';
import logo from '../images/emlogo.png';

const { width, height } = Dimensions.get("window");
export default class App extends Component {
    static navigationOptions = { title: 'Welcome', header: false };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Container style={[styles.container, {backgroundColor:'linear-gradient(135deg, rgba(217,30,24,0.9) 0%, rgba(255,102,0,0.9) 100%)', }]} >
                    <Image style={[styles.pic, {opacity: .2}]} source={img} /> 
                </Container>
                <Container style={{ position: 'absolute', flex: 1, }}>
                    <Container style={{ flex: 1, justifyContent: 'center'}} >
                        {/* <Image style={{ width: '80%', height: '20%',marginLeft:'10%', marginRight: '10%' }} source={logo} /> */}
                        <Text style={{color:'white', justifyContent: 'center', alignSelf:'center', fontSize: 30, fontWeight: 'bold',}} >
                            fitnessconnect.solutions
                        </Text>
                    </Container>
                    <Container style={{ flex: 1, width, alignItems: 'center', justifyContent: 'center', marginTop: '10%' , }} >
                        <Button onPress={()=> navigate('Signup') } style={{ width: '90%', alignSelf: 'center' ,justifyContent: 'center'  }} light rounded>
                            <Text style={{ color: 'red', fontWeight: 'bold' }} >SIGN UP</Text>
                        </Button>
                        <TouchableOpacity onPress={() => navigate('Login')} style={{ justifyContent: 'center', alignItems: 'center',marginTop: '5%' }} >
                            <Text style={{ color: 'white' }} >ALREADY A MEMBER? LOGIN</Text>
                        </TouchableOpacity>

                    </Container>
                </Container>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pic: {
        flex: 1
    },
});