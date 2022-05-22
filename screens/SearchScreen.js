import React from "react";
import { View, StyleSheet } from 'react-native';
import { Text } from "react-native-paper";

const SearchScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>Search Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default SearchScreen;