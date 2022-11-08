import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-paper';

export const TopNavbar = ({ navigation }) => {
    const routesArray = navigation.getState().routes.map((route) => route.name);
    const shouldShowBackBtn = routesArray.some((route) => {
        if (route === 'Profile') {
            return true;
        }
        return false;
    });
    const shouldShowProfileImage = routesArray.some((route) => {
        if (route === 'Profile') {
            return true;
        }
        return false;
    });

    return (
        <View style={styles.navContainer}>
            {shouldShowBackBtn && (
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <Image style={styles.backBtn} source={require('../assets/back.png')} />
                </TouchableOpacity>
            )}
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>IdentityCare</Text>
            </View>
            <View style={styles.profileContainer}>
                {!shouldShowProfileImage && (
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Profile');
                        }}
                    >
                        <Avatar.Image
                            size={33}
                            style={styles.profileImage}
                            source={require('../assets/avatar.jpg')}
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navContainer: {
        height: 80,
        backgroundColor: '#e60265',
        flexDirection: 'row',
    },
    username: {
        fontWeight: '300',
        fontSize: 30,
        alignSelf: 'center',
        color: 'white',
    },
    logout: {
        marginLeft: 7,
        marginRight: 3,
        marginTop: 5,
        alignSelf: 'center',
    },
    logo: {
        marginTop: 13,
        alignSelf: 'center',
        height: 40,
        width: 60,
    },
    logoContainer: {
        flexShrink: 1,
        width: '20%',
        justifyContent: 'center',
    },
    textContainer: {
        flex: 1,
        width: '50%',
        justifyContent: 'center',
    },
    text: {
        marginTop: 13,
        fontSize: 18,
        textAlign: 'center',
        alignSelf: 'flex-start',
        color: 'white',
    },
    profileContainer: {
        marginTop: 13,
        flex: 1,
        width: '40%',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        marginTop: 7,
        marginRight: 14,
    },
    backBtn: {
        tintColor: 'white',
        marginTop: 37,
        marginLeft: 7,
        alignSelf: 'center',
        height: 24,
        width: 24,
    },
});
