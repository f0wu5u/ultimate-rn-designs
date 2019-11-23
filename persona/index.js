/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import AppContainer from './src/AppContainer';
import { name as appName } from './app.json';
import { combineReducers, createStore, applyMiddleware } from "redux";

import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import AppReducer from './src/AppReducer';
import DashboardReducer from './src/pages/dashboard/reducer';

const reducers = combineReducers({
    appState : AppReducer,
    dashboardState : DashboardReducer
}),
    store = createStore(reducers, applyMiddleware(thunk)),
    rootComponent = () => <Provider store={store}><AppContainer/></Provider>

AppRegistry.registerComponent(appName, () => rootComponent);
