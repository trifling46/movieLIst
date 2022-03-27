import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './router'
import * as React from 'react'

global.XMLHttpRequest = global.originalXMLHttpRequest
    ? global.originalXMLHttpRequest
    : global.XMLHttpRequest;
global.FormData = global.originalFormData
    ? global.originalFormData
    : global.FormData;

const Stack = createNativeStackNavigator();
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Home'}>
                {
                    routes.map(item =>
                        <Stack.Screen name={item.name} component={item.component} />
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App
