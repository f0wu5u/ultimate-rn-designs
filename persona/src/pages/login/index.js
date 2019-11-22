import React, { PureComponent } from 'react'
import { Text, View, StatusBar, KeyboardAvoidingView } from 'react-native'
import Button from '../../components/Button';
import Input from '../../components/Input';
import Anchor from '../../components/Anchor';

export default class Login extends PureComponent {
    render() {
        const { navigation } = this.props,
            from = navigation.getParam('from') || 1;

        return (
            <>
                <StatusBar backgroundColor="transparent" translucent={true} />
                <View style={style.containerStyle}>
                    <Text style={style.brandTextStyle} children="PersonaTV+" />
                    <Text style={style.shortTextStyle} children="Provide your account credentials to continue" />
                    <Input style={{ marginBottom: 10 }} placeholder="Username" />
                    <Input placeholder="Password" isPassword={true} />
                    <Anchor style={{ marginBottom: 32, textAlign: 'right' }} title="Forgot Password?" onPress={
                        _ => navigation.navigate('ResetPassword')
                    } />
                    <Button full={true} title='Login' />
                    <Anchor
                        style={{ marginTop: 8, textAlign: "center" }}
                        title='Create an account'
                        onPress={_ => navigation.navigate({ routeName: 'Register', params: { from } })}
                    />
                </View>
            </>
        )
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