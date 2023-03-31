import { useContext, useState } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';

import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/theme/ThemeContext';

export const PullToRefreshScreen = () => {

    const { theme: { colors, dividerColor, dark } } = useContext( ThemeContext );

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>();

    const onRefresh = () => {
        setRefreshing(true);

        setTimeout( () => {
            console.log('Done');
            setRefreshing(false);
            setData('Hello world!!!');
        }, 1500);
        
    }

    return (
        <ScrollView
            refreshControl={ 
                <RefreshControl
                    refreshing={ refreshing }
                    onRefresh={ onRefresh }
                    progressViewOffset={ 30 } //? Put the spinner down

                    // Android
                    progressBackgroundColor={ colors.background }
                    colors={ ['red', 'orange', 'yellow'] }
                    
                    // IOS
                    style={{ backgroundColor: colors.background }}
                    tintColor={ dark ? 'white' : 'black' }
                    title="Refreshing"
                    titleColor={ dark ? 'white' : 'black' }
                /> 
            }
        >

            <View style={ styles.globalMargin }>
                <HeaderTitle title='Pull to Refresh' />

                {
                    data && <HeaderTitle title={ data } />
                }


            </View>
        </ScrollView>
    )
}
