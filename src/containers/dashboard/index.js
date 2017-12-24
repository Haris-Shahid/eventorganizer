import React, { Component } from 'react';
import { StyleSheet, StatusBar, DrawerLayoutAndroid, View, Image, Dimensions, ScrollView, TouchableOpacity, Text } from 'react-native';
import * as nb from 'native-base';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import Page1 from './components/page1'
import Page2 from './components/page2'
import Page3 from './components/page3'

const { width, height } = Dimensions.get("window");
export default class Dashboard1 extends Component {
    static navigationOptions = {
        header: null
    };
    openDrawer = () => { this.refs['myDrawer'].openDrawer(); }
    closeDrawer = () => { this.refs['myDrawer'].closeDrawer(); }
    render() {
        var navigationView = (
            <View>
                <View style={{ width: '100%', height: '30%' , backgroundColor: '#757575' , alignItems: 'center', justifyContent: 'center' }} >
                    <nb.Thumbnail source={require('../../images/profile.png')} />
                    <Text style={{marginTop: '5%' , color: 'white', fontSize: 20 }} >User Name</Text>
                </View>
                <View>
                    <TouchableOpacity style={{flexDirection: 'row', padding: '5%'}} >
                        <IconEntypo style={{fontSize: 20, paddingTop: '1%'}} name="user" />
                        <Text style={{fontSize: 18, marginLeft: '5%'}} >Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'row', padding: '5%'}} >
                        <IconFontAwesome style={{fontSize: 20, paddingTop: '1%'}} name="envelope" />
                        <Text style={{fontSize: 18, marginLeft: '5%'}} >Inbox</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'row', padding: '5%'}} >
                        <IconFontAwesome style={{fontSize: 20, paddingTop: '1%'}} name="bell" />
                        <Text style={{fontSize: 18, marginLeft: '5%'}} >Notification</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'row', padding: '5%'}} >
                        <IconFontAwesome style={{fontSize: 20, paddingTop: '1%'}} name="gear" />
                        <Text style={{fontSize: 18, marginLeft: '5%'}} >Setting</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'row', padding: '5%'}} >
                        <IconEntypo style={{fontSize: 20, paddingTop: '1%'}} name="log-out" />
                        <Text style={{fontSize: 18, marginLeft: '5%'}} >Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
        const { navigate } = this.props.navigation;
        return (
            <nb.Container style={styles.container} >
                {/* <StatusBar
                 translucent={false}
                 backgroundColor="rgb(122,77,246)"
                    // hidden={true}
                    // backgroundColor="aqua"
                    barStyle="light-content"
                /> */}
                <DrawerLayoutAndroid
                    ref="myDrawer"
                    drawerWidth={245}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    renderNavigationView={() => navigationView}>
                    <nb.Header style={{ backgroundColor: '#757575' }} >
                        <nb.Left>
                            <nb.Button onPress={() => this.openDrawer()} transparent>
                                <nb.Icon style={{ fontSize: 30 }} name='menu' />
                            </nb.Button>
                        </nb.Left>
                        <nb.Body style={{}} >
                            <nb.Title>Home</nb.Title>
                        </nb.Body>
                        <nb.Right style={{}}>
                            <nb.Button transparent>
                                <IconEntypo style={{ fontSize: 20, color: 'white' }} name='location' />
                            </nb.Button>
                            <nb.Button transparent>
                                <IconFontAwesome style={{ fontSize: 20, color: 'white' }} name='bell' />
                            </nb.Button>
                            <nb.Button transparent>
                                <nb.Icon style={{ fontSize: 25, color: 'white' }} name='search' />
                            </nb.Button>
                        </nb.Right>
                    </nb.Header>
                    <nb.Tabs>
                        <nb.Tab heading={<nb.TabHeading style={{ backgroundColor: '#757575' }} ><Text style={{ fontFamily: 'Ubuntu-M', color: 'white', fontSize: 16, textAlign: 'center' }} >My Events</Text></nb.TabHeading>}>
                            <Page1 />
                        </nb.Tab>
                        <nb.Tab heading={<nb.TabHeading style={{ backgroundColor: '#757575' }} ><Text style={{ fontFamily: 'Ubuntu-M', color: 'white', fontSize: 16, textAlign: 'center' }} >Nearby Events</Text></nb.TabHeading>}>
                            <Page2 />
                        </nb.Tab>
                        <nb.Tab heading={<nb.TabHeading style={{ backgroundColor: '#757575' }} ><Text style={{ fontFamily: 'Ubuntu-M', color: 'white', fontSize: 16, textAlign: 'center' }} >Schedules</Text></nb.TabHeading>}>
                            <Page3 />
                        </nb.Tab>
                    </nb.Tabs>
                </DrawerLayoutAndroid>
            </nb.Container>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});