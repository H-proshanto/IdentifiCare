import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const ItemView = ({ item }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.icon} source={item.imagePath} />
            <View style={styles.titleContainer} onPress={() => console.log('navigate to itemView')}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    titleContainer: {
        flex: 0.8,
        borderRadius: 8,
        justifyContent: 'center',
        padding: 10,
    },
    container: {
        margin: 21,
        borderRadius: 15,
        backgroundColor: '#ded9db',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    title: {
        textAlign: 'left',
        justifyContent: 'center',
        color: 'black',
    },
    icon: {
        width: 45,
        height: 45,
    },
});
