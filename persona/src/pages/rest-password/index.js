import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import Button from '../../components/Button';
import Input from '../../components/Input';
import Anchor from '../../components/Anchor';

export default class ResetPassword extends PureComponent {
    render() {
        const { navigation } = this.props;

        return (
            <>
                <View style={style.containerStyle}>
                    <Text style={style.brandTextStyle} children="PersonaTV+" />
                    <Text style={style.shortTextStyle} children="Provide your account email to receive password reset instructions." />
                    <Input style={{ marginBottom: 10 }} placeholder="Email address" type="email-address" />
                    <Button full={true} title='Continue' />
                    <Anchor
                        style={{ marginTop: 8, textAlign: "center" }}
                        title='Remember your password now?'
                        onPress={_ => navigation.goBack()}
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