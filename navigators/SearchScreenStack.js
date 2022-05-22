import { createStackNavigator } from '@react-navigation/stack';
import { leftHeader } from '../global/Menu';
import SearchScreen from '../screens/SearchScreen';

const Stack = createStackNavigator();

const SearchScreenStack = (props) => {
    const { navigation } = props;
    return (
        <Stack.Navigator>
            <Stack.Screen name="SearchScreen" component={SearchScreen} options={{
                title: "Search",
                headerLeft: () => leftHeader(navigation)
            }} />
        </Stack.Navigator>
    );
}

export default SearchScreenStack;