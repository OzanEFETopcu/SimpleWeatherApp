import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const LocationInput = ({ cityName, onInputChange, onFetchWeather }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onInputChange(text)}
                value={cityName}
                placeholder="Enter City Name"
            />
            <Button title="Fetch Weather" onPress={onFetchWeather} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default LocationInput;
