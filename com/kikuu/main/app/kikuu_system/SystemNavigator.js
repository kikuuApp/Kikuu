import { TabNavigator, StackNavigator } from "react-navigation";
import ActivitiesScreen from "../kikuu_user_activities/ActivitiesScreen";
import ContactsScreen from "../kikuu_user_contacts/ContactsScreen";
import lang from '../../utils/lang';

/**
 * Main Application View When login
 */

const tabBarConfiguration = {
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
    showLabel: true,
    showIcon: true,
    inactiveTintColor: 'blue',
    activeTintColor: '#eee',
  }
}
export const SystemNavigator = TabNavigator({
  Activities: {
    screen: ActivitiesScreen,
  },
  Contacts: {
    screen: ContactsScreen,
  }
}, {
  initialRouteName: 'Activities',
});
