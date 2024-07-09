import React from 'react';
import { FlatList, View, Text, StyleSheet, ScrollView } from 'react-native';

const FlatListExample = () => {
    const DATA = [
        { id: '1', title: 'Item 1' },
        { id: '2', title: 'Item 2' },
        { id: '3', title: 'Item 3' },
        { id: '4', title: 'Item 3' },
        { id: '5', title: 'Item 3' },
        { id: '6', title: 'Item 3' },
        { id: '7', title: 'Item 3' },
        { id: '8', title: 'Item 3' },
        { id: '9', title: 'Item 3' },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    );

    return (
        <ScrollView>
            <FlatList
                data={DATA}
                scrollEnabled={false}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#f9c2ff',
    },
    title: {
        fontSize: 32,
    },
});

export default FlatListExample;
