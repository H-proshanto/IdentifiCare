import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { DATA } from '../config';
import { ItemView } from './ItemView';

export const IdentificationList = ({ navigation }) => {
    const renderItem = ({ item }) => <ItemView item={item} />;

    return (
        <View style={styles.listContainer}>
            <FlatList data={DATA} renderItem={renderItem} />
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        flex: 0.9,
    },
});
