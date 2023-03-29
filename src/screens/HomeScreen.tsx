import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { styles } from '../theme/appTheme';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';



export const HomeScreen = () => {

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
                ListHeaderComponent={ () => <HeaderTitle title='Opciones de Menú' /> }
                ItemSeparatorComponent={ itemSeparator }
                keyExtractor={ ( item ) => item.name }
            />
            
        </View>
    )
}
