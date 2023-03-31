import { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { HeaderTitle } from '../components/HeaderTitle';
import { CustomSwitch } from '../components/CustomSwitch';
import { ThemeContext } from '../context/theme/ThemeContext';

export const SwitchScreen = () => {

    const { theme: { colors } } = useContext( ThemeContext );

    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true,
    });

    const { isActive, isHungry, isHappy } = state;
    
    //? This is (field: keyof typeof state) used because the type was not placed on the state
    const onChange = ( value: boolean, field: keyof typeof state ) => {
        setState({
            ...state,
            [ field ]: value,
        });
    }

    return (
        <View style={{ marginHorizontal: 20 }}>

            <HeaderTitle title='Switches' />

            <View style={ styles.switchRow }>
                <Text style={{ ...styles.switchText, color: colors.text }}>isActive</Text>
                <CustomSwitch isOn={ isActive } onChange={ ( value ) => onChange( value, 'isActive' ) } />
            </View>

            <View style={ styles.switchRow }>
                <Text style={{ ...styles.switchText, color: colors.text }}>isHungry</Text>
                <CustomSwitch isOn={ isHungry } onChange={ ( value ) => onChange( value, 'isHungry' ) } />
            </View>

            <View style={ styles.switchRow }>
                <Text style={{ ...styles.switchText, color: colors.text }}>isHappy</Text>
                <CustomSwitch isOn={ isHappy } onChange={ ( value ) => onChange( value, 'isHappy' ) } />
            </View>

            <Text style={{ ...styles.switchText, color: colors.text }}>{ JSON.stringify( state, null, 4 ) }</Text>

        </View>
    )
};


const styles = StyleSheet.create({
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