import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Home from './home';
 
export default function App() {
    const [page, setPage] = React.useState('sobre');
 
    const renderPage = () => {
        if (page === 'sobre') {
        return (
            <View style={styles.container}>
                <Text style={styles.title}> EXPLORE NOW </Text>
                <Text style={styles.subtitle}> Localização Atual </Text>
                <Text style={styles.text}> Entrar <Text style={styles.textLocal}>Entrar </Text>
                 </Text>
                <TouchableOpacity style={styles.button} onPress={() => setPage('home')}>
                    <Text style={styles.buttonText}> Localize-me </Text>
                </TouchableOpacity>
            </View>
        );
    } else if (page === 'home') {
        return <Home />;
    }
};
 
    return <View style={styles.container}>{renderPage()}</View>;
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '3B598B',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#B6D6F5',
        marginBottom: 20,
    },
    text: {
        fontSize: 14,
        color: '#B6D6F5',
        marginBottom: 20,
    },
    textLocal: {
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: 'black',
        padding: 10,
        borderStyle: 'solid',
        borderRadius: 5,
        borderColor:'C8DDF2',
        borderWidth: 2,
    },
    buttonText: {
        color: '#3B598B',
        fontSize: 16,
        fontWeight: 'bold',
    },
});