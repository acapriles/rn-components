import { TextInput, View, StyleSheet } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const TextInputScreen = () => {
  return (
    <View style={ styles.globalMargin }>
        <HeaderTitle title='Text input' />

        <TextInput
            style={stylesScreen.input}
            // onChangeText={onChangeText}
            // value={text}
        />
    </View>
  )
}


const stylesScreen = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        // margin: 12,
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 10
    },
});