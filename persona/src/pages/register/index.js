import React, { PureComponent } from 'react'
import { Text, KeyboardAvoidingView } from 'react-native'
import Button from '../../components/Button';
import Input from '../../components/Input';
import Anchor from '../../components/Anchor';
import { StackActions } from 'react-navigation';

export default class Register extends PureComponent {
    render() {
        const { navigation } = this.props,
            canGoBack = navigation.getParam('from') == 1;

        return (
            <KeyboardAvoidingView style={style.containerStyle}>
                <Text style={style.brandTextStyle} children="PersonaTV+" />
                <Text style={style.shortTextStyle} children="Let's start the amazing journey!" />
                <Input style={{ marginBottom: 10 }} placeholder="Full name" />
                <Input style={{ marginBottom: 10 }} placeholder="Email" />
                <Input style={{ marginBottom: 10 }} placeholder="Username" />
                <Input style={{ marginBottom: 32 }} placeholder="Password" isPassword={true} />
                <Button full={true} title='Continue' />
                <Anchor style={{ marginTop: 8, textAlign: "center" }} title='Already have an account?' onPress={
                    _ =>
                        canGoBack ? navigation.goBack() : this.dispatchClean(navigation)
                } />
            </KeyboardAvoidingView>
        )
    }

    dispatchClean(navigation) {
        navigation.dispatch(StackActions.replace({ routeName: 'Login' }, { from: 1 }));
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