import { RefreshControl, ScrollView, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';

export const PullToRefreshScreen = () => {

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
                    progressBackgroundColor="#5856D6"
                    colors={ ['red', 'orange', 'yellow'] }
                    // IOS
                    style={{ backgroundColor: '#5856D6' }}
                    tintColor="white"
                    title="Refreshing"
                    titleColor="white"
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
