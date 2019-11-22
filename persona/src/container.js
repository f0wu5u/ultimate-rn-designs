import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Auth from './pages/auth';
import Register from './pages/register';
import Login from './pages/login';
import ResetPassword from './pages/rest-password';
import Dashboard from './pages/dashboard';

const AuthStack = createStackNavigator(
    { Login, Register, Auth, ResetPassword },
    { headerMode: 'none', initialRouteName: 'Auth', transparentCard: true }
);

const DashboardStack = createStackNavigator({
    Dashboard
    //Add more stack here
}, { headerMode: 'none', initialRouteName: 'Dashboard', transparentCard: true })

const AppStack = createSwitchNavigator({
    Auth: AuthStack,
    Dashboard: DashboardStack
}, { backBehavior: 'initialRoute', initialRouteName: 'Dashboard' })

export default createAppContainer(DashboardStack);
