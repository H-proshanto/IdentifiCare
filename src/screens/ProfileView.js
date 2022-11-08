import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import { ButtonUI } from '../components/ButtonUI';

export const ProfileView = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.ProfileContainer}>
                <Avatar.Image
                    size={150}
                    style={styles.profileImage}
                    source={require('../assets/avatar.jpg')}
                />
                <Text style={styles.ProfileName}>Hadia Razin Mou</Text>
            </View>
            <View style={styles.bottomContainer}>
                <ButtonUI
                    title="Logout"
                    bodyStyle={styles.logoutBtnContainer}
                    buttonStyle={styles.logoutButton}
                    textStyle={styles.logoutText}
                    onPress={() => console.log('log out')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    ProfileContainer: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ProfileName: {
        marginTop: 14,
        fontSize: 27,
        fontWeight: '400',
    },
    profileImage: {
        marginTop: 21,
    },
    bottomContainer: {
        flex: 0.2,
    },
    logoutBtnContainer: {
        alignItems: 'center',
        marginTop: 21,
    },
    logoutButton: {
        backgroundColor: '#00a3c4',
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 5,
        paddingTop: 5,
        borderRadius: 20,
    },
    logoutText: {
        color: 'white',
        fontSize: 18,
        padding: 5,
        textAlign: 'center',
        alignSelf: 'center',
    },
});
