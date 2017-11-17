import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Container, Content, Card, Thumbnail, CardItem, Button, Form, Input, Item, Label, Left, Icon, Header, Title, Right, Body } from 'native-base';


const { width, height } = Dimensions.get("window");
export default class EventDetails extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container style={styles.container} >
                <Header style={{ backgroundColor: '#757575' }} >
                    <Body style={{ flex: 3 }} >
                        <Item style={{ marginLeft: '5%' }}>
                            <Icon style={{ color: 'white' }} name='pin' />
                            <Input style={{ color: 'white' }} placeholderTextColor="#161616" placeholder='Search' />
                        </Item>
                    </Body>
                    <Right style={{}}>
                        <Button transparent>
                            <Icon style={{ fontSize: 30 }} name='add' />
                        </Button>
                        <Button transparent>
                            <Icon style={{ fontSize: 30 }} name='search' />
                        </Button>
                    </Right>
                </Header>
                
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