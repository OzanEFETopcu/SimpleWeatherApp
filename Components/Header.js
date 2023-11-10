import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = ({ cityName }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{cityName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000846',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff'
    }
});

export default Header;