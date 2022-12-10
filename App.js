import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Tabs } from './src/components/Tabs';
import { TopNavbar } from './src/components/TopNavbar';
import { Landing } from './src/screens/Landing';
import { ProfileView } from './src/screens/ProfileView';
import { SignUp } from './src/screens/SignUp';

const Stack = createStackNavigator();

export default function App() {
    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="DashBoard"
                    screenOptions={({ navigation }) => ({
                        header: () => <TopNavbar navigation={navigation} />,
                    })}
                >
                    <Stack.Screen
                        name="Landing"
                        component={Landing}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="Registration"
                        component={SignUp}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen name="Profile" component={ProfileView} />
                    <Stack.Screen name="DashBoard" component={Tabs} />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}
