import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const leftHeader = (navigation) => (
    <MaterialCommunityIcons.Button name="menu" color="black" size={25} underlayColor="white" activeOpacity={1} backgroundColor="white" onPress={() => navigation.openDrawer()} />
);