import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import SearchScreen from '../screens/SearchScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreenStack from './HomeScreenStack';
import SearchScreenStack from './SearchScreenStack';

const Tab = createMaterialBottomTabNavigator();

const InitBottomTabNavigator = (props) => {
    return (
        <Tab.Navigator labeled={true} barStyle={{ backgroundColor: 'white' }}        >
            <Tab.Screen name="HomeStack" component={HomeScreenStack} options={{
                title: "Home",
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name="SearchStack" component={SearchScreenStack} options={{
                title: "Search",
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="airplane-search" color={color} size={26} />
                ),
            }} />
        </Tab.Navigator>
    );
}

export default InitBottomTabNavigator;