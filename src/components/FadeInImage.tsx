import { Animated, View, ActivityIndicator, StyleProp, ImageStyle } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { useState } from 'react';


interface Props {
    uri: string;
    // style?: StyleProp<ImageStyle>;
    style: Animated.WithAnimatedObject<ImageStyle>;
}

export const FadeInImage = ( { uri, style: animatedImageStyle = {} }: Props ) => {
    
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
                isLoading && <ActivityIndicator style={{ position: 'absolute' }} size={ 25 } color="#5856D6" />
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
