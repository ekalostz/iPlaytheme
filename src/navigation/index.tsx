import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
   Login as LoginScreen,
   Forgot_password as ForgotScreen,
   Sign_up as SignScreen,
   Phone_Login as PhoneScreen,
   Opt as OptScreen,
   Reset_password as ResetScreen,
   Terms as TermScreen,
   Wallet as WalletScreen,
   News as NewsScreen,
   Explore as ExploreScreen,
   Account as AccountScreen,
} from '../screens';

const RootStack = createStackNavigator({
  Login: {
    navigationOptions: () => ({
      title: 'Login',
      headerTitleAlign: 'center',
      headerShown: false,
    }),
    screen: LoginScreen
  },
  Forgot_password: {
    navigationOptions: () => ({
      title: 'Forgot Password',
      headerTitleAlign: 'center',
      headerShown: true
    }),
    screen: ForgotScreen
  },
  Sign_up: {
    navigationOptions: () => ({
      title: 'Create an account',
      headerTitleAlign: 'center',
      headerShown: true
    }),
    screen: SignScreen
  },
  Phone_Login: {
    navigationOptions: () => ({
      title: 'Phone number login',
      headerTitleAlign: 'center',
      headerShown: false
    }),
    screen: PhoneScreen
  },
  Opt: {
    navigationOptions: () => ({
      title: 'Opt',
      headerTitleAlign: 'center',
      headerShown: true
    }),
    screen: OptScreen
  },
  Reset_password: {
    navigationOptions: () => ({
      title: 'New Password',
      headerTitleAlign: 'center',
      headerShown: true
    }),
    screen: ResetScreen
  },
  Terms: {
    navigationOptions: () => ({
      title: 'Terms and Conditions',
      headerTitleAlign: 'center',
      headerShown: true,
      headerLeft: null
    }),
    screen: TermScreen
  },
  Wallet: {
    navigationOptions: () => ({
      title: 'Wallet',
      headerTitleAlign: 'center',
      headerShown: false
    }),
    screen: WalletScreen
  },
  News: {
    navigationOptions: () => ({
      title: 'News',
      headerTitleAlign: 'center',
      headerShown: true,
      headerLeft: null
    }),
    screen: NewsScreen
  },
  Explore: {
    navigationOptions: () => ({
      title: 'Explore',
      headerTitleAlign: 'center',
      headerShown: true,
      headerLeft: null
    }),
    screen: ExploreScreen
  },
  Account: {
    navigationOptions: () => ({
      title: 'Account',
      headerTitleAlign: 'center',
      headerShown: true,
      headerLeft: null
    }),
    screen: AccountScreen
  },
});

const Navigate = createAppContainer(RootStack);
export default Navigate;