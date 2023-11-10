import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const MainPage = ({ weatherData }) => {
    const { main, temperature, windSpeed } = weatherData;
    return (
        <View style={styles.container}>
            <View style={styles.weatherMain}>
                {(() => {
                    switch (main) {
                        case 'Clear':
                            return <Image
                                style={styles.tinyLogo}
                                source={require('./../assets/sun.png')}
                            />
                        case 'Rain':
                            return <Image
                                style={styles.tinyLogo}
                                source={require('./../assets/rainy.png')}
                            />
                        case 'Snow':
                            return <Image
                                style={styles.tinyLogo}
                                source={require('./../assets/snowy.png')}
                            />
                        case 'Clouds':
                            return <Image
                                style={styles.tinyLogo}
                                source={require('./../assets/cloudy.png')}
                            />
                        default:
                            return <Image
                            style={styles.tinyLogo}
                            source={require('./../assets/sun.png')}
                        />
                    }
                })()}

                <Text>{main}</Text>
            </View>
            <Text style={styles.extraInfo}>Temperature: {temperature}</Text>
            <Text style={styles.extraInfo}>Wind Speed: {windSpeed}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 10,
        backgroundColor: '#184600',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    weatherMain: {
        marginTop: '5%',
        marginBottom: '10%',
        height: '10%',
        width: '30%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    tinyLogo: {
        width: 50,
        height: 50,
        marginRight:'20%'
    },
    extraInfo: {
        marginTop: '5%',
        marginBottom: '10%',
        height: 'auto',
        width: '40%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        textAlign: 'center',
        borderRadius: 10,
    },
});

export default MainPage;