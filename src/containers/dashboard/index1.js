import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Container, Content, Card, Thumbnail, CardItem, Button, Form, Input, Item, Label, Left, Icon, Header, Title, Right, Body } from 'native-base';


const { width, height } = Dimensions.get("window");
export default class Dashboard extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container style={styles.container} >
                <Header style={{ backgroundColor: '#757575' }} >
                    <Body style={{ flex: 5 }} >
                        <Item style={{ marginLeft: '5%' }}>
                            <Icon style={{ color: 'white' }} name='pin' />
                            <Input style={{ color: 'white' }} placeholderTextColor="#161616" placeholder='Search' />
                        </Item>
                    </Body>
                    <Right style={{}}>
                        <Button transparent>
                            <Icon style={{ fontSize: 30 }} name='add' />
                        </Button>
                        {/* <Button transparent>
                            <Icon style={{ fontSize: 30 }} name='search' />
                        </Button> */}
                    </Right>
                </Header>
                <Content>
                    <View>
                        <Text style={{ fontFamily: 'Ubuntu-M' , fontWeight: 'bold', paddingTop: 20, color: '#161616', fontSize: 16, paddingLeft: '5%', }} >Your Meetups</Text>
                        <ScrollView style={{ flexDirection: 'row' }} directionalLockEnabled={false} horizontal={true} >
                            <Card onPress={() => console.log('hello')} style={{ borderRadius: 10, overflow: 'hidden', marginLeft: 20, width: 200 }} >
                                <Image source={require('../../images/2.jpg')} style={{ height: 150, width: null, }} />
                                <View style={{ backgroundColor: 'rgba(117,117,117,.8)', position: 'absolute', padding: '5%', width: '100%', alignItems: 'center' }} >
                                    <Text style={{ fontFamily: 'Ubuntu-M' , fontSize: 15, color: 'white' }} >
                                        NYC Adventure Cycling
                                    </Text>
                                </View>
                                <View style={{ padding: '4%' }} >
                                    <Text style={{ fontSize: 12 }}>50$</Text>
                                </View>
                                <View style={{ padding: '4%' }} >
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>Today <Text style={{ color: '#757575', fontWeight: 'normal' }} >10:00 AM</Text></Text>
                                </View>
                            </Card>
                            <Card style={{ borderRadius: 10, overflow: 'hidden', marginLeft: 20, width: 200 }} >
                                <Image source={require('../../images/2.jpg')} style={{ height: 150, width: null, }} />
                                <View style={{ backgroundColor: 'rgba(117,117,117,.8)', position: 'absolute', padding: '5%', width: '100%', alignItems: 'center' }} >
                                    <Text style={{ fontFamily: 'Ubuntu-M' , fontSize: 15, color: 'white' }} >
                                        NYC Adventure Cycling
                                    </Text>
                                </View>
                                <View style={{ padding: '4%' }} >
                                    <Text style={{ fontSize: 12 }}>20$</Text>
                                </View>
                                <View style={{ padding: '4%' }} >
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>Today <Text style={{ color: '#757575', fontWeight: 'normal' }} >10:00 AM</Text></Text>
                                </View>
                            </Card>
                            <Card style={{ borderRadius: 10, overflow: 'hidden', marginLeft: 20, width: 200 }} >
                                <Image source={require('../../images/2.jpg')} style={{ height: 150, width: null, }} />
                                <View style={{ backgroundColor: 'rgba(117,117,117,.8)', position: 'absolute', padding: '5%', width: '100%', alignItems: 'center' }} >
                                    <Text style={{ fontFamily: 'Ubuntu-M' , fontSize: 15, color: 'white' }} >
                                        NYC Adventure Cycling
                                    </Text>
                                </View>
                                <View style={{ padding: '4%' }} >
                                    <Text style={{ fontSize: 12 }}>10$</Text>
                                </View>
                                <View style={{ padding: '4%' }} >
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>Today <Text style={{ color: '#757575', fontWeight: 'normal' }} >10:00 AM</Text></Text>
                                </View>
                            </Card>
                        </ScrollView>
                    </View>
                    <View>
                        <Text style={{fontFamily: 'Ubuntu-M' , fontWeight: 'bold', paddingTop: 20, color: '#161616', fontSize: 16, paddingLeft: '5%', }} >Trending</Text>
                        <ScrollView style={{ flexDirection: 'row' }} directionalLockEnabled={false} horizontal={true} >
                            <Card style={{ borderRadius: 10, overflow: 'hidden', marginLeft: 20, width: 200 }} >
                                <Image source={require('../../images/2.jpg')} style={{ height: 150, width: null, }} />
                                <View style={{ backgroundColor: 'rgba(117,117,117,.8)', position: 'absolute', padding: '5%', width: '100%', alignItems: 'center' }} >
                                    <Text style={{ fontFamily: 'Ubuntu-M' , fontSize: 15,  color: 'white' }} >
                                        NYC Adventure Cycling
                                    </Text>
                                </View>
                                <View style={{ padding: '4%' }} >
                                    <Text style={{ fontSize: 12 }}>50$</Text>
                                </View>
                                <View style={{ padding: '4%' }} >
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>Today <Text style={{ color: '#757575', fontWeight: 'normal' }} >10:00 AM</Text></Text>
                                </View>
                            </Card>
                            <Card style={{ borderRadius: 10, overflow: 'hidden', marginLeft: 20, width: 200 }} >
                                <Image source={require('../../images/2.jpg')} style={{ height: 150, width: null, }} />
                                <View style={{ backgroundColor: 'rgba(117,117,117,.8)', position: 'absolute', padding: '5%', width: '100%', alignItems: 'center' }} >
                                    <Text style={{ fontFamily: 'Ubuntu-M' , fontSize: 15,  color: 'white' }} >
                                        NYC Adventure Cycling
                                    </Text>
                                </View>
                                <View style={{ padding: '4%' }} >
                                    <Text style={{ fontSize: 12 }}>20$</Text>
                                </View>
                                <View style={{ padding: '4%' }} >
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>Today <Text style={{ color: '#757575', fontWeight: 'normal' }} >10:00 AM</Text></Text>
                                </View>
                            </Card>
                            <Card style={{ borderRadius: 10, overflow: 'hidden', marginLeft: 20, width: 200 }} >
                                <Image source={require('../../images/2.jpg')} style={{ height: 150, width: null, }} />
                                <View style={{ backgroundColor: 'rgba(117,117,117,.8)', position: 'absolute', padding: '5%', width: '100%', alignItems: 'center' }} >
                                    <Text style={{ fontFamily: 'Ubuntu-M' , fontSize: 15,  color: 'white' }} >
                                        NYC Adventure Cycling
                                    </Text>
                                </View>
                                <View style={{ padding: '4%' }} >
                                    <Text style={{ fontSize: 12 }}>10$</Text>
                                </View>
                                <View style={{ padding: '4%' }} >
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>Today <Text style={{ color: '#757575', fontWeight: 'normal' }} >10:00 AM</Text></Text>
                                </View>
                            </Card>
                        </ScrollView>
                    </View>
               </Content >
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