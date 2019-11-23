import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Auth from './pages/auth';
import Register from './pages/register';
import Login from './pages/login/container';
import ResetPassword from './pages/rest-password';
import Dashboard from './pages/dashboard/container';

const AuthStack = createStackNavigator(
    { Login, Register, Auth, ResetPassword },
    {
        headerMode: 'none',
        initialRouteName: 'Auth',
        transparentCard: true
    }
);

const DashboardStack = createStackNavigator({
    Dashboard
    //Add more screens here
},
    {
        headerMode: 'none',
        initialRouteName: 'Dashboard',
        transparentCard: true
    }
);

const AppStack = (isLoggedIn) => createSwitchNavigator({
    Auth: AuthStack,
    Dashboard: DashboardStack
}, { backBehavior: 'initialRoute', initialRouteName: isLoggedIn ? 'Dashboard' : 'Auth' })

export default createRootNavigation = (isLoggedIn) => createAppContainer(AppStack(isLoggedIn));
