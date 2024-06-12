import React from 'react';
import {text, View, Stylesheet, TouchableOpacity } from 'react-native';
import Sobre from './sobre';

export default function App() {
    const [page, setPage] = React.useState('home');
    
    const renderPage = () => {
        if (page === 'home') {
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>Página Principal</Text>
                    <Text style={styles.title}>Exemplo 1</Text>
                    <TouchableOpacity style= {styles.button} onPress={() => setPage('sobre')}>
                        <Text style={styles.buttonText}>Clique aqui</Text>
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
    }

});