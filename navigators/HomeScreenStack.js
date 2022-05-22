import { createStackNavigator } from '@react-navigation/stack';
import { leftHeader } from '../global/Menu';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const HomeScreenStack = (props) => {
    const { navigation } = props;
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                title: "Home",
                headerLeft: () => leftHeader(navigation)
            }} />
        </Stack.Navigator>
    );
}

export default HomeScreenStack;