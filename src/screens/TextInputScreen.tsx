import { TextInput, View, StyleSheet } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';

export const TextInputScreen = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const onChange = ( value: string, field: keyof typeof form ) => {
        setForm({
            ...form,
            [ field ]: value,
        })
    }


    return (
        <View style={ styles.globalMargin }>
            <HeaderTitle title='Text input' />

            <TextInput
                style={stylesScreen.input}
                placeholder="Name..."
                autoCorrect={ false }
                autoCapitalize="words"
                onChangeText={ ( value ) => onChange( value, 'name' ) }
            />

            <TextInput
                style={stylesScreen.input}
                placeholder="Email..."
                autoCorrect={ false }
                autoCapitalize="none"
                onChangeText={ ( value ) => onChange( value, 'email' ) }
                keyboardType="email-address"
                keyboardAppearance='dark'
            />

            <TextInput
                style={stylesScreen.input}
                placeholder="Phone..."
                onChangeText={ ( value ) => onChange( value, 'phone' ) }
                keyboardType="phone-pad"
            />

            <HeaderTitle title={ JSON.stringify( form, null, 4 ) } />
        </View>
    )
}


const stylesScreen = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10,
    },
});