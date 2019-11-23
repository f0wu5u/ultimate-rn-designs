import React, { Component } from 'react';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import createRootNavigation from './NavigationTree';


export default class App extends Component {

    constructor(props) {
        super(props);
        props.checkLogin();
    }
    render() {
        // get Authentication Check and Authentication state from AppReducer.js
        const { already_logged, auth_checked } = this.props.appState;

        //Get base Component for render
        const BaseView = auth_checked ? _renderRootNavigation(already_logged) : _renderLoader();
        return (

            <SafeAreaView style={{
                flex: 1, backgroundColor: "#050505",
                justifyContent: "center", alignContent: 'center'
            }} children={BaseView} />
        )
    }
}

const _renderRootNavigation = (authState) => {
    const RootNavigation = createRootNavigation(authState);
    return <RootNavigation />
}

const _renderLoader = () => <ActivityIndicator size="large" />
