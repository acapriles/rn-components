import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MenuItem } from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';


type ScreenNavProp = StackNavigationProp<RootStackParams, any>;

interface Props {
    menuItem: MenuItem;
}

export const FlatListMenuItem = ( { menuItem }: Props) => {

    const navigation = useNavigation<ScreenNavProp>();

    return (
        <TouchableOpacity
            activeOpacity={ 0.8 }
            onPress={ () => navigation.navigate( menuItem.component as any) }
        >
            
            <View style={ styles.container }>
                <Icon 
                    name={ menuItem.icon }
                    color="#5856D6"
                    size={ 23 }
                />

                <Text style={ styles.itemText }>
                    { menuItem.name }
                </Text>

                <View style={{ flex: 1 }} />

                <Icon 
                    name="chevron-forward-outline"
                    color="#5856D6"
                    size={ 23 }
                />

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 10,
        fontSize: 19
    }
});