import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { ThemeProvider } from './src/context/theme/ThemeContext';


// const customTheme: Theme = {
// 	dark: true,
// 	colors: {
// 		...DefaultTheme.colors,
// 		// primary: 'string',
// 		// background: 'black',
// 		// card: 'string',
// 		// text: 'string',
// 		// border: 'string',
// 		// notification: 'string',
// 	}
// };

const App = () => {
	return (
		//? The NavigationContainer was placed in the routes file (Navigation.tsx)
		<AppState>	
			{/* <NavigationContainer theme={ customTheme }> */}
				<Navigation />
			{/* </NavigationContainer> */}
		</AppState>
	)
}

const AppState = ({ children }: any ) => {
	return (
		<ThemeProvider>
			{ children }
		</ThemeProvider>
	)
}

export default App;
