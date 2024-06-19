import React from 'react';
import {text, View, Stylesheet, TouchableOpacity } from 'react-native';
import Sobre from './sobre';

export default function App() {
    const [page, setPage] = React.useState('home');
    
    const renderPage = () => {
        if (page === 'home') {
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>EXPLORE NOW</Text>
                    <Text style={styles.title}>Seu destino nossa prioridade</Text>
                    <TouchableOpacity style= {styles.button} onPress={() => setPage('sobre')}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            );
        }else if (page === 'sobre') {
            return <Sobre />;
        }
    };
    return <View style={styles.container}>{renderPage()}</View>;

}

const styles = StyleSheet.create({
    container : {
     flex: 1
     const styles = StyleSheet.create({
        container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#323640',
        },
        title: {
        fontSize: 24,
        fontweight: 'bold',
        color: '#629DF7',
        marginBottom: 20,
        },
        button: {
        backgroundColor: '#323640',
        padding: 10,
        borderRadius: 5,
        },
        buttonText: {
        color: '#A3B8DB',
        fontSize: 16,
        },
        });
    }

});