import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { login } from '../API/APICaller';
import { MAIL_FORMAT } from '../config';
import { ButtonUI } from './ButtonUI';
import { InputField } from './InputField';

export const LoginForm = ({ navigation }) => {
    const validate = (values) => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!values.email.match(MAIL_FORMAT)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Password is required';
        }

        return errors;
    };

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={async (values) => {
                try {
                    await login(values);
                    navigation.navigate('DashBoard');
                } catch (error) {
                    console.log(error.message);
                }

            }}
            validate={validate}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={styles.container}>
                    <InputField
                        text={values.email}
                        setter={handleChange('email')}
                        onBlur={handleBlur('email')}
                        placeholder="Email"
                    />
                    {errors.email && touched.email ? (
                        <Text style={styles.errorMessage}>{errors.email}</Text>
                    ) : (
                        <></>
                    )}
                    <InputField
                        text={values.password}
                        setter={handleChange('password')}
                        onBlur={handleBlur('password')}
                        placeholder="Password"
                    />
                    {errors.password && touched.password ? (
                        <Text style={styles.errorMessage}>{errors.password}</Text>
                    ) : (
                        <></>
                    )}
                    <ButtonUI
                        title="Log In"
                        bodyStyle={styles.loginContainer}
                        buttonStyle={styles.loginButton}
                        textStyle={styles.loginText}
                        onPress={handleSubmit}
                    />
                </View>
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 7,
    },
    errorMessage: {
        color: 'red',
        fontWeight: 'bold',
        padding: 7,
        marginLeft: 21,
    },
    loginContainer: {
        alignItems: 'center',
        marginTop: 21,
    },
    loginButton: {
        backgroundColor: '#e602a2',
        paddingLeft: 110,
        paddingRight: 110,
        paddingBottom: 5,
        paddingTop: 5,
        borderRadius: 20,
    },
    loginText: {
        color: 'white',
        fontSize: 18,
        padding: 5,
        textAlign: 'center',
        alignSelf: 'center',
    },
    loaderStyle: {
        paddingTop: 6,
        paddingBottom: 5,
        paddingLeft: 16,
        paddingRight: 16,
    },
});
