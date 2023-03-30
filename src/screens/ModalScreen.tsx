import { useState } from 'react';
import { Pressable, View, Text, Button, Modal } from 'react-native';

import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';


export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <View style={ styles.globalMargin }>
            <HeaderTitle title='Modal Screen' />

            <Pressable onPress={ () => setIsVisible(true) }>
                <Text>Open Modal</Text>
            </Pressable>


            <Modal
                    animationType="fade"
                    visible={ isVisible }
                    transparent={ true }
                >

                    {/* Background black */}
                    <View style={{
                        flex: 1,
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>

                        {/* Modal body */}
                        <View style={{
                            width: 200,
                            height: 200,
                            backgroundColor: 'white',
                            justifyContent: 'center',
                            alignItems: 'center',
                            shadowOffset: {
                                width: 0,
                                height: 10
                            },
                            shadowOpacity: 0.25,
                            elevation: 10,
                            borderRadius: 5
                        }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Modal</Text>
                            <Text style={{ fontSize: 16, fontWeight: '300', marginBottom: 20 }}>Modal body</Text>
                            <Button
                                title="Close"
                                onPress={ () => setIsVisible(false) }
                            />
                        </View>

                    </View>

                </Modal>

        </View>
    )
}
