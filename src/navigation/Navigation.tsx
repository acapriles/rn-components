import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens/HomeScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';

//? Defines the parameters that the screens receive
export type RootStackParams = {
    HomeScreen: undefined;
    Animation101Screen: undefined;
    Animation102Screen: undefined;
    'menuItem.component': undefined
}


const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="HomeScreen" component={ HomeScreen } />
            <Stack.Screen name="Animation101Screen" component={ Animation101Screen } />
            <Stack.Screen name="Animation102Screen" component={ Animation102Screen } />
        </Stack.Navigator>
    );
}