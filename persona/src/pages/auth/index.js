import React, { PureComponent } from 'react'
import { Text, View, StatusBar, KeyboardAvoidingView } from 'react-native'
import Button from '../../components/Button';
import { StackActions, NavigationActions } from 'react-navigation';

export default class Login extends PureComponent {

    constructor(pros) {
        super(pros);
        this.goToScreen = this.goToScreen.bind(this);
    }

    render() {
        const { goToScreen } = this;
        return (
            <>
                <StatusBar backgroundColor="transparent" translucent={true} />
                <View style={style.containerStyle}>
                    <Text style={style.brandTextStyle} children="PersonaTV+" />
                    <Text style={style.shortTextStyle} children="Unique TV experience on the Go!" />
                    <Button onPress={_ => goToScreen('Login')} full={true} light={true} title='Login' />
                    <Button onPress={_ => goToScreen('Register')} style={{ marginTop: 8 }} full={true} title='Create an account' />
                </View>
            </>
        )
    }

    goToScreen(screen) {
        const { navigation } = this.props;
        const replaceAction = StackActions.replace({
            routeName: screen
        }, { from: 0 });
        navigation.dispatch(replaceAction);
    }
}

const style = {

    containerStyle: {
        flex: 1,
        backgroundColor: "#050505",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: 16
    },

    brandTextStyle: { fontSize: 28, color: "#ffffff", fontWeight: "700" },

    shortTextStyle: { fontSize: 14, color: '#ffffff90', marginBottom: 32 }
}