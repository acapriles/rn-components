import { TextInput, View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';

export const TextInputScreen = () => {

    const { name, email, phone, isSubscribed, form, onChange } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false
    });


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
                    
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

                        <View style={ stylesScreen.switchRow }>
                            <Text style={ stylesScreen.switchText }>Suscribirse:</Text>
                            <CustomSwitch isOn={ isSubscribed } onChange={ ( value ) => onChange( value, 'isSubscribed' ) } />
                        </View>


                        <HeaderTitle title={ JSON.stringify( form, null, 4 ) } />

                        <HeaderTitle title={ JSON.stringify( form, null, 4 ) } />


                        <TextInput
                            style={stylesScreen.input}
                            placeholder="Phone..."
                            onChangeText={ ( value ) => onChange( value, 'phone' ) }
                            keyboardType="phone-pad"
                        />

                        <View style={{ height: 100 }} />

                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
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
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5
    },
    switchText: {
        fontSize: 25,
    }
});