import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
 

const AuthStack = createStackNavigator(
    {
        LoginPage: {screen: LoginPage},
        SignupPage: {screen: SignupPage}
    },
    {
        initialRouteName: 'LoginPage'
    }
);

// 최상단 네비게이터
const AppNavigator = createSwitchNavigator(
    {
        Auth: AuthStack
    },
    {
        initialRouteName: 'Auth',
    }
);

export default createAppContainer(AppNavigator);