import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions, ScrollView, TouchableOpacity, Text, } from 'react-native';
import * as nb from 'native-base';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';

const { width, height } = Dimensions.get("window");

export default class Page1 extends Component {

    render() {
        return (
            <nb.Container style={styles.container} >
                <nb.Content>
                    <View>
                        <Text style={{ fontFamily: 'Ubuntu-M', fontWeight: 'bold', paddingTop: '2%', color: '#161616', fontSize: 20, paddingLeft: '5%', }} >Trending</Text>
                        <nb.Card style={{ width: '90%', alignSelf: 'center', backgroundColor: 'white' }} >
                            <Image source={require('../../../images/2.jpg')} style={{ height: 200, width: null, }} />
                            <View style={{ position: 'absolute', width: '100%', height: 200, }} >
                                <View style={{ flex: 1, padding: '5%', alignItems: 'flex-end' }} >
                                    <IconFontAwesome style={{ fontSize: 25, color: 'white' }} name='star-o' />
                                </View>
                                <View style={{ flex: 1, padding: '5%', justifyContent: 'flex-end' }} >
                                    <Text style={{ fontFamily: 'Ubuntu-M', fontSize: 25, color: 'white' }} >Classical Revolution</Text>
                                    <Text style={{ fontFamily: 'Ubuntu-M', color: '#ca313a', fontSize: 15 }} >Classical Revolution</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', }} >
                                <nb.Button large style={{ flex: 1, padding: 10, justifyContent: 'center', backgroundColor: '#ca313a' }} >
                                    <View style={{ alignItems: 'center' }} >
                                        <Text style={{ color: 'white', fontFamily: 'Ubuntu-M', fontWeight: 'bold', fontSize: 17 }} >03:00</Text>
                                        <Text style={{ color: 'white', fontFamily: 'Ubuntu-M', }} >PM</Text>
                                    </View>
                                </nb.Button>
                                <View style={{ flex: 3, justifyContent: 'center' ,paddingLeft: '2%' , }} >
                                    <Text style={{ fontFamily: 'Ubuntu-M',fontSize: 15 }} >Lorem Ipsum</Text>
                                    <Text style={{ fontFamily: 'Ubuntu-M',fontSize: 13 }} >Lorem Ipsum</Text>
                                </View>
                                <View style={{ flex: 2,flexDirection: 'row', }} >
                                    <TouchableOpacity style={{flex:1, justifyContent: 'center', alignItems: 'center'}} >
                                        <IconEntypo style={{fontSize: 25}} name='share' />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{flex:1, justifyContent: 'center', alignItems: 'center',}} >
                                        <IconEntypo style={{fontSize: 25}} name='price-tag' />
                                    </TouchableOpacity>
                                </View> 
                            </View>
                        </nb.Card>
                    </View>
                    <View>
                        <Text style={{ fontFamily: 'Ubuntu-M', fontWeight: 'bold', paddingTop: '2%', color: '#161616', fontSize: 20, paddingLeft: '5%', }} >Trending</Text>
                        <nb.Card style={{ width: '90%', alignSelf: 'center', backgroundColor: 'white' }} >
                            <Image source={require('../../../images/2.jpg')} style={{ height: 200, width: null, }} />
                            <View style={{ position: 'absolute', width: '100%', height: 200, }} >
                                <View style={{ flex: 1, padding: '5%', alignItems: 'flex-end' }} >
                                    <IconFontAwesome style={{ fontSize: 25, color: 'white' }} name='star-o' />
                                </View>
                                <View style={{ flex: 1, padding: '5%', justifyContent: 'flex-end' }} >
                                    <Text style={{ fontFamily: 'Ubuntu-M', fontSize: 25, color: 'white' }} >Classical Revolution</Text>
                                    <Text style={{ fontFamily: 'Ubuntu-M', color: '#ca313a', fontSize: 15 }} >Classical Revolution</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', }} >
                                <nb.Button large style={{ flex: 1, padding: 10, justifyContent: 'center', backgroundColor: '#ca313a' }} >
                                    <View style={{ alignItems: 'center' }} >
                                        <Text style={{ color: 'white', fontFamily: 'Ubuntu-M', fontWeight: 'bold', fontSize: 17 }} >03:00</Text>
                                        <Text style={{ color: 'white', fontFamily: 'Ubuntu-M', }} >PM</Text>
                                    </View>
                                </nb.Button>
                                <View style={{ flex: 3, justifyContent: 'center' ,paddingLeft: '2%' , }} >
                                    <Text style={{ fontFamily: 'Ubuntu-M',fontSize: 15 }} >Lorem Ipsum</Text>
                                    <Text style={{ fontFamily: 'Ubuntu-M',fontSize: 13 }} >Lorem Ipsum</Text>
                                </View>
                                <View style={{ flex: 2,flexDirection: 'row', }} >
                                    <TouchableOpacity style={{flex:1, justifyContent: 'center', alignItems: 'center'}} >
                                        <IconEntypo style={{fontSize: 25}} name='share' />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{flex:1, justifyContent: 'center', alignItems: 'center',}} >
                                        <IconEntypo style={{fontSize: 25}} name='price-tag' />
                                    </TouchableOpacity>
                                </View> 
                            </View>
                        </nb.Card>
                    </View>
                    <View>
                        <Text style={{ fontFamily: 'Ubuntu-M', fontWeight: 'bold', paddingTop: '2%', color: '#161616', fontSize: 20, paddingLeft: '5%', }} >Trending</Text>
                        <nb.Card style={{ width: '90%', alignSelf: 'center', backgroundColor: 'white' }} >
                            <Image source={require('../../../images/2.jpg')} style={{ height: 200, width: null, }} />
                            <View style={{ position: 'absolute', width: '100%', height: 200, }} >
                                <View style={{ flex: 1, padding: '5%', alignItems: 'flex-end' }} >
                                    <IconFontAwesome style={{ fontSize: 25, color: 'white' }} name='star-o' />
                                </View>
                                <View style={{ flex: 1, padding: '5%', justifyContent: 'flex-end' }} >
                                    <Text style={{ fontFamily: 'Ubuntu-M', fontSize: 25, color: 'white' }} >Classical Revolution</Text>
                                    <Text style={{ fontFamily: 'Ubuntu-M', color: '#ca313a', fontSize: 15 }} >Classical Revolution</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', }} >
                                <nb.Button large style={{ flex: 1, padding: 10, justifyContent: 'center', backgroundColor: '#ca313a' }} >
                                    <View style={{ alignItems: 'center' }} >
                                        <Text style={{ color: 'white', fontFamily: 'Ubuntu-M', fontWeight: 'bold', fontSize: 17 }} >03:00</Text>
                                        <Text style={{ color: 'white', fontFamily: 'Ubuntu-M', }} >PM</Text>
                                    </View>
                                </nb.Button>
                                <View style={{ flex: 3, justifyContent: 'center' ,paddingLeft: '2%' , }} >
                                    <Text style={{ fontFamily: 'Ubuntu-M',fontSize: 15 }} >Lorem Ipsum</Text>
                                    <Text style={{ fontFamily: 'Ubuntu-M',fontSize: 13 }} >Lorem Ipsum</Text>
                                </View>
                                <View style={{ flex: 2,flexDirection: 'row', }} >
                                    <TouchableOpacity style={{flex:1, justifyContent: 'center', alignItems: 'center'}} >
                                        <IconEntypo style={{fontSize: 25}} name='share' />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{flex:1, justifyContent: 'center', alignItems: 'center',}} >
                                        <IconEntypo style={{fontSize: 25}} name='price-tag' />
                                    </TouchableOpacity>
                                </View> 
                            </View>
                        </nb.Card>
                    </View>
                </nb.Content>
            </nb.Container>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dedfe4'
    },
});