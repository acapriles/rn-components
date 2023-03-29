import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { MenuItem } from '../interfaces/appInterfaces';
import { styles } from '../theme/appTheme';
import { FlatListMenuItem } from '../components/FlatListMenuItem';




const menuItems: MenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animation101Screen',
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        component: 'Animation102Screen',
    },
];

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    //? FlatList Header
    const renderListHeader = () => {
        return (
            <View style={{ marginTop: top + 20, marginBottom: 20, }}>
                <Text style={ styles.title }>Opciones de Menú</Text>
            </View>
        )
    }

    //? FlatList Separator
    const itemSeparator = () => {
        return (
            <View 
                style={{
                    borderBottomWidth: 1,
                    opacity: 0.4,
                    marginVertical: 8,
                }} 
            />
        )
    }


    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>

            <FlatList 
                data={ menuItems }
                renderItem={ ({ item }) => <FlatListMenuItem menuItem={ item } /> }
                ListHeaderComponent={ renderListHeader }
                ItemSeparatorComponent={ itemSeparator }
                keyExtractor={ ( item ) => item.name }
            />
            
        </View>
    )
}
