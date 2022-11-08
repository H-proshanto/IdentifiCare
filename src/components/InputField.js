import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export const InputField = ({ text, setter, placeholder, onBlur }) => {
    return (
        <>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>{placeholder}</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder={`Enter ${placeholder} Here`}
                    onChangeText={setter}
                    onBlur={onBlur}
                    value={text}
                    onPointerEnter={() => styles}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 0.2,
    },
    inputText: {
        marginTop: 14,
        marginLeft: 28,
        marginRight: 28,
        padding: 7,
        borderWidth: 0.5,
        color: 'black',
    },
    inputTitle: {
        marginTop: 28,
        marginLeft: 28,
        fontSize: 18,
        fontWeight: 'bold',
    },
});
