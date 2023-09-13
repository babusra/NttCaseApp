import {View, Text, TouchableOpacity} from 'react-native';
import { Colors } from '../utils/Colors';
import {moderateScale} from '../utils/Dimension';
import Icon from 'react-native-vector-icons/FontAwesome';

export function BottomTabBar({state, descriptors, navigation}: any) {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              borderTopWidth: 4,
              alignItems: 'center',
              justifyContent: 'flex-end',
              paddingBottom: 20,
              height: moderateScale(90),
              borderTopColor: isFocused
                ? Colors.blue
                : Colors.white,
              backgroundColor: Colors.white,
            }}>

              <Icon name={options.tabBarIcon} size={30} color={isFocused? Colors.blue:Colors.darkGrey}  />
              <Text style={{color:isFocused?Colors.blue:Colors.darkGrey}} >{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
