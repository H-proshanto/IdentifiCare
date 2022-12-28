import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Image, Linking, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-paper';
import { ButtonUI } from '../components/ButtonUI';

export const ProfileView = ({ navigation }) => {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.ProfileContainer}>
                <Avatar.Image
                    size={150}
                    style={styles.profileImage}
                    source={require('../assets/avatar.jpg')}
                />
                <Text style={styles.profileName}>Hadia Razin Mou</Text>
            </View>
            <View style={styles.profileDescription}>
                <Text style={styles.bio}>
                    I am a very passionate individual currently studying in Computer Science and
                    Engineering. I am in my final year, finishing undergraduate degree from UITS.
                </Text>
            </View>
            <View style={styles.socials}>
                <TouchableOpacity onPress={pickImage}>
                    <Image style={styles.icon} source={require('../assets/fb.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://gmail.com')}>
                    <Image style={styles.icon} source={require('../assets/mail.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('goto link')}>
                    <Image style={styles.icon} source={require('../assets/linkedIn.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('goto link')}>
                    <Image style={styles.icon} source={require('../assets/github.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.bottomContainer}>
                <ButtonUI
                    title="Logout"
                    bodyStyle={styles.logoutBtnContainer}
                    buttonStyle={styles.logoutButton}
                    textStyle={styles.logoutText}
                    onPress={() => {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Landing' }],
                        });
                    }}
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
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileName: {
        marginTop: 21,
        fontSize: 27,
        fontWeight: '400',
    },
    profileImage: {
        marginTop: 7,
    },
    profileDescription: {
        flex: 0.3,
    },
    socials: {
        flex: 0.1,
        marginBottom: 14,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
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
        borderWidth: 1.2,
    },
    logoutText: {
        color: 'white',
        fontSize: 18,
        padding: 5,
        textAlign: 'center',
        alignSelf: 'center',
    },
    bio: {
        marginTop: 21,
        marginLeft: 14,
        fontSize: 21,
        fontWeight: '300',
    },
    icon: {
        height: 60,
        width: 60,
    },
});
