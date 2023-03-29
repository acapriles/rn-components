import { StyleSheet, View } from 'react-native';


export const Animation102Screen = () => {


    return (
        <View style={ styles.container }>
            
            <View style={{ 
                ...styles.purpleBox,
            }} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150
    }

});