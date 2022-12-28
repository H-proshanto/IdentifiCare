import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export const QRView = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Scan the QR code below to get all the informations</Text>
            </View>
            <View style={styles.QRcontainer}>
                <QRCode value="heello" size={230} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    titleContainer: {
        flex: 0.2,
        padding: 7,
        justifyContent: 'center',
    },
    title: {
        fontWeight: '500',
        fontSize: 21,
        textAlign: 'center',
        fontFamily: 'sans-serif',
    },
    QRcontainer: {
        flex: 0.9,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
