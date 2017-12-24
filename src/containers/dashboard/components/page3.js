import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions, ScrollView, TouchableOpacity, Text } from 'react-native';
import * as nb from 'native-base';

const { width, height } = Dimensions.get("window");

export default class Page3 extends Component {
  
    render() {
        return (
            <nb.Content style={styles.container} >
                <Text>Page3</Text>
            </nb.Content>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        
    },
});