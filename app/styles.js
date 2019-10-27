import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: '#000',
    },

    containerLightTheme: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textLightTheme: {
        color: '#666',
    },

    titleLightTheme: {
        backgroundColor: '#eee',
        fontWeight: 'bold',
        fontSize: 30,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    containerDarkTheme: {
        flex: 1,
        backgroundColor: '#000',
    },

    titleDarkTheme: {
        marginTop: 20,
        fontFamily: 'Trebuchet MS',
        fontWeight: 'bold',
        fontSize: 30,
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textDarkTheme: {
        color: '#fff',
        fontSize: 16,

    },

    subtitleDarkTheme: {
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    listDarkTheme: {
        backgroundColor: '#111',
    },

    buycompDarkTheme: {
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        marginTop:5,
        marginBottom:5
        
    }


});

export default styles;