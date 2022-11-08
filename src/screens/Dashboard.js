import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export const DashBoard = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Welcome to Identitycare</Text>
                <Text style={styles.headerDescription}>
                    This is an application for storing all your Identity information such as NID,
                    Drivers License, Passport, Birth Certificate, Student ID, Office ID etc. Users
                    are able to access all their identity. Admins can verify the Users information
                    using the ciphered QR code.
                </Text>
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.bodyTitle}>Get Started</Text>
                <TouchableOpacity
                    style={styles.bodyButton}
                    onPress={() => navigation.navigate('Wallet')}
                >
                    <Text style={styles.bodyBtnText}>Wallet</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.bodyButton}
                    onPress={() => navigation.navigate('QRCode')}
                >
                    <Text style={styles.bodyBtnText}>QR Code</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    headerContainer: {
        flex: 0.3,
        padding: 7,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 21,
    },
    headerDescription: {
        marginTop: 10,
        fontWeight: '300',
        fontSize: 20,
        fontStyle: 'italic',
    },
    bodyContainer: {
        flex: 0.3,
        flexDirection: 'column',
        marginTop: 15,
    },
    bodyTitle: {
        fontWeight: 'bold',
        fontSize: 21,
        padding: 7,
    },
    bodyButton: {
        alignItems: 'center',
        backgroundColor: '#8eefc5',
        padding: 20,
        marginTop: 70,
        marginLeft: 65,
        marginRight: 65,
        borderRadius: 13,
    },
    bodyBtnText: {
        fontWeight: 'bold',
        fontSize: 15,
    },
});
