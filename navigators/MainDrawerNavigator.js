import { createDrawerNavigator } from '@react-navigation/drawer';
import InitBottomTabNavigator from './InitBottomTabNavigator';

const Drawer = createDrawerNavigator();

const MainDrawerNavigator = (props) => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Home" component={InitBottomTabNavigator} />
        </Drawer.Navigator>
    );
}

export default MainDrawerNavigator;