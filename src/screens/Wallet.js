import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IdentificationList } from '../components/IdentificationList';

export const Wallet = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Identification Wallet</Text>
                <Text style={styles.headerDescription}>
                    You will find all your identifications here.
                </Text>
            </View>
            <IdentificationList navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flex: 0.1,
        padding: 7,
        alignItems: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center',
        fontFamily: 'sans-serif',
    },
    headerDescription: {
        marginTop: 10,
        fontWeight: '200',
        fontSize: 21,
        fontStyle: 'italic',
        fontFamily: 'sans-serif',
    },
});
