import { useContext, useState } from 'react';
import { TextInput, View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';

import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';
import { ThemeContext } from '../context/theme/ThemeContext';

export const TextInputScreen = () => {

    const { theme: { colors, dividerColor } } = useContext( ThemeContext );

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
                            style={{
                                ...stylesScreen.input,
                                borderColor: colors.text,
                                color: colors.text
                            }}
                            placeholder="Name..."
                            autoCorrect={ false }
                            autoCapitalize="words"
                            onChangeText={ ( value ) => onChange( value, 'name' ) }
                            placeholderTextColor={ dividerColor }
                        />

                        <TextInput
                            style={{
                                ...stylesScreen.input,
                                borderColor: colors.text,
                                color: colors.text
                            }}
                            placeholder="Email..."
                            autoCorrect={ false }
                            autoCapitalize="none"
                            onChangeText={ ( value ) => onChange( value, 'email' ) }
                            keyboardType="email-address"
                            keyboardAppearance='dark'
                            placeholderTextColor={ dividerColor }
                        />

                        <View style={ stylesScreen.switchRow }>
                            <Text style={{
                                ...stylesScreen.switchText,
                                color: colors.text
                            }}>Suscribirse:</Text>
                            <CustomSwitch isOn={ isSubscribed } onChange={ ( value ) => onChange( value, 'isSubscribed' ) } />
                        </View>


                        <HeaderTitle title={ JSON.stringify( form, null, 4 ) } />

                        <HeaderTitle title={ JSON.stringify( form, null, 4 ) } />


                        <TextInput
                            style={{
                                ...stylesScreen.input,
                                borderColor: colors.text,
                                color: colors.text
                            }}
                            placeholder="Phone..."
                            onChangeText={ ( value ) => onChange( value, 'phone' ) }
                            keyboardType="phone-pad"
                            placeholderTextColor={ dividerColor }
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