import { SectionList, View, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ItemSeparator } from '../components/ItemSeparator';


interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", ]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman",]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama",]
    }
];

export const CustomSectionListScreen = () => {


    return (
        <View style={{ ...styles.globalMargin, flex: 1 }}>

            <SectionList
                sections={ casas }
                keyExtractor={(item, index) => item + index}

                ListHeaderComponent={ () => <HeaderTitle title='Section List' /> }
                ListFooterComponent={ () => (
                    <View style={{ marginBottom: 20 }}>
                        <HeaderTitle title={ `Total Casas: ${casas.length}` } />
                    </View>
                )}
                
                stickySectionHeadersEnabled
                renderItem={ ({ item }) => (
                    <Text>{item}</Text>
                )}
                
                renderSectionHeader={ ({ section }) => (
                    <View style={{ backgroundColor: 'white' }}>
                        <HeaderTitle title={ section.casa } />
                    </View>
                )}
                renderSectionFooter={ ({ section }) => (
                    <HeaderTitle title={ `Total: ${ section.data.length }` } />
                )}

                SectionSeparatorComponent={ () => <ItemSeparator /> }
                ItemSeparatorComponent={ () => <ItemSeparator /> }

                showsVerticalScrollIndicator={ false }
            />

        </View>
    )
}
