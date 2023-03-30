import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { styles } from '../theme/appTheme';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';



export const HomeScreen = () => {

    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>

            <FlatList 
                data={ menuItems }
                renderItem={ ({ item }) => <FlatListMenuItem menuItem={ item } /> }
                ListHeaderComponent={ () => <HeaderTitle title='Opciones de Menú' /> }
                ItemSeparatorComponent={ () =>  <ItemSeparator /> }
                keyExtractor={ ( item ) => item.name }
            />
            
        </View>
    )
}
