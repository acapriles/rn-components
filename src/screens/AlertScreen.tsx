import { Alert, Button, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const AlertScreen = () => {

    const showAlert = () => {
        Alert.alert(
            'Alert Title',
            'My Alert Msg', 
            [
                {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',
                },
                {
                    text: 'OK',
                    onPress: () => console.log('OK Pressed')
                },
            ], 
            { 
                cancelable: true,
                onDismiss: () => console.log('onDismiss')
            }
        );
    };

    const showPromt = () => {

    }


    return (
        <View style={ styles.globalMargin }>
            <HeaderTitle title='Alerts' />

            <Button 
                title='Show Alert'
                onPress={ showAlert }
            />

            
        </View>
    )
}
