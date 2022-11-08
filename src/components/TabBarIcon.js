import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export const TabBarIcon = ({ focused, title }) => {
    const iconStyles = styles(focused);
    const path =
        title === 'Wallet' ? require('../assets/wallet.png') : require('../assets/QR_code.png');
    return (
        <View style={iconStyles.iconContainer}>
            {title === 'Home' ? (
                <Icon
                    name="home"
                    style={iconStyles.icon}
                    size={23}
                    color={focused ? '#e32f45' : '#748c94'}
                />
            ) : (
                <Image style={iconStyles.icon} resizeMode="contain" source={path} />
            )}

            <Text style={iconStyles.text}>{title}</Text>
        </View>
    );
};

const styles = (focused) => {
    const tintColor = focused ? '#e32f45' : '#748c94';
    return StyleSheet.create({
        iconContainer: {
            alignItems: 'center',
            justifyContent: 'center',
            top: 2,
        },

        icon: {
            width: 25,
            height: 25,
            tintColor,
        },
        text: {
            color: tintColor,
            fontSize: 12,
            textAlign: 'center',
        },
    });
};
