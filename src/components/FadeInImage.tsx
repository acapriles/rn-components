import { useContext, useState } from 'react';
import { Animated, View, ActivityIndicator, StyleProp, ImageStyle } from 'react-native';

import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../context/theme/ThemeContext';


interface Props {
    uri: string;
    // style?: StyleProp<ImageStyle>;
    style: Animated.WithAnimatedObject<ImageStyle>;
}

export const FadeInImage = ( { uri, style: animatedImageStyle = {} }: Props ) => {

    const { theme: { colors } } = useContext( ThemeContext );
    
    const { opacity, fadeIn } = useAnimation();

    const [isLoading, setIsLoading] = useState( true );

    const finishLoading = () => {
        setIsLoading( false );
        fadeIn();
    }
    
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {
                isLoading && <ActivityIndicator style={{ position: 'absolute' }} size={ 25 } color={ colors.primary } />
            }

            <Animated.Image
                source={{ uri }}
                onLoadEnd={ finishLoading }
                style={{
                    // width: '100%',
                    // height: 400,
                    ...animatedImageStyle,
                    // ...animatedImageStyle as any,
                    opacity
                }}
    
            />
        </View>

    )
}
