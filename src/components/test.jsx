import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    render() {

        const temp = 'http://thumbs.dreamstime.com/z/close-up-angry-chihuahua-growling-2-years-old-15126199.jpg';

        const images = [];

        for (var i = 0; i < 10; i++) {
            images.push(
                <TouchableOpacity key={i}
                    activeOpacity={0.75}
                    style={styles.item}
                >
                    <Image
                        style={styles.image}
                        source={{ uri: temp }}
                    />
                </TouchableOpacity>
            );
        }


        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.container}>
                    {images}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    item: {
        backgroundColor: 'orange',
        width: deviceWidth / 2,
        height: deviceWidth / 2
    },

    image: {
        width: deviceWidth / 2,
        height: deviceWidth / 2
    }
});
