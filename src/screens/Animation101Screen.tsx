import { useContext, useRef } from 'react';
import { StyleSheet, View, Animated, Button, Easing } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

import { ThemeContext } from '../context/theme/ThemeContext';


export const Animation101Screen = () => {

    const { opacity, position, fadeIn, fadeOut, startMovingPosition } = useAnimation();

    const { theme: { colors } } = useContext( ThemeContext );

    return (
        <View style={ styles.container }>
            
            <Animated.View style={{ 
                ...styles.purpleBox,
                backgroundColor: colors.primary,
                marginBottom: 20,
                opacity,
                //? It's not possible to use "top" property
                transform: [{
                    translateY: position
                }]
            }} />

            <Button 
                title="FadeIn"
                onPress={ () =>{ 
                    fadeIn(); 
                    startMovingPosition( -100, 1000);
                }}
                color={ colors.primary }
            />

            <Button 
                title="FadeOut"
                onPress={ fadeOut }
                color={ colors.primary }
            />

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
        width: 150,
        height: 150
    }

});